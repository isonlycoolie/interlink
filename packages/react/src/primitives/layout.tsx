// SPDX-License-Identifier: Apache-2.0
import { Children, Fragment, type AriaAttributes, type ReactNode, type Ref } from 'react';
import { mergeXcss, xcss as compile } from '../xcss/xcss';
import { Flex } from './flex';
import type { AlignBlock, AlignInline, BasePrimitiveProps, GapToken, Grow, Spread } from './types';

const growXcss = { hug: compile({ flexGrow: 0 }), fill: compile({ width: '100%', flexGrow: 1 }) };

export type StackProps = BasePrimitiveProps &
  AriaAttributes & {
    as?: 'div' | 'span' | 'ul' | 'ol' | 'dl';
    alignBlock?: Exclude<AlignBlock, 'baseline'>;
    alignInline?: AlignInline;
    spread?: Spread;
    grow?: Grow;
    space?: GapToken;
    children: ReactNode;
    ref?: Ref<HTMLElement>;
  };

/** Lays children out in a column with token spacing. */
export function Stack({ alignInline, alignBlock = 'stretch', spread, grow, space, xcss, ...rest }: StackProps) {
  return (
    <Flex {...rest} gap={space} direction="column" alignItems={alignInline} justifyContent={spread ?? alignBlock} xcss={mergeXcss(grow && growXcss[grow], xcss)} />
  );
}

export type InlineProps = BasePrimitiveProps &
  AriaAttributes & {
    as?: 'div' | 'span' | 'ul' | 'ol' | 'li' | 'dl';
    alignBlock?: AlignBlock;
    alignInline?: AlignInline;
    shouldWrap?: boolean;
    spread?: Spread;
    grow?: Grow;
    space?: GapToken;
    rowSpace?: GapToken;
    /** Rendered between children; a string becomes a subtle, non-selectable separator. */
    separator?: ReactNode;
    children: ReactNode;
    ref?: Ref<HTMLElement>;
  };

/** Lays children out in a row with token spacing. */
export function Inline({ alignInline, alignBlock = 'start', shouldWrap = false, spread, grow, space, rowSpace, separator, children, xcss, ...rest }: InlineProps) {
  const sep = typeof separator === 'string' ? <span className="il-inline-separator">{separator}</span> : separator;
  const items = sep
    ? Children.toArray(children).filter(Boolean).map((child, i) => <Fragment key={i}>{i > 0 ? sep : null}{child}</Fragment>)
    : children;
  return (
    <Flex
      {...rest}
      direction="row"
      alignItems={alignBlock}
      justifyContent={spread ?? alignInline}
      gap={space}
      rowGap={rowSpace}
      wrap={shouldWrap ? 'wrap' : undefined}
      xcss={mergeXcss(grow && growXcss[grow], xcss)}
    >
      {items}
    </Flex>
  );
}
