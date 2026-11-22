// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';

export type TileSize = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type Hue = 'lime' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'magenta' | 'gray';
type Semantic = 'danger' | 'warning' | 'success' | 'discovery' | 'information';
/** A background color token, by its token name. */
export type TileBackgroundColor =
  | `color.background.accent.${Hue}.${'subtlest' | 'subtler' | 'subtle' | 'bolder'}`
  | 'color.background.inverse.subtle'
  | 'color.background.neutral'
  | 'color.background.neutral.bold'
  | 'color.background.brand.subtlest'
  | 'color.background.brand.bold'
  | 'color.background.brand.boldest'
  | `color.background.${Semantic}`
  | `color.background.${Semantic}.bold`
  | 'transparent'
  | 'white'
  | 'black';

export interface TileProps {
  /** Names what the tile shows; use an empty string when text next to it says the same. */
  label: string;
  size?: TileSize;
  /** Pad the content inside the tile, for icons and emoji; off fills the tile, for images. */
  isInset?: boolean;
  hasBorder?: boolean;
  backgroundColor?: TileBackgroundColor;
  children?: ReactNode;
  testId?: string;
}

/** Token name to CSS: color.background.accent.blue.subtler becomes var(--il-background-accent-blue-subtler). */
const bg = (token: TileBackgroundColor) => (token.startsWith('color.') ? `var(--il-${token.slice(6).replace(/\./g, '-')})` : token === 'white' ? 'var(--il-surface)' : token === 'black' ? 'var(--il-background-neutral-bold)' : token);

/** A square container for an icon, emoji or image, sized to sit next to text. */
export function Tile({ label, size = 'medium', isInset = true, hasBorder = false, backgroundColor = 'color.background.neutral', children, testId }: TileProps) {
  return (
    <span
      className="il-tile"
      data-size={size}
      data-inset={isInset || undefined}
      data-border={hasBorder || undefined}
      style={{ backgroundColor: bg(backgroundColor) }}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      data-testid={testId}
    >
      {children}
    </span>
  );
}
