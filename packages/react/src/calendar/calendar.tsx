// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronLeftIcon from '@interlink/icons/core/chevron-left';
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import { useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { IconButton } from '../button/icon-button';
import { CalendarDays } from './calendar-days';
import { addDays, addMonths, isDisabledDate, monthTitle, parseIso, todayIso, weekdays, weeksOf, type DateRules, type ISODate, type WeekDay } from './calendar-utils';

export type { ISODate, WeekDay } from './calendar-utils';

export interface CalendarProps extends DateRules {
  /** Selected dates as ISO strings (YYYY-MM-DD). */
  selected?: ISODate[];
  defaultSelected?: ISODate[];
  /** Date shown and focused first; defaults to the first selected date, then today. */
  defaultFocused?: ISODate;
  today?: ISODate;
  locale?: string;
  weekStartDay?: WeekDay;
  onSelect?: (event: { iso: ISODate; year: number; month: number; day: number }) => void;
  /** Called when people move to another day or month. */
  onChange?: (event: { iso: ISODate }) => void;
  previousMonthLabel?: string;
  nextMonthLabel?: string;
  /** Focus the focused day when the calendar mounts, as inside a date picker. */
  shouldFocusOnMount?: boolean;
  testId?: string;
}

const KEYS: Record<string, (iso: ISODate) => ISODate> = {
  ArrowLeft: (d) => addDays(d, -1), ArrowRight: (d) => addDays(d, 1), ArrowUp: (d) => addDays(d, -7), ArrowDown: (d) => addDays(d, 7),
  PageUp: (d) => addMonths(d, -1), PageDown: (d) => addMonths(d, 1),
};

/** A month grid for picking a date. Arrow keys move by day and week, Page Up and Page Down by month. */
export function Calendar({ selected, defaultSelected = [], defaultFocused, today = todayIso(), locale = 'en-US', weekStartDay = 0, onSelect, onChange, previousMonthLabel = 'Previous month', nextMonthLabel = 'Next month', shouldFocusOnMount = false, testId, ...rules }: CalendarProps) {
  const [own, setOwn] = useState(defaultSelected);
  const chosen = selected ?? own;
  const [focused, setFocused] = useState<ISODate>(defaultFocused ?? chosen[0] ?? today);
  const moved = useRef(shouldFocusOnMount);
  const grid = useRef<HTMLTableElement | null>(null);
  const headingId = useId();
  const view = parseIso(focused)!;
  const names = weekdays(locale, weekStartDay);

  useLayoutEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    grid.current?.querySelector<HTMLButtonElement>(`[data-iso="${focused}"]`)?.focus();
  }, [focused]);

  const move = (iso: ISODate, focus: boolean) => {
    moved.current = focus;
    setFocused(iso);
    onChange?.({ iso });
  };
  const select = (iso: ISODate) => {
    if (isDisabledDate(iso, rules)) return;
    setOwn([iso]);
    setFocused(iso);
    onSelect?.({ iso, ...parseIso(iso)! });
  };
  const onKeyDown = (e: KeyboardEvent<HTMLTableElement>) => {
    const week = weeksOf(view.year, view.month, weekStartDay).find((w) => w.includes(focused));
    const next = KEYS[e.key]?.(focused) ?? (e.key === 'Home' ? week?.[0] : e.key === 'End' ? week?.[6] : undefined);
    if (next) {
      e.preventDefault();
      move(next, true);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      select(focused);
    }
  };
  return (
    <div className="il-calendar" data-testid={testId}>
      <div className="il-calendar-header">
        <IconButton appearance="subtle" spacing="compact" icon={ChevronLeftIcon} label={previousMonthLabel} onClick={() => move(addMonths(focused, -1), false)} />
        <h2 className="il-calendar-title" id={headingId} aria-live="polite">
          {monthTitle(locale, view.year, view.month)}
        </h2>
        <IconButton appearance="subtle" spacing="compact" icon={ChevronRightIcon} label={nextMonthLabel} onClick={() => move(addMonths(focused, 1), false)} />
      </div>
      <table ref={grid} className="il-calendar-grid" role="grid" aria-labelledby={headingId} onKeyDown={onKeyDown}>
        <thead>
          <tr>
            {names.map((n) => (
              <th key={n.long} scope="col" abbr={n.long} className="il-calendar-weekday">
                {n.short}
              </th>
            ))}
          </tr>
        </thead>
        <CalendarDays weeks={weeksOf(view.year, view.month, weekStartDay)} month={view.month} focused={focused} today={today} chosen={chosen} locale={locale} rules={rules} onSelect={select} />
      </table>
    </div>
  );
}
