// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { PopupProps } from './popup';

export const popupDocs = docsFor<PopupProps>({
  name: "Popup",
  package: '@interlink/react/popup',
  exports: ["Popup"],
  description: "A popup is a layer anchored to a trigger for menus, pickers and small dialogs.",
  status: 'ga',
  category: "Overlays and layering",
  keywords: ["popup", "popover", "layer", "overlay"],
  props: {
    isOpen: {"type": "boolean", "description": "Whether the popup shows."},
    onClose: {"type": "(event) => void", "description": "Called on Escape or a click outside."},
    trigger: {"type": "(triggerProps) => ReactNode", "description": "Renders the trigger; spread triggerProps on it."},
    content: {"type": "(contentProps) => ReactNode", "description": "Renders the popup content."},
    placement: {"type": "'auto' | 'top' | 'bottom' | 'left' | 'right' with '-start' or '-end'", "description": "Preferred side; flips when there is no room.", "default": "'auto'"},
    offset: {"type": "[number, number]", "description": "Shift along the edge and away from the trigger.", "default": "[0, 8]"},
    shouldFlip: {"type": "boolean", "description": "Flip to the other side when there is no room.", "default": "true"},
    autoFocus: {"type": "boolean", "description": "Move focus into the popup when it opens.", "default": "true"},
    shouldReturnFocus: {"type": "boolean", "description": "Return focus to the trigger on close.", "default": "true"},
    role: {"type": "string", "description": "ARIA role, such as dialog."},
    label: {"type": "string", "description": "Accessible name when there is no visible title."},
    titleId: {"type": "string", "description": "Id of a visible title."},
    id: {"type": "string", "description": "Id of the popup element."},
    shouldFitContainer: {"type": "boolean", "description": "Match the width of the trigger.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
