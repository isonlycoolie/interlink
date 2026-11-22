// SPDX-License-Identifier: Apache-2.0
'use client';
import { Children, cloneElement, isValidElement, useEffect, useRef, useState, type MouseEvent, type ReactElement, type ReactNode } from 'react';
import type { BreadcrumbsItemProps } from './breadcrumbs-item';

export interface BreadcrumbsProps {
  /** BreadcrumbsItem elements, from the top level down to the current page. */
  children?: ReactNode;
  /** Controlled expanded state. */
  isExpanded?: boolean;
  defaultExpanded?: boolean;
  onExpand?: (event: MouseEvent<HTMLButtonElement>, expanded: boolean) => void;
  /** Collapse when there are more items than this. */
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  /** Name of the navigation landmark. */
  label?: string;
  /** Accessible label of the button that shows the hidden items. */
  ellipsisLabel?: string;
  testId?: string;
}

/** Shows where the current page sits in the hierarchy and links back up it. Long trails collapse in the middle. */
export function Breadcrumbs({ children, isExpanded, defaultExpanded = false, onExpand, maxItems = 8, itemsBeforeCollapse = 1, itemsAfterCollapse = 1, label = 'Breadcrumbs', ellipsisLabel = 'Show more breadcrumbs', testId }: BreadcrumbsProps) {
  const [own, setOwn] = useState(defaultExpanded);
  const expanded = isExpanded ?? own;
  const list = useRef<HTMLOListElement | null>(null);
  const focusFirstRevealed = useRef(false);
  const items = Children.toArray(children).filter(isValidElement) as ReactElement<BreadcrumbsItemProps>[];
  const last = items.length - 1;
  const mark = (item: ReactElement<BreadcrumbsItemProps>, i: number) => (i === last ? cloneElement(item, { 'aria-current': 'page' } as Partial<BreadcrumbsItemProps>) : item);
  const collapse = !expanded && items.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse < items.length;

  useEffect(() => {
    if (!expanded || !focusFirstRevealed.current) return;
    focusFirstRevealed.current = false;
    list.current?.querySelectorAll<HTMLElement>('a, button')[itemsBeforeCollapse]?.focus();
  }, [expanded, itemsBeforeCollapse]);

  const expand = (e: MouseEvent<HTMLButtonElement>) => {
    focusFirstRevealed.current = true;
    setOwn(true);
    onExpand?.(e, true);
  };
  const shown = collapse
    ? [
        ...items.slice(0, itemsBeforeCollapse).map(mark),
        <li key="ellipsis" className="il-breadcrumbs-item">
          <button type="button" className="il-breadcrumbs-ellipsis il-focusable" aria-label={ellipsisLabel} onClick={expand}>
            &hellip;
          </button>
        </li>,
        ...items.slice(items.length - itemsAfterCollapse).map((item, i) => mark(item, items.length - itemsAfterCollapse + i)),
      ]
    : items.map(mark);
  return (
    <nav aria-label={label} className="il-breadcrumbs" data-testid={testId}>
      <ol ref={list} className="il-breadcrumbs-list">
        {shown}
      </ol>
    </nav>
  );
}
