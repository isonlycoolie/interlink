// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ModalDialogProps } from './modal-dialog';

export const modalDialogDocs = docsFor<ModalDialogProps>({
  name: "Modal dialog",
  package: '@interlink/react/modal-dialog',
  exports: ["ModalDialog", "ModalHeader", "ModalTitle", "ModalBody", "ModalFooter", "ModalTransition"],
  description: "A modal dialog shows one focused task or message above the page.",
  status: 'ga',
  category: "Overlays and layering",
  keywords: ["modal", "dialog", "popup", "confirm"],
  props: {
    children: {"type": "ReactNode", "description": "ModalHeader, ModalBody and ModalFooter."},
    onClose: {"type": "(event) => void", "description": "Called on Escape, the close button or an overlay click."},
    width: {"type": "'small' | 'medium' | 'large' | 'x-large' | number | string", "description": "400, 600, 800 or 968 pixels, or any width.", "default": "'medium'"},
    height: {"type": "number | string", "description": "Fixed height; the body scrolls."},
    autoFocus: {"type": "boolean | RefObject", "description": "Focus the first interactive element, or a given one.", "default": "true"},
    shouldCloseOnOverlayClick: {"type": "boolean", "description": "Close on a blanket click.", "default": "true"},
    shouldCloseOnEscapePress: {"type": "boolean", "description": "Close on Escape.", "default": "true"},
    shouldReturnFocus: {"type": "boolean", "description": "Return focus on close.", "default": "true"},
    shouldScrollInViewport: {"type": "boolean", "description": "Scroll the viewport instead of the body.", "default": "false"},
    isBlanketHidden: {"type": "boolean", "description": "Hide the tint behind the modal.", "default": "false"},
    label: {"type": "string", "description": "Accessible name when there is no ModalTitle."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
