// SPDX-License-Identifier: Apache-2.0
import { memo, type ComponentType, type CSSProperties } from 'react';

export type IllustrationColor = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'accent' | 'neutral' | 'ink' | 'paper';
export type IllustrationSize = 'small' | 'medium' | 'large';

export interface IllustrationProps {
  /** What the picture shows. Leave it out when text next to it says the same; it is then hidden from screen readers. */
  label?: string;
  /** Height: 64, 120 or 200 pixels, or a number. Hero pieces are twice as wide. */
  size?: IllustrationSize | number;
  /** Recolour any role, for example { primary: 'var(--brand)', tertiary: '#00A3BF' }. */
  colors?: Partial<Record<IllustrationColor, string>>;
  testId?: string;
}

const HEIGHT: Record<IllustrationSize, number> = { small: 64, medium: 120, large: 200 };

interface BaseProps extends IllustrationProps {
  name: string;
  art: string;
  ratio: number;
}

/** Shared renderer for every Interlink illustration: artwork drawn in palette roles that CSS variables fill in. */
export const Illustration = memo(function Illustration({ name, art, ratio, label, size = 'medium', colors, testId }: BaseProps) {
  const height = typeof size === 'number' ? size : HEIGHT[size];
  const style = { width: height * ratio, height } as CSSProperties & Record<string, string | number>;
  for (const [role, value] of Object.entries(colors ?? {})) if (value) style[`--il-illo-${role}`] = value;
  return (
    <span
      className="il-illustration"
      data-illustration={name}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      style={style}
      data-testid={testId}
    >
      <svg viewBox={`0 0 ${96 * ratio} 96`} width="100%" height="100%" role="presentation" dangerouslySetInnerHTML={{ __html: art }} />
    </span>
  );
});

/** Build a named illustration component from its artwork. Used by the generated modules. */
export function createIllustration(name: string, art: string, ratio = 1): ComponentType<IllustrationProps> {
  const Named = (props: IllustrationProps) => <Illustration {...props} name={name} art={art} ratio={ratio} />;
  Named.displayName = name.replace(/(^|-)([a-z0-9])/g, (_, __, c: string) => c.toUpperCase());
  return Named;
}
