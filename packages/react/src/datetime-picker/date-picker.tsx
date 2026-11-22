// SPDX-License-Identifier: Apache-2.0
'use client';
import CalendarIcon from '@interlink/icons/core/calendar';
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { Calendar } from '../calendar/calendar';
import type { ISODate } from '../calendar/calendar-utils';
import { PopupBase } from '../popup/popup-base';
import { formatDate, parseDate } from './date-format';
import type { DatePickerProps } from './date-picker-types';
import { PickerField, setRef } from './picker-field';

export type { DatePickerProps } from './date-picker-types';

/** Pick a date from a calendar, or type it in the locale's format. */
export function DatePicker({ value, defaultValue = '', onChange, defaultIsOpen = false, isDisabled = false, isInvalid, isRequired, isClearable = false, appearance = 'default', spacing = 'default', placeholder, locale = 'en-US', weekStartDay = 0, id, name, label, clearControlLabel = 'Clear', onFocus, onBlur, testId, ref, ...rest }: DatePickerProps) {
  const { minDate, maxDate, disabled, disabledDateFilter } = rest;
  const [own, setOwn] = useState(defaultValue);
  const current = value ?? own;
  const [isOpen, setOpen] = useState(defaultIsOpen);
  const [text, setText] = useState<string | null>(null);
  const [focusCalendar, setFocusCalendar] = useState(false);
  const input = useRef<HTMLInputElement | null>(null);
  const auto = useId();
  const typed = text === null ? null : parseDate(text, locale);
  const commit = (iso: ISODate) => {
    setOwn(iso);
    setText(null);
    if (iso !== current) onChange?.(iso);
  };
  const open = (focus: boolean) => {
    if (isDisabled) return;
    setFocusCalendar(focus);
    setOpen(true);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      open(true);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (text !== null) commit(typed ?? current);
      setOpen((o) => !o);
    }
  };
  const invalid = isInvalid || rest['aria-invalid'];
  return (
    <div className="il-select il-date-picker" data-testid={testId}>
      <PopupBase
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        role="dialog"
        label="Choose a date"
        autoFocus={false}
        shouldReturnFocus={false}
        placement="bottom-start"
        offset={[0, 4]}
        trigger={({ ref: anchor }) => (
          <PickerField
            anchor={anchor}
            input={(el) => (input.current = el, setRef(ref, el))}
            appearance={appearance}
            spacing={spacing}
            isInvalid={invalid}
            isDisabled={isDisabled}
            onToggle={() => setOpen((o) => !o)}
            onClear={isClearable && current ? () => (commit(''), input.current?.focus()) : undefined}
            clearLabel={clearControlLabel}
            icon={<CalendarIcon label="" color="color.icon.subtle" />}
            inputProps={{
              id: id ?? `${auto}-input`,
              role: 'combobox',
              'aria-haspopup': 'dialog',
              'aria-expanded': isOpen,
              'aria-label': label,
              'aria-describedby': rest['aria-describedby'],
              'aria-invalid': invalid || undefined,
              'aria-required': isRequired || undefined,
              placeholder: placeholder ?? formatDate('2026-05-28', locale),
              value: text ?? (current ? formatDate(current, locale) : ''),
              onChange: (e) => (setText(e.target.value), open(false)),
              onKeyDown,
              onFocus,
              onBlur: (e) => (text !== null && commit(typed ?? current), onBlur?.(e)),
            }}
          />
        )}
        content={() => (
          <Calendar key={typed ?? current ?? 'none'} selected={current ? [current] : []} defaultFocused={typed ?? (current || undefined)} locale={locale} weekStartDay={weekStartDay} minDate={minDate} maxDate={maxDate} disabled={disabled} disabledDateFilter={disabledDateFilter} shouldFocusOnMount={focusCalendar} onSelect={({ iso }) => {
            commit(iso);
            setOpen(false);
            input.current?.focus();
          }} />
        )}
      />
      {name ? <input type="hidden" name={name} value={current} /> : null}
    </div>
  );
}
