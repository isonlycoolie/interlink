// SPDX-License-Identifier: Apache-2.0
'use client';
import ArrowDownIcon from '@interlink/icons/core/arrow-down';
import ArrowUpIcon from '@interlink/icons/core/arrow-up';
import { useId, useState } from 'react';
import { Pagination } from '../pagination/pagination';
import { Spinner } from '../spinner/spinner';
import type { DynamicTableProps, Row, SortOrder } from './dynamic-table-types';

export type { DynamicTableProps, HeadCell, Row, RowCell, SortOrder } from './dynamic-table-types';

const compare = (a: unknown, b: unknown) => (typeof a === 'number' && typeof b === 'number' ? a - b : String(a ?? '').localeCompare(String(b ?? ''), undefined, { numeric: true }));

/** A table of rows that people can sort by column and page through. */
export function DynamicTable({ head, rows = [], caption, label, rowsPerPage, page, defaultPage = 1, onSetPage, sortKey, sortOrder, defaultSortKey, defaultSortOrder = 'ASC', onSort, isLoading = false, emptyView, isFixedSize = false, testId }: DynamicTableProps) {
  const [ownSort, setOwnSort] = useState({ key: defaultSortKey, order: defaultSortOrder });
  const [ownPage, setOwnPage] = useState(defaultPage);
  const captionId = useId();
  const sort = { key: sortKey ?? ownSort.key, order: sortOrder ?? ownSort.order };
  const current = page ?? ownPage;
  const col = head?.cells.findIndex((c) => c.key === sort.key) ?? -1;
  const sorted: Row[] = col < 0 ? rows : [...rows].sort((a, b) => compare(a.cells[col]?.key, b.cells[col]?.key) * (sort.order === 'ASC' ? 1 : -1));
  const pages = rowsPerPage ? Math.max(1, Math.ceil(sorted.length / rowsPerPage)) : 1;
  const visible = rowsPerPage ? sorted.slice((current - 1) * rowsPerPage, current * rowsPerPage) : sorted;
  const toggle = (key: string) => {
    const order: SortOrder = sort.key === key && sort.order === 'ASC' ? 'DESC' : 'ASC';
    setOwnSort({ key, order });
    onSort?.({ key, sortOrder: order });
  };
  return (
    <div className="il-dynamic-table" data-testid={testId}>
      <div className="il-dynamic-table-frame" data-loading={isLoading || undefined}>
        <table className="il-table" data-fixed={isFixedSize || undefined} aria-labelledby={caption ? captionId : undefined} aria-label={caption ? undefined : label} aria-busy={isLoading || undefined}>
          {caption ? (
            <caption id={captionId} className="il-table-caption">
              {caption}
            </caption>
          ) : null}
          {head ? (
            <thead>
              <tr>
                {head.cells.map((c) => {
                  const active = sort.key === c.key;
                  return (
                    <th key={c.key} scope="col" colSpan={c.colSpan} style={c.width ? { width: `${c.width}%` } : undefined} aria-sort={c.isSortable ? (active ? (sort.order === 'ASC' ? 'ascending' : 'descending') : 'none') : undefined} data-truncate={c.shouldTruncate || undefined}>
                      {c.isSortable ? (
                        <button type="button" className="il-table-sort il-focusable" data-active={active || undefined} onClick={() => toggle(c.key)}>
                          <span className="il-table-head-text">{c.content}</span>
                          <span className="il-table-sort-icon">{active && sort.order === 'DESC' ? <ArrowDownIcon label="" size="small" /> : <ArrowUpIcon label="" size="small" />}</span>
                        </button>
                      ) : (
                        <span className="il-table-head-text">{c.content}</span>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {visible.map((row) => (
              <tr key={row.key} data-highlighted={row.isHighlighted || undefined}>
                {row.cells.map((cell, i) => (
                  <td key={i} colSpan={cell.colSpan}>
                    {cell.content}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {!rows.length && !isLoading && emptyView ? <div className="il-table-empty">{emptyView}</div> : null}
        {isLoading ? (
          <div className="il-table-loading">
            <Spinner size="large" label="Loading table" />
          </div>
        ) : null}
      </div>
      {rowsPerPage && pages > 1 ? (
        <div className="il-table-pagination">
          <Pagination pages={Array.from({ length: pages }, (_, i) => i + 1)} selectedIndex={current - 1} onChange={(_, p) => (setOwnPage(p), onSetPage?.(p))} />
        </div>
      ) : null}
    </div>
  );
}
