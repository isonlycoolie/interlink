// SPDX-License-Identifier: Apache-2.0
'use client';
import { useState } from 'react';
import { DatePicker } from './date-picker';
import type { DatePickerProps } from './date-picker-types';
import { TimePicker, type TimePickerProps } from './time-picker';

export interface DateTimePickerProps {
  /** Controlled value, a local date and time (YYYY-MM-DDTHH:mm), or an empty string. */
  value?: string;
  defaultValue?: string;
  /** Called with the full value once both a date and a time are chosen, and with an empty string otherwise. */
  onChange?: (value: string) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  appearance?: 'default' | 'subtle' | 'none';
  spacing?: 'default' | 'compact';
  locale?: string;
  /** Props for the date half, such as minDate or label. */
  datePickerProps?: Omit<DatePickerProps, 'value' | 'onChange' | 'appearance'>;
  /** Props for the time half, such as times or label. */
  timePickerProps?: Omit<TimePickerProps, 'value' | 'onChange' | 'appearance'>;
  testId?: string;
}

const split = (v?: string) => {
  const [date = '', time = ''] = (v ?? '').split('T');
  return { date, time: time.slice(0, 5) };
};

/** A date and a time chosen together, in one control. */
export function DateTimePicker({ value, defaultValue, onChange, isDisabled = false, isInvalid = false, appearance = 'default', spacing = 'default', locale = 'en-US', datePickerProps, timePickerProps, testId }: DateTimePickerProps) {
  const [own, setOwn] = useState(split(defaultValue));
  const parts = value === undefined ? own : split(value);
  const update = (next: { date: string; time: string }) => {
    setOwn(next);
    onChange?.(next.date && next.time ? `${next.date}T${next.time}` : '');
  };
  return (
    <div className="il-select-control il-date-time-picker" data-appearance={appearance} data-spacing={spacing} data-invalid={isInvalid || undefined} data-disabled={isDisabled || undefined} data-testid={testId}>
      <div className="il-date-time-date">
        <DatePicker label="Date" {...datePickerProps} appearance="none" spacing={spacing} locale={locale} isDisabled={isDisabled} value={parts.date} onChange={(date) => update({ ...parts, date })} />
      </div>
      <div className="il-date-time-time">
        <TimePicker label="Time" {...timePickerProps} appearance="none" spacing={spacing} locale={locale} isDisabled={isDisabled} value={parts.time} onChange={(time) => update({ ...parts, time })} />
      </div>
    </div>
  );
}
