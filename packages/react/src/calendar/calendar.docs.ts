// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { CalendarProps } from './calendar';

export const calendarDocs = docsFor<CalendarProps>({
  name: "Calendar",
  package: '@interlink/react/calendar',
  exports: ["Calendar"],
  description: "A calendar is a month grid for picking a date.",
  status: 'ga',
  category: "Date and time",
  keywords: ["calendar", "date", "month", "day"],
  props: {
    selected: {"type": "string[]", "description": "Selected dates, as YYYY-MM-DD."},
    defaultSelected: {"type": "string[]", "description": "Initial selection.", "default": "[]"},
    defaultFocused: {"type": "string", "description": "Date shown first."},
    today: {"type": "string", "description": "Today, marked with an underline.", "default": "today"},
    locale: {"type": "string", "description": "Language and region.", "default": "'en-US'"},
    weekStartDay: {"type": "0 \u2013 6", "description": "First day of the week; 0 is Sunday.", "default": "0"},
    onSelect: {"type": "({ iso, year, month, day }) => void", "description": "Called when a date is picked."},
    onChange: {"type": "({ iso }) => void", "description": "Called when the focused date moves."},
    previousMonthLabel: {"type": "string", "description": "Label of the previous button.", "default": "'Previous month'"},
    nextMonthLabel: {"type": "string", "description": "Label of the next button.", "default": "'Next month'"},
    shouldFocusOnMount: {"type": "boolean", "description": "Focus the focused date on mount.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
    minDate: {"type": "string", "description": "Earliest date people can pick, as YYYY-MM-DD."},
    maxDate: {"type": "string", "description": "Latest date people can pick."},
    disabled: {"type": "string[]", "description": "Dates that cannot be picked."},
    disabledDateFilter: {"type": "(iso) => boolean", "description": "Return true to disable a date."},
  },
});
