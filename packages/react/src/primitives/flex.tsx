// SPDX-License-Identifier: Apache-2.0
import type { AriaAttributes, ReactNode, Ref } from 'react';
import { mergeXcss, xcss as compile } from '../xcss/xcss';
import { testIdProps } from './surface';
import { flexAlign, type AlignItems, type BasePrimitiveProps, type Direction, type GapToken, type JustifyContent, type Wrap } from './types';

export type FlexProps = BasePrimitiveProps &
  AriaAttributes & {
    as?: 'div' | 'span' | 'ul' | 'ol' | 'li' | 'dl';
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    columnGap?: GapToken;
    gap?: GapToken;
    rowGap?: GapToken;
    direction?: Direction;
    wrap?: Wrap;
    children: ReactNode;
    ref?: Ref<HTMLElement>;
  };

/** Flexbox layout with token gaps. */
export function Flex({ as: Component = 'div', justifyContent, alignItems, columnGap, gap, rowGap, direction, wrap, children, testId, xcss, ref, ...rest }: FlexProps) {
  const own = compile({
    columnGap: columnGap ?? gap,
    rowGap: rowGap ?? gap,
    justifyContent: flexAlign(justifyContent),
    alignItems: flexAlign(alignItems),
    flexDirection: direction,
    flexWrap: wrap,
  });
  const s = mergeXcss(own, xcss);
  return (
    <Component {...rest} {...testIdProps(testId)} ref={ref as never} className={`il-flex ${s.className}`.trim()} style={s.style}>
      {children}
    </Component>
  );
}
