// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ButtonItemProps } from './menu-item';

export const menuDocs = docsFor<ButtonItemProps>({
  name: "Menu",
  package: '@interlink/react/menu',
  exports: ["MenuGroup", "Section", "ButtonItem", "LinkItem", "HeadingItem", "SkeletonItem", "SkeletonHeadingItem"],
  description: "A menu lists actions or places for people to choose from.",
  status: 'ga',
  category: "Menus",
  keywords: ["menu", "list", "item", "navigation"],
  props: {
    children: {"type": "ReactNode", "description": "Item title."},
    description: {"type": "ReactNode", "description": "Second line of quieter text."},
    iconBefore: {"type": "ReactNode", "description": "Icon before the title."},
    iconAfter: {"type": "ReactNode", "description": "Icon after the title, such as an arrow for a new place."},
    isDisabled: {"type": "boolean", "description": "Prevents choosing.", "default": "false"},
    isSelected: {"type": "boolean", "description": "Marks the current item.", "default": "false"},
    shouldTitleWrap: {"type": "boolean", "description": "Wrap long titles.", "default": "false"},
    shouldDescriptionWrap: {"type": "boolean", "description": "Wrap long descriptions.", "default": "false"},
    onClick: {"type": "(event) => void", "description": "Called when chosen."},
    onMouseDown: {"type": "(event) => void", "description": "Called on mouse down."},
    role: {"type": "string", "description": "ARIA role, such as menuitem."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
    ref: {"type": "Ref<HTMLButtonElement>", "description": "Ref to the button."},
  },
});
