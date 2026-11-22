// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { RangeProps } from './range';

type Documented = Pick<RangeProps, 'value' | 'defaultValue' | 'min' | 'max' | 'step' | 'isDisabled' | 'onChange' | 'testId' | 'ref'>;

export const rangeDocs = docsFor<Documented>({
  name: "Range",
  package: '@interlink/react/range',
  exports: ["Range"],
  description: "A range lets people pick a number by dragging a slider.",
  status: 'ga',
  category: "Forms and input",
  keywords: ["range", "slider", "number"],
  props: {
    value: {"type": "number", "description": "Controlled value."},
    defaultValue: {"type": "number", "description": "Initial value.", "default": "midpoint"},
    min: {"type": "number", "description": "Lowest value.", "default": "0"},
    max: {"type": "number", "description": "Highest value.", "default": "100"},
    step: {"type": "number", "description": "Increment.", "default": "1"},
    isDisabled: {"type": "boolean", "description": "Prevents changes.", "default": "false"},
    onChange: {"type": "(value) => void", "description": "Called with the new number."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
    ref: {"type": "Ref<HTMLInputElement>", "description": "Ref to the input."},
  },
});
