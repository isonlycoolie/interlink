// SPDX-License-Identifier: Apache-2.0
import type { ReactNode, Ref } from 'react';
import { mergeXcss, xcss as compile } from '../xcss/xcss';
import { testIdProps } from './surface';
import type {
  AlignContent,
  AlignItems,
  AutoFlow,
  BasePrimitiveProps,
  BleedSpaceToken,
  GapToken,
  JustifyContent,
  JustifyItems,
} from './types';

export type GridProps = BasePrimitiveProps & {
  as?: 'div' | 'span' | 'ul' | 'ol';
  justifyContent?: JustifyContent;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  columnGap?: GapToken;
  gap?: GapToken;
  rowGap?: GapToken;
  autoFlow?: AutoFlow;
  id?: string;
  children: ReactNode;
  ref?: Ref<HTMLElement>;
};

/** CSS grid layout with token gaps. Set templates through xcss. */
export function Grid({ as: Component = 'div', justifyContent, justifyItems, alignItems, alignContent, columnGap, gap, rowGap, autoFlow, children, testId, xcss, ref, ...rest }: GridProps) {
  const own = compile({ columnGap: columnGap ?? gap, rowGap: rowGap ?? gap, justifyContent, alignItems });
  const extra = { justifyItems, alignContent, gridAutoFlow: autoFlow };
  const s = mergeXcss(own, xcss);
  return (
    <Component {...rest} {...testIdProps(testId)} ref={ref as never} className={`il-grid ${s.className}`.trim()} style={{ ...s.style, ...extra }}>
      {children}
    </Component>
  );
}

export type BleedProps = BasePrimitiveProps & {
  children: ReactNode;
  all?: BleedSpaceToken;
  inline?: BleedSpaceToken;
  block?: BleedSpaceToken;
};

/** Pulls content out past its container's padding by a negative token margin. */
export function Bleed({ children, all, inline, block, testId, xcss }: BleedProps) {
  const neg = (t?: BleedSpaceToken) => (t ? (t.replace('space.', 'space.negative.') as never) : undefined);
  const own = compile({ marginInline: neg(inline ?? all), marginBlock: neg(block ?? all) });
  const s = mergeXcss(own, xcss);
  return (
    <div {...testIdProps(testId)} className={`il-bleed ${s.className}`.trim()} style={s.style}>
      {children}
    </div>
  );
}
