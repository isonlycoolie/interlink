// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { BreadcrumbsProps } from './breadcrumbs';

export const breadcrumbsDocs = docsFor<BreadcrumbsProps>({
  name: "Breadcrumbs",
  package: '@interlink/react/breadcrumbs',
  exports: ["Breadcrumbs", "BreadcrumbsItem"],
  description: "Breadcrumbs show where a page sits in the hierarchy and link back up it.",
  status: 'ga',
  category: "Navigation",
  keywords: ["breadcrumbs", "path", "hierarchy", "trail"],
  props: {
    children: {"type": "ReactNode", "description": "BreadcrumbsItem elements, top level first."},
    isExpanded: {"type": "boolean", "description": "Controlled expanded state."},
    defaultExpanded: {"type": "boolean", "description": "Initial expanded state.", "default": "false"},
    onExpand: {"type": "(event, expanded) => void", "description": "Called when the hidden items are shown."},
    maxItems: {"type": "number", "description": "Collapse when there are more items.", "default": "8"},
    itemsBeforeCollapse: {"type": "number", "description": "Items before the ellipsis.", "default": "1"},
    itemsAfterCollapse: {"type": "number", "description": "Items after the ellipsis.", "default": "1"},
    label: {"type": "string", "description": "Name of the navigation landmark.", "default": "'Breadcrumbs'"},
    ellipsisLabel: {"type": "string", "description": "Label of the ellipsis button.", "default": "'Show more breadcrumbs'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
