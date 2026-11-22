// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ObjectIconProps } from './object';

export const objectDocs = docsFor<ObjectIconProps>({
  name: "Object",
  package: '@interlink/react/object',
  exports: ["ObjectIcon", "ObjectTile"],
  description: "An object shows what kind of thing an item is, such as a page, task or bug.",
  status: 'ga',
  category: "Images and icons",
  keywords: ["object", "type", "page", "task", "bug"],
  props: {
    type: {"type": "'page' | 'task' | 'bug' | 'story' | 'epic' | \u2026", "description": "The kind of thing; its glyph and color come with it."},
    size: {"type": "'small' | 'medium'", "description": "12px or 16px; larger sizes use ObjectTile.", "default": "'medium'"},
    label: {"type": "string", "description": "Accessible name; defaults to the type."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
