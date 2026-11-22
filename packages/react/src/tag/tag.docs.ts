// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { TagProps } from './tag';

export const tagDocs = docsFor<TagProps>({
  name: "Tag",
  package: '@interlink/react/tag',
  exports: ["Tag", "TagGroup", "Swatch"],
  description: "A tag labels and organises an item with a keyword or category.",
  status: 'ga',
  category: "Labels",
  keywords: ["tag", "label", "keyword", "category"],
  props: {
    text: {"type": "string", "description": "The keyword."},
    color: {"type": "'standard' | accent hue", "description": "Accent color; tags never show status.", "default": "'standard'"},
    href: {"type": "string", "description": "Makes the tag a link."},
    isRemovable: {"type": "boolean", "description": "Adds a remove button.", "default": "false"},
    onBeforeRemoveAction: {"type": "() => boolean", "description": "Return false to keep the tag."},
    onAfterRemoveAction: {"type": "(text) => void", "description": "Called after removal."},
    removeButtonLabel: {"type": "string", "description": "Accessible label of the remove button."},
    elemBefore: {"type": "ReactNode", "description": "Replaces the hashtag, such as a color swatch."},
    appearance: {"type": "'default' | 'rounded'", "description": "Corner style.", "default": "'default'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
