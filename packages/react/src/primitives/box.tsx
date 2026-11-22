// SPDX-License-Identifier: Apache-2.0
import type { ComponentPropsWithoutRef, ElementType, ReactNode, Ref } from 'react';
import { mergeXcss, xcss as compile } from '../xcss/xcss';
import { SurfaceContext, testIdProps } from './surface';
import type { BackgroundToken, BasePrimitiveProps, PaddingToken, StyleProp } from './types';

type Padding = {
  padding?: PaddingToken;
  paddingBlock?: PaddingToken;
  paddingBlockStart?: PaddingToken;
  paddingBlockEnd?: PaddingToken;
  paddingInline?: PaddingToken;
  paddingInlineStart?: PaddingToken;
  paddingInlineEnd?: PaddingToken;
};

export type BoxProps<T extends ElementType = 'div'> = Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'style'> &
  BasePrimitiveProps &
  StyleProp &
  Padding & {
    /** The element to render. Not `a` or `button`: use Anchor or Pressable. @default 'div' */
    as?: T;
    children?: ReactNode;
    /** Background token. Surface tokens also tell nested text which colour to use. */
    backgroundColor?: BackgroundToken;
    ref?: Ref<HTMLElement>;
  };

const PADDING_KEYS = ['padding', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd'] as const;

/** A generic container whose styles can only come from design tokens. */
export function Box<T extends ElementType = 'div'>(props: BoxProps<T>) {
  const { as, children, backgroundColor, xcss, style, testId, ref, ...rest } = props as BoxProps<'div'>;
  const Component: ElementType = as ?? 'div';
  const padding: Record<string, string> = {};
  for (const k of PADDING_KEYS) {
    const v = rest[k];
    if (v) padding[k] = v;
    delete rest[k];
  }
  const own = Object.keys(padding).length || backgroundColor ? compile({ ...padding, backgroundColor }) : null;
  const styles = mergeXcss(own, xcss);
  const surfaceStyle = backgroundColor?.startsWith('elevation.surface')
    ? { '--il-elevation-surface-current': styles.style['--x-background-color'] }
    : undefined;
  const node = (
    <Component
      {...rest}
      {...testIdProps(testId)}
      ref={ref as never}
      className={['il-box', styles.className].filter(Boolean).join(' ')}
      style={{ ...styles.style, ...surfaceStyle, ...style }}
    >
      {children}
    </Component>
  );
  return backgroundColor ? <SurfaceContext.Provider value={backgroundColor}>{node}</SurfaceContext.Provider> : node;
}
