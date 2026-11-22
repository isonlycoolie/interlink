// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { DrawerProps } from './drawer';

export const drawerDocs = docsFor<DrawerProps>({
  name: "Drawer",
  package: '@interlink/react/drawer',
  exports: ["Drawer", "DrawerSidebar", "DrawerContent", "DrawerCloseButton"],
  description: "A drawer slides in from the edge of the screen for a focused task.",
  status: 'ga',
  category: "Overlays and layering",
  keywords: ["drawer", "panel", "sheet", "side"],
  props: {
    isOpen: {"type": "boolean", "description": "Whether the drawer shows."},
    onClose: {"type": "(event) => void", "description": "Called on Escape, the close button or a blanket click."},
    width: {"type": "'narrow' | 'medium' | 'wide' | 'extended' | 'full'", "description": "Panel width.", "default": "'narrow'"},
    enterFrom: {"type": "'left' | 'right'", "description": "Edge it slides in from.", "default": "'left'"},
    label: {"type": "string", "description": "Accessible name."},
    titleId: {"type": "string", "description": "Id of a visible title."},
    autoFocusFirstElem: {"type": "boolean | RefObject", "description": "Focus the first interactive element, or a given one.", "default": "true"},
    shouldReturnFocus: {"type": "boolean", "description": "Return focus on close.", "default": "true"},
    children: {"type": "ReactNode", "description": "DrawerSidebar and DrawerContent."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
