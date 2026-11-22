// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';

export type SortOrder = 'ASC' | 'DESC';

export interface HeadCell {
  /** Column key; rows sort by the `key` of their cell in this column. */
  key: string;
  content: ReactNode;
  isSortable?: boolean;
  /** Column width as a percentage of the table. */
  width?: number;
  /** Cut long header text with an ellipsis. */
  shouldTruncate?: boolean;
  colSpan?: number;
}

export interface RowCell {
  /** Sort value of this cell: a string or number that orders the rows. */
  key?: string | number;
  content: ReactNode;
  colSpan?: number;
}

export interface Row {
  key: string;
  cells: RowCell[];
  isHighlighted?: boolean;
}

export interface DynamicTableProps {
  head?: { cells: HeadCell[] };
  rows?: Row[];
  /** A visible title above the table; it also names the table. */
  caption?: ReactNode;
  /** Accessible name when there is no caption. */
  label?: string;
  /** Splits rows into pages with pagination under the table. */
  rowsPerPage?: number;
  /** Controlled page, starting at 1. */
  page?: number;
  defaultPage?: number;
  onSetPage?: (page: number) => void;
  sortKey?: string;
  sortOrder?: SortOrder;
  defaultSortKey?: string;
  defaultSortOrder?: SortOrder;
  onSort?: (sort: { key: string; sortOrder: SortOrder }) => void;
  /** Dim the rows and show a spinner while data loads. */
  isLoading?: boolean;
  /** Shown instead of the body when there are no rows. */
  emptyView?: ReactNode;
  /** Keep column widths fixed instead of fitting the content. */
  isFixedSize?: boolean;
  testId?: string;
}
