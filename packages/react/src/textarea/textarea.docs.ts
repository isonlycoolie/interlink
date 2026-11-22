// SPDX-License-Identifier: Apache-2.0
import type { TextareaHTMLAttributes } from 'react';
import { docsFor } from '../docs/types';
import type { TextAreaProps } from './textarea';

type Documented = Omit<TextAreaProps, keyof TextareaHTMLAttributes<HTMLTextAreaElement>> & Pick<TextAreaProps, 'value' | 'onChange' | 'placeholder'>;

export const textareaDocs = docsFor<Documented>({
  name: "Text area",
  package: '@interlink/react/textarea',
  exports: ["TextArea"],
  description: "A text area lets people enter longer text over several lines.",
  status: 'ga',
  category: "Forms and input",
  keywords: ["textarea", "multiline", "description", "comment"],
  props: {
    appearance: {"type": "'standard' | 'subtle' | 'none'", "description": "Visual style of the box.", "default": "'standard'"},
    resize: {"type": "'auto' | 'vertical' | 'horizontal' | 'smart' | 'none'", "description": "Smart grows with the content up to maxHeight.", "default": "'smart'"},
    minimumRows: {"type": "number", "description": "Minimum visible lines.", "default": "3"},
    maxHeight: {"type": "string", "description": "Height before the area scrolls.", "default": "'50vh'"},
    isCompact: {"type": "boolean", "description": "Tighter padding.", "default": "false"},
    isDisabled: {"type": "boolean", "description": "Prevents editing.", "default": "false"},
    isInvalid: {"type": "boolean", "description": "Shows the error border.", "default": "false"},
    isReadOnly: {"type": "boolean", "description": "Read-only text.", "default": "false"},
    isRequired: {"type": "boolean", "description": "Marks the field as required.", "default": "false"},
    isMonospaced: {"type": "boolean", "description": "Monospace text.", "default": "false"},
    value: {"type": "string", "description": "Controlled value."},
    onChange: {"type": "(event) => void", "description": "Called on every change."},
    placeholder: {"type": "string", "description": "An example, never the label."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
    ref: {"type": "Ref<HTMLTextAreaElement>", "description": "Ref to the textarea."},
  },
});
