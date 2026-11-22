// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ToggleProps } from './toggle';

export const toggleDocs = docsFor<ToggleProps>({
  name: "Toggle",
  package: '@interlink/react/toggle',
  exports: ["Toggle"],
  description: "A toggle turns a setting on or off straight away.",
  status: 'ga',
  category: "Forms and input",
  keywords: ["toggle", "switch", "on", "off", "setting"],
  props: {
    size: {"type": "'regular' | 'large'", "description": "Large for settings pages with more space.", "default": "'regular'"},
    isChecked: {"type": "boolean", "description": "Controlled state."},
    defaultChecked: {"type": "boolean", "description": "Initial state when uncontrolled.", "default": "false"},
    isDisabled: {"type": "boolean", "description": "Prevents changes.", "default": "false"},
    isLoading: {"type": "boolean", "description": "Shows the switch as busy while a change saves.", "default": "false"},
    label: {"type": "string", "description": "Accessible name when no visible label points at it."},
    id: {"type": "string", "description": "Id, for a visible label to point at."},
    name: {"type": "string", "description": "Form field name."},
    value: {"type": "string", "description": "Submitted value."},
    onChange: {"type": "(event) => void", "description": "Called when switched."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
    ref: {"type": "Ref<HTMLInputElement>", "description": "Ref to the input."},
  },
});
