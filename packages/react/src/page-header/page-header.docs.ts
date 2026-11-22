// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { PageHeaderProps } from './page-header';

export const pageHeaderDocs = docsFor<PageHeaderProps>({
  name: "Page header",
  package: '@interlink/react/page-header',
  exports: ["PageHeader"],
  description: "The top of a full page: where it sits, what it is, and what people can do with it.",
  status: 'beta',
  category: 'Navigation',
  keywords: ["page header", "title", "breadcrumbs", "actions", "heading"],
  props: {
    children: {"type": "ReactNode", "description": "The page title."},
    breadcrumbs: {"type": "ReactNode", "description": "Where the page sits."},
    actions: {"type": "ReactNode", "description": "Page actions, primary last."},
    bottomBar: {"type": "ReactNode", "description": "Tabs, search or filters for the whole page."},
    truncateTitle: {"type": "boolean", "description": "One-line title with an ellipsis.", "default": "false"},
    id: {"type": "string", "description": "Id of the title."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
