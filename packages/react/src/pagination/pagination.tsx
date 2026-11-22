// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronLeftIcon from '@interlink/icons/core/chevron-left';
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import { useState, type MouseEvent, type ReactNode } from 'react';
import { Button } from '../button/button';
import { IconButton } from '../button/icon-button';
import { collapseRange } from './collapse-range';

export interface PaginationProps<T = unknown> {
  /** One entry per page; usually numbers. */
  pages: T[];
  /** Controlled selected index. */
  selectedIndex?: number;
  defaultSelectedIndex?: number;
  onChange?: (event: MouseEvent<HTMLElement>, page: T) => void;
  /** Most page buttons to show before collapsing the middle into an ellipsis. */
  max?: number;
  /** Name of the navigation landmark. */
  label?: string;
  previousLabel?: string;
  nextLabel?: string;
  /** Prefix of each page button's accessible name. */
  pageLabel?: string;
  /** Text of a page button; defaults to the page itself. */
  getPageLabel?: (page: T, index: number) => ReactNode;
  isDisabled?: boolean;
  testId?: string;
}

/** Moves between pages of a long list or table. */
export function Pagination<T>({ pages, selectedIndex, defaultSelectedIndex = 0, onChange, max = 7, label = 'pagination', previousLabel = 'previous', nextLabel = 'next', pageLabel = 'page', getPageLabel, isDisabled = false, testId }: PaginationProps<T>) {
  const [own, setOwn] = useState(defaultSelectedIndex);
  const current = selectedIndex ?? own;
  const go = (e: MouseEvent<HTMLElement>, index: number) => {
    if (index < 0 || index >= pages.length || index === current) return;
    setOwn(index);
    onChange?.(e, pages[index] as T);
  };
  return (
    <nav aria-label={label} className="il-pagination" data-testid={testId}>
      <IconButton appearance="subtle" icon={ChevronLeftIcon} label={previousLabel} isDisabled={isDisabled || current === 0} onClick={(e) => go(e, current - 1)} testId={testId && `${testId}--previous`} />
      <ol className="il-pagination-list">
        {collapseRange(pages.length, current, max).map((slot, k) =>
          slot === 'ellipsis' ? (
            <li key={`e${k}`} className="il-pagination-ellipsis" aria-hidden="true">
              &hellip;
            </li>
          ) : (
            <li key={slot}>
              <Button appearance="subtle" isSelected={slot === current} aria-current={slot === current ? 'page' : undefined} aria-label={`${pageLabel} ${String(getPageLabel ? getPageLabel(pages[slot] as T, slot) : pages[slot])}`} isDisabled={isDisabled} onClick={(e) => go(e, slot)} testId={testId && `${testId}--page-${slot}`}>
                {getPageLabel ? getPageLabel(pages[slot] as T, slot) : String(pages[slot])}
              </Button>
            </li>
          ),
        )}
      </ol>
      <IconButton appearance="subtle" icon={ChevronRightIcon} label={nextLabel} isDisabled={isDisabled || current === pages.length - 1} onClick={(e) => go(e, current + 1)} testId={testId && `${testId}--next`} />
    </nav>
  );
}
