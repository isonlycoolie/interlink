// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { InlineMessageProps } from './inline-message';

export const inlineMessageDocs = docsFor<InlineMessageProps>({
  name: "Inline message",
  package: '@interlink/react/inline-message',
  exports: ["InlineMessage"],
  description: "An inline message is a status icon that opens more detail in a small dialog.",
  status: 'ga',
  category: "Messaging",
  keywords: ["inline message", "status", "hint", "warning"],
  props: {
    appearance: {"type": "'connectivity' | 'confirmation' | 'info' | 'warning' | 'error'", "description": "Icon and color.", "default": "'connectivity'"},
    title: {"type": "ReactNode", "description": "Short text next to the icon."},
    secondaryText: {"type": "ReactNode", "description": "Quieter text after the title."},
    children: {"type": "ReactNode", "description": "Detail shown in the dialog."},
    placement: {"type": "'auto' | 'top' | 'bottom' | 'left' | 'right' with '-start' or '-end'", "description": "Where the dialog opens.", "default": "'bottom-start'"},
    iconLabel: {"type": "string", "description": "Accessible name of the icon."},
    spacing: {"type": "'spacious' | 'compact'", "description": "Padding around the icon.", "default": "'spacious'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
