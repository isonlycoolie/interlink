// SPDX-License-Identifier: Apache-2.0
'use client';
import type { ReactNode, Ref } from 'react';
import type { TokenName } from '@interlink/tokens';
import { tokenNames } from '@interlink/tokens';
import { HasTextAncestorContext, inverseTextColor, useHasTextAncestor, useSurface } from './surface';
import { testIdProps, type FontSize, type FontWeight, type MetricTextFontSize, type TextAlign } from './types';

type TextColor = Extract<TokenName, `color.text${string}` | `color.link${string}`>;
const v = (name: string) => `var(${(tokenNames as Record<string, string>)[name]})`;

export interface TextProps {
  as?: 'span' | 'p' | 'strong' | 'em';
  children: ReactNode;
  /** Defaults to readable text for the surface it sits on; `inherit` takes the parent's colour. */
  color?: TextColor | 'inherit';
  id?: string;
  /** Truncate after this many lines. */
  maxLines?: number;
  align?: TextAlign;
  size?: FontSize;
  weight?: FontWeight;
  testId?: string;
  ref?: Ref<HTMLElement>;
}

/** Body text that follows the type scale and stays readable on any surface. */
export function Text({ as: Component = 'span', children, color, id, maxLines, align, size, weight, testId, ref }: TextProps) {
  const surface = useSurface();
  const nested = useHasTextAncestor();
  const resolved = color === 'inherit' ? undefined : (color ?? (nested ? undefined : (inverseTextColor(surface) ?? 'color.text')));
  const fontSize = size ?? (nested ? undefined : 'medium');
  const style: Record<string, string | number> = {};
  if (fontSize) style.font = v(fontSize === 'medium' ? 'font.body' : `font.body.${fontSize}`);
  if (resolved) style.color = v(resolved);
  if (weight) style.fontWeight = v(`font.weight.${weight}`);
  else if (Component === 'strong') style.fontWeight = v('font.weight.bold');
  if (maxLines) style.WebkitLineClamp = maxLines;
  const className = ['il-text', maxLines && 'il-text-truncate', maxLines === 1 && 'il-text-break-all', align && `il-text-align-${align}`, Component === 'em' && 'il-text-italic']
    .filter(Boolean)
    .join(' ');
  return (
    <HasTextAncestorContext.Provider value>
      <Component id={id} ref={ref as never} {...testIdProps(testId)} className={className} style={style}>
        {children}
      </Component>
    </HasTextAncestorContext.Provider>
  );
}

export interface HeadingProps {
  size: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
  /** The element to render. Defaults to the level that matches the size. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  color?: 'color.text' | 'color.text.inverse' | 'color.text.warning.inverse';
  children: ReactNode;
  id?: string;
  testId?: string;
  ref?: Ref<HTMLHeadingElement>;
}

const LEVEL = { xxlarge: 'h1', xlarge: 'h1', large: 'h2', medium: 'h3', small: 'h4', xsmall: 'h5', xxsmall: 'h6' } as const;

/** A heading on the type scale. Choose size for hierarchy, `as` for document structure. */
export function Heading({ size, as, color, children, id, testId, ref }: HeadingProps) {
  const surface = useSurface();
  const Component = as ?? LEVEL[size];
  const resolved = color ?? inverseTextColor(surface) ?? 'color.text';
  return (
    <Component id={id} ref={ref as never} {...testIdProps(testId)} className="il-heading" style={{ font: v(`font.heading.${size}`), color: v(resolved) }}>
      {children}
    </Component>
  );
}

export interface MetricTextProps {
  as?: 'span' | 'div';
  children: ReactNode;
  id?: string;
  align?: TextAlign;
  size: MetricTextFontSize;
  testId?: string;
  ref?: Ref<HTMLElement>;
}

/** Large numbers in dashboards and summaries. */
export function MetricText({ as: Component = 'span', children, id, align, size, testId, ref }: MetricTextProps) {
  return (
    <Component id={id} ref={ref as never} {...testIdProps(testId)} className={['il-metric-text', align && `il-text-align-${align}`].filter(Boolean).join(' ')} style={{ font: v(`font.metric.${size}`) }}>
      {children}
    </Component>
  );
}
