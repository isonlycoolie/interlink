// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { DropdownMenuProps } from './dropdown-menu';

export const dropdownMenuDocs = docsFor<DropdownMenuProps>({
  name: "Dropdown menu",
  package: '@interlink/react/dropdown-menu',
  exports: ["DropdownMenu", "DropdownItem", "DropdownItemGroup", "DropdownItemCheckbox", "DropdownItemCheckboxGroup", "DropdownItemRadio", "DropdownItemRadioGroup"],
  description: "A dropdown menu is a button that opens a list of actions or options.",
  status: 'ga',
  category: "Menus",
  keywords: ["dropdown", "menu", "actions", "more"],
  props: {
    trigger: {"type": "string | (props) => ReactNode", "description": "Button text, or a custom trigger."},
    children: {"type": "ReactNode", "description": "Item groups."},
    placement: {"type": "'auto' | 'top' | 'bottom' | 'left' | 'right' with '-start' or '-end'", "description": "Where the menu opens.", "default": "'bottom-start'"},
    isOpen: {"type": "boolean", "description": "Controlled open state."},
    defaultOpen: {"type": "boolean", "description": "Initial open state.", "default": "false"},
    onOpenChange: {"type": "({ isOpen, event }) => void", "description": "Called when it opens or closes."},
    shouldFlip: {"type": "boolean", "description": "Flip when there is no room.", "default": "true"},
    isLoading: {"type": "boolean", "description": "Show a spinner instead of items.", "default": "false"},
    statusLabel: {"type": "string", "description": "Announced while loading.", "default": "'Loading'"},
    spacing: {"type": "'cozy' | 'compact'", "description": "Item density.", "default": "'cozy'"},
    label: {"type": "string", "description": "Accessible name of the menu."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
