// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { DateLabelProps } from './date-label';

export const dateLabelDocs = docsFor<DateLabelProps>({
  name: "Date label",
  package: '@interlink/react/date-label',
  exports: ["DateLabel", "DateLabelDropdownTrigger"],
  description: "A date label shows a date and whether it needs attention.",
  status: 'ga',
  category: "Date and time",
  keywords: ["date", "due", "overdue", "label"],
  props: {
    label: {"type": "string", "description": "The formatted date."},
    appearance: {"type": "'neutral' | 'warning' | 'danger'", "description": "Due soon is warning; overdue is danger.", "default": "'neutral'"},
    hasIconBefore: {"type": "boolean", "description": "Shows the status icon; keep it for warning and danger.", "default": "true"},
    iconLabel: {"type": "string", "description": "Accessible name of the icon."},
    maxWidth: {"type": "number | string", "description": "Truncates longer labels."},
    isSpacious: {"type": "boolean", "description": "Larger size for headers.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
