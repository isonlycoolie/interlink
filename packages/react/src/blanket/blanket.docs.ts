// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { BlanketProps } from './blanket';

export const blanketDocs = docsFor<BlanketProps>({
  name: "Blanket",
  package: '@interlink/react/blanket',
  exports: ["Blanket"],
  description: "A blanket covers the page to focus attention on a layer above it.",
  status: 'ga',
  category: "Overlays and layering",
  keywords: ["blanket", "overlay", "backdrop", "scrim"],
  props: {
    isTinted: {"type": "boolean", "description": "Tint the page behind.", "default": "false"},
    shouldAllowClickThrough: {"type": "boolean", "description": "Let clicks reach the page.", "default": "false"},
    onBlanketClicked: {"type": "(event) => void", "description": "Called on a click on the blanket."},
    children: {"type": "ReactNode", "description": "Content above the blanket."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
