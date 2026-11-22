// SPDX-License-Identifier: Apache-2.0
import type { InputHTMLAttributes } from 'react';
import { docsFor } from '../docs/types';
import type { TextFieldProps } from './textfield';

type Documented = Omit<TextFieldProps, keyof InputHTMLAttributes<HTMLInputElement>> & Pick<TextFieldProps, 'value' | 'defaultValue' | 'onChange' | 'placeholder' | 'name' | 'type' | 'width'>;

export const textfieldDocs = docsFor<Documented>({
  name: "Text field",
  package: '@interlink/react/textfield',
  exports: ["TextField"],
  description: "A text field lets people enter and edit a single line of text.",
  status: 'ga',
  category: "Forms and input",
  keywords: ["input", "text", "field", "form"],
  props: {
    appearance: {"type": "'standard' | 'subtle' | 'none'", "description": "Subtle shows a border only on hover and focus.", "default": "'standard'"},
    isCompact: {"type": "boolean", "description": "Reduces the height for dense areas.", "default": "false"},
    isDisabled: {"type": "boolean", "description": "Prevents editing.", "default": "false"},
    isInvalid: {"type": "boolean", "description": "Shows the error border. Pair with an ErrorMessage.", "default": "false"},
    isReadOnly: {"type": "boolean", "description": "Shows the value without allowing edits.", "default": "false"},
    isRequired: {"type": "boolean", "description": "Marks the field as required.", "default": "false"},
    isMonospaced: {"type": "boolean", "description": "Monospace text for codes and keys.", "default": "false"},
    elemBeforeInput: {"type": "ReactNode", "description": "Content before the input, such as an icon."},
    elemAfterInput: {"type": "ReactNode", "description": "Content after the input, such as a show password button."},
    width: {"type": "'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number | string", "description": "Maximum width; match it to the expected answer."},
    value: {"type": "string", "description": "Controlled value."},
    defaultValue: {"type": "string", "description": "Initial value when uncontrolled."},
    onChange: {"type": "(event) => void", "description": "Called on every change."},
    placeholder: {"type": "string", "description": "An example of the format. Never a replacement for the label."},
    name: {"type": "string", "description": "Form field name."},
    type: {"type": "string", "description": "Input type such as 'email' or 'password'.", "default": "'text'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
    ref: {"type": "Ref<HTMLInputElement>", "description": "Ref to the input element."},
  },
});
