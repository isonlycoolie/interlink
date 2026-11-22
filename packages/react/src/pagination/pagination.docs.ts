// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { PaginationProps } from './pagination';

export const paginationDocs = docsFor<PaginationProps>({
  name: "Pagination",
  package: '@interlink/react/pagination',
  exports: ["Pagination"],
  description: "Pagination moves between pages of a long list or table.",
  status: 'ga',
  category: "Navigation",
  keywords: ["pagination", "pages", "paging", "next"],
  props: {
    pages: {"type": "T[]", "description": "One entry per page."},
    selectedIndex: {"type": "number", "description": "Controlled selected index."},
    defaultSelectedIndex: {"type": "number", "description": "Initial index.", "default": "0"},
    onChange: {"type": "(event, page) => void", "description": "Called when the page changes."},
    max: {"type": "number", "description": "Most page buttons before collapsing.", "default": "7"},
    label: {"type": "string", "description": "Name of the navigation landmark.", "default": "'pagination'"},
    previousLabel: {"type": "string", "description": "Label of the previous button.", "default": "'previous'"},
    nextLabel: {"type": "string", "description": "Label of the next button.", "default": "'next'"},
    pageLabel: {"type": "string", "description": "Prefix of page button names.", "default": "'page'"},
    getPageLabel: {"type": "(page, index) => ReactNode", "description": "Text of a page button."},
    isDisabled: {"type": "boolean", "description": "Disables every button.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
