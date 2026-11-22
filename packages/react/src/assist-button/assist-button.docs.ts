// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { AssistButtonProps } from './assist-button';

export const assistButtonDocs = docsFor<AssistButtonProps>({
  name: "Assist button",
  package: '@interlink/react/assist-button',
  exports: ["AssistButton", "AssistMark"],
  description: "A button for an AI action, marked with the four-colour assist mark.",
  status: 'beta',
  category: "Assist",
  keywords: ["ai", "assist", "ask", "button", "generate"],
  props: {
    children: {"type": "ReactNode", "description": "The action, such as \"Ask Interlink\"."},
    hasMenu: {"type": "boolean", "description": "Adds a chevron for a menu of actions.", "default": "false"},
    appearance: {"type": "'default' | 'subtle'", "description": "Button style.", "default": "'default'"},
    spacing: {"type": "'default' | 'compact'", "description": "Button height.", "default": "'default'"},
    isSelected: {"type": "boolean", "description": "While its panel is open.", "default": "false"},
    isDisabled: {"type": "boolean", "description": "Prevents clicks.", "default": "false"},
    onClick: {"type": "(event) => void", "description": "Called on click."},
    "aria-expanded": {"type": "boolean", "description": "Whether its menu or panel is open."},
    "aria-haspopup": {"type": "boolean | 'menu' | 'dialog'", "description": "What it opens."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
    ref: {"type": "Ref<HTMLButtonElement>", "description": "Ref to the button."},
  },
});
