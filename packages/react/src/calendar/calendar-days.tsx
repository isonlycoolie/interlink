// SPDX-License-Identifier: Apache-2.0
'use client';
import { isDisabledDate, longDate, parseIso, type DateRules, type ISODate } from './calendar-utils';

export interface CalendarDaysProps {
  weeks: ISODate[][];
  /** The month on view; days from the months around it are shown quieter. */
  month: number;
  focused: ISODate;
  today: ISODate;
  chosen: ISODate[];
  locale: string;
  rules: DateRules;
  onSelect: (iso: ISODate) => void;
}

/** The body of the month grid: one button per day, only the focused one in the tab order. */
export function CalendarDays({ weeks, month, focused, today, chosen, locale, rules, onSelect }: CalendarDaysProps) {
  return (
    <tbody>
      {weeks.map((week) => (
        <tr key={week[0]}>
          {week.map((iso) => {
            const off = isDisabledDate(iso, rules);
            const isSelected = chosen.includes(iso);
            const day = parseIso(iso)!;
            return (
              <td key={iso} role="gridcell" aria-selected={isSelected}>
                <button
                  type="button"
                  className="il-calendar-day"
                  data-iso={iso}
                  tabIndex={iso === focused ? 0 : -1}
                  aria-label={longDate(locale, iso)}
                  aria-disabled={off || undefined}
                  aria-current={iso === today ? 'date' : undefined}
                  data-selected={isSelected || undefined}
                  data-today={iso === today || undefined}
                  data-sibling={day.month !== month || undefined}
                  onClick={() => onSelect(iso)}
                >
                  {day.day}
                </button>
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}
