// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { RadioGroupProps } from './radio';

export const radioDocs = docsFor<RadioGroupProps>({
  name: "Radio",
  package: '@interlink/react/radio',
  exports: ["RadioGroup", "Radio"],
  description: "Radio buttons let people choose exactly one option from a short list.",
  status: 'ga',
  category: "Forms and input",
  keywords: ["radio", "option", "choice", "single select"],
  props: {
    options: {"type": "{ label, value, isDisabled? }[]", "description": "The choices, in a logical order."},
    value: {"type": "string | null", "description": "Controlled selected value."},
    defaultValue: {"type": "string | null", "description": "Initial value when uncontrolled.", "default": "null"},
    onChange: {"type": "(event) => void", "description": "Called when the selection changes."},
    name: {"type": "string", "description": "Shared name for the radios."},
    isDisabled: {"type": "boolean", "description": "Disables every option.", "default": "false"},
    isInvalid: {"type": "boolean", "description": "Shows the error state.", "default": "false"},
    isRequired: {"type": "boolean", "description": "Requires a choice.", "default": "false"},
    "aria-labelledby": {"type": "string", "description": "Id of the element that labels the group."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
