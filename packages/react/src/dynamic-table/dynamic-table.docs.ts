// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { DynamicTableProps } from './dynamic-table-types';

export const dynamicTableDocs = docsFor<DynamicTableProps>({
  name: "Dynamic table",
  package: '@interlink/react/dynamic-table',
  exports: ["DynamicTable"],
  description: "A dynamic table shows rows people can sort and page through.",
  status: 'ga',
  category: "Text and data display",
  keywords: ["table", "data", "sort", "rows", "grid"],
  props: {
    head: {"type": "{ cells: { key, content, isSortable?, width?, shouldTruncate? }[] }", "description": "Column headers."},
    rows: {"type": "{ key, cells: { key?, content }[] }[]", "description": "The rows; cell keys are sort values."},
    caption: {"type": "ReactNode", "description": "Visible title that names the table."},
    label: {"type": "string", "description": "Accessible name without a caption."},
    rowsPerPage: {"type": "number", "description": "Adds pagination."},
    page: {"type": "number", "description": "Controlled page, from 1."},
    defaultPage: {"type": "number", "description": "Initial page.", "default": "1"},
    onSetPage: {"type": "(page) => void", "description": "Called when the page changes."},
    sortKey: {"type": "string", "description": "Controlled sort column."},
    sortOrder: {"type": "'ASC' | 'DESC'", "description": "Controlled sort order."},
    defaultSortKey: {"type": "string", "description": "Initial sort column."},
    defaultSortOrder: {"type": "'ASC' | 'DESC'", "description": "Initial order.", "default": "'ASC'"},
    onSort: {"type": "({ key, sortOrder }) => void", "description": "Called when sorting changes."},
    isLoading: {"type": "boolean", "description": "Dims rows and shows a spinner.", "default": "false"},
    emptyView: {"type": "ReactNode", "description": "Shown when there are no rows."},
    isFixedSize: {"type": "boolean", "description": "Fixed column widths.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
