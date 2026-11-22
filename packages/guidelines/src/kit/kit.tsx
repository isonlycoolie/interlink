// SPDX-License-Identifier: Apache-2.0
import type { CSSProperties, ReactNode } from 'react';

/**
 * Illustration kit for guideline examples: wireframe pieces drawn only with tokens, so every example
 * follows the theme and stays focused on the rule it shows.
 */

/** A rounded grey bar standing in for a line of text. `size` follows the type scale it replaces. */
export function Skeleton({ width = '100%', size = 'body', tone = 'subtle' }: { width?: string; size?: 'heading' | 'label' | 'body' | 'small'; tone?: 'strong' | 'subtle' }) {
  return <span className="ilk-skeleton" data-size={size} data-tone={tone} style={{ width }} aria-hidden="true" />;
}

/** An empty input outline with a placeholder line inside. */
export function FieldShape() {
  return (
    <span className="ilk-field" aria-hidden="true">
      <Skeleton width="40%" size="small" />
    </span>
  );
}

/** A raised card: surface, shadow and radius tokens together. */
export function Card({ children, width, padding = 'space.300', style }: { children: ReactNode; width?: string; padding?: 'space.200' | 'space.300' | 'space.400'; style?: CSSProperties }) {
  return (
    <div className="ilk-card" style={{ width, padding: `var(--il-${padding.replace('.', '-')})`, ...style }}>
      {children}
    </div>
  );
}

/**
 * A vertical gap of exactly one space token. Give it a verdict to draw it as a hatched band that marks the gap
 * the rule is about: `good` in the discovery colour, `bad` in the danger colour.
 */
export function Gap({ space, verdict }: { space: string; verdict?: 'good' | 'bad' }) {
  return (
    <span
      className={verdict ? 'ilk-gap ilk-spacing-mark' : 'ilk-gap'}
      data-verdict={verdict}
      style={{ height: `var(--il-${space.replace('.', '-')})` }}
      aria-hidden="true"
    />
  );
}

/** A dashed vertical guide drawn over content to show an alignment edge. */
export function AlignGuide({ verdict, offset = '0px' }: { verdict: 'good' | 'bad'; offset?: string }) {
  return <span className="ilk-align-guide" data-verdict={verdict} style={{ insetInlineStart: offset }} aria-hidden="true" />;
}

/** Frame that clips an example to a fixed area, like a crop of a larger screen. */
export function Crop({ children, height }: { children: ReactNode; height?: string }) {
  return (
    <div className="ilk-crop" style={{ height }}>
      {children}
    </div>
  );
}
