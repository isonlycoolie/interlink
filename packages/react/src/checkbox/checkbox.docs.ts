// SPDX-License-Identifier: Apache-2.0
import type { InputHTMLAttributes } from 'react';
import { docsFor } from '../docs/types';
import type { CheckboxProps } from './checkbox';

type Documented = Omit<CheckboxProps, keyof InputHTMLAttributes<HTMLInputElement>> & Pick<CheckboxProps, 'defaultChecked' | 'onChange' | 'name' | 'value'>;

export const checkboxDocs = docsFor<Documented>({
  name: "Checkbox",
  package: '@interlink/react/checkbox',
  exports: ["Checkbox"],
  description: "A checkbox lets people choose any number of options, or turn one option on and off.",
  status: 'ga',
  category: "Forms and input",
  keywords: ["checkbox", "option", "select", "tick"],
  props: {
    label: {"type": "ReactNode", "description": "Visible label next to the box."},
    isChecked: {"type": "boolean", "description": "Controlled checked state."},
    defaultChecked: {"type": "boolean", "description": "Initial state when uncontrolled.", "default": "false"},
    isIndeterminate: {"type": "boolean", "description": "Shows a dash when some children are selected.", "default": "false"},
    isDisabled: {"type": "boolean", "description": "Prevents changes.", "default": "false"},
    isInvalid: {"type": "boolean", "description": "Shows the error border.", "default": "false"},
    isRequired: {"type": "boolean", "description": "Marks the checkbox as required, such as accepting terms.", "default": "false"},
    onChange: {"type": "(event) => void", "description": "Called when toggled."},
    name: {"type": "string", "description": "Form field name."},
    value: {"type": "string", "description": "Submitted value."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
    ref: {"type": "Ref<HTMLInputElement>", "description": "Ref to the input."},
  },
});
