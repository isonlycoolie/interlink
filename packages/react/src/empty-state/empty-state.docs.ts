// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { EmptyStateProps } from './empty-state';

export const emptyStateDocs = docsFor<EmptyStateProps>({
  name: "Empty state",
  package: '@interlink/react/empty-state',
  exports: ["EmptyState"],
  description: "An empty state explains why there is no content yet and how to add some.",
  status: 'ga',
  category: "Messaging",
  keywords: ["empty", "no results", "blank", "zero state"],
  props: {
    header: {"type": "string", "description": "What is missing, in a short headline."},
    description: {"type": "ReactNode", "description": "What people can do about it."},
    primaryAction: {"type": "ReactNode", "description": "The one action that fills the space."},
    secondaryAction: {"type": "ReactNode", "description": "An optional second action."},
    tertiaryAction: {"type": "ReactNode", "description": "A link for more help."},
    imageUrl: {"type": "string", "description": "Spot illustration URL."},
    renderImage: {"type": "() => ReactNode", "description": "Renders an illustration or icon."},
    maxImageHeight: {"type": "number", "description": "Illustration height limit.", "default": "160"},
    headingLevel: {"type": "1 | 2 | 3 | 4 | 5 | 6", "description": "Heading level for the header.", "default": "4"},
    width: {"type": "'narrow' | 'wide'", "description": "Narrow for panels, wide for pages.", "default": "'wide'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
