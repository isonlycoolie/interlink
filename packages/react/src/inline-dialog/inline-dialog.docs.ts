// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { InlineDialogProps } from './inline-dialog';

export const inlineDialogDocs = docsFor<InlineDialogProps>({
  name: "Inline dialog",
  package: '@interlink/react/inline-dialog',
  exports: ["InlineDialog"],
  description: "An inline dialog shows extra detail or a quick task next to its trigger.",
  status: 'ga',
  category: "Overlays and layering",
  keywords: ["inline dialog", "popover", "callout"],
  props: {
    children: {"type": "ReactNode", "description": "The trigger the dialog points at."},
    content: {"type": "ReactNode | () => ReactNode", "description": "Dialog content."},
    isOpen: {"type": "boolean", "description": "Whether the dialog shows.", "default": "false"},
    onClose: {"type": "({ isOpen, event }) => void", "description": "Called on Escape or a click outside."},
    placement: {"type": "'auto' | 'top' | 'bottom' | 'left' | 'right' with '-start' or '-end'", "description": "Preferred side.", "default": "'bottom-start'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
