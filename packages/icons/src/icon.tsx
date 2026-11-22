// SPDX-License-Identifier: Apache-2.0
import { tokenNames, type TokenName } from '@interlink/tokens';
import { memo, type ComponentType } from 'react';

export type IconColor = Extract<TokenName, `color.icon${string}` | `color.text${string}` | `color.link${string}`> | 'currentColor';
export type IconSize = 'small' | 'medium';
export type IconSpacing = 'none' | 'compact' | 'spacious';

export interface IconProps {
  /** What the icon means. Use an empty string when the icon is decorative and text beside it says the same. */
  label: string;
  /** An icon or text colour token. Defaults to the surrounding text colour. */
  color?: IconColor;
  /** 16px (medium) or 12px (small). */
  size?: IconSize;
  /** Padding around the glyph so it lines up with 24px or 16px controls. */
  spacing?: IconSpacing;
  /** Fill the parent instead of a fixed size. */
  shouldScale?: boolean;
  testId?: string;
}

const PADDING: Record<IconSize, Record<IconSpacing, number>> = {
  medium: { none: 0, compact: 4, spacious: 4 },
  small: { none: 0, compact: 2.66, spacious: 8 },
};

interface BaseProps extends IconProps {
  name: string;
  glyph: string;
}

/** Shared renderer for every Interlink icon. Glyphs are 16x16 artwork drawn in currentColor. */
export const Icon = memo(function Icon({ name, glyph, label, color = 'currentColor', size = 'medium', spacing = 'none', shouldScale, testId }: BaseProps) {
  const pad = PADDING[size][spacing];
  const box = 16 + 2 * pad;
  const cssColor = color === 'currentColor' ? undefined : `var(${(tokenNames as Record<string, string>)[color]})`;
  return (
    <span
      data-testid={testId}
      data-icon={name}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={`il-icon il-icon-${shouldScale ? 'scale' : `${size}-${spacing}`}`}
      style={cssColor ? { color: cssColor } : undefined}
    >
      <svg fill="none" viewBox={`${-pad} ${-pad} ${box} ${box}`} role="presentation" dangerouslySetInnerHTML={{ __html: glyph }} />
    </span>
  );
});

/** Build a named icon component from its glyph markup. Used by the generated icon modules. */
export function createIcon(name: string, glyph: string): ComponentType<IconProps> {
  const Named = (props: IconProps) => <Icon {...props} name={name} glyph={glyph} />;
  Named.displayName = `${name.replace(/(^|-)([a-z0-9])/g, (_, __, c: string) => c.toUpperCase())}Icon`;
  return Named;
}
