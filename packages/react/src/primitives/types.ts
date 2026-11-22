// SPDX-License-Identifier: Apache-2.0
import type { CSSProperties } from 'react';
import type { BackgroundToken, SpaceToken } from '../generated/xcss-types';
import type { XCSS } from '../xcss/xcss';

export type { BackgroundToken };

export interface BasePrimitiveProps {
  /** Rendered as `data-testid`. */
  testId?: string;
  /** Token-only styles built with `xcss()`. */
  xcss?: XCSS | false | null | undefined;
  role?: string;
}
export interface StyleProp {
  /** Last resort for values only known at runtime. */
  style?: CSSProperties;
}

export type PositiveSpaceToken = Exclude<SpaceToken, `space.gap.${string}` | `space.inset.${string}`>;
export type PaddingToken = Exclude<SpaceToken, `space.gap.${string}`>;
export type GapToken = Exclude<SpaceToken, `space.inset.${string}`>;
export type BleedSpaceToken = 'space.025' | 'space.050' | 'space.100' | 'space.150' | 'space.200';
export type SurfaceColorToken = Extract<BackgroundToken, `elevation.surface${string}` | 'utility.elevation.surface.current'>;

export type AlignBlock = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type AlignContent = 'center' | 'start' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch' | 'end';
export type AlignInline = 'start' | 'center' | 'end' | 'stretch';
export type AlignItems = 'center' | 'start' | 'stretch' | 'end' | 'baseline';
export type AutoFlow = 'column' | 'row' | 'dense' | 'row dense' | 'column dense';
export type Direction = 'column' | 'row';
export type Grow = 'hug' | 'fill';
export type JustifyContent = 'center' | 'start' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch' | 'end';
export type JustifyItems = 'center' | 'start' | 'stretch' | 'end';
export type Spread = 'space-between';
export type Wrap = 'wrap' | 'nowrap';
export type TextAlign = 'center' | 'end' | 'start';
export type FontSize = 'small' | 'medium' | 'large';
export type FontWeight = 'bold' | 'medium' | 'regular' | 'semibold';
export type MetricTextFontSize = 'small' | 'medium' | 'large';

/** Flex alignment keywords mapped to CSS values. */
export const flexAlign = (v: string | undefined) =>
  v === 'start' ? 'flex-start' : v === 'end' ? 'flex-end' : v;
