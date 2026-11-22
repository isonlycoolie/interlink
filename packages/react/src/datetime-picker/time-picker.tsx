// SPDX-License-Identifier: Apache-2.0
'use client';
import { useState, type FocusEvent, type Ref } from 'react';
import { SelectBase } from '../select/select-base';
import type { OptionType } from '../select/select-types';
import { DEFAULT_TIMES, formatTime, parseTime } from './date-format';

export interface TimePickerProps {
  /** Controlled value, a 24-hour time (HH:mm), or an empty string. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** The times offered, as HH:mm. */
  times?: string[];
  /** Let people type a time that is not in the list. */
  timeIsEditable?: boolean;
  locale?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  appearance?: 'default' | 'subtle' | 'none';
  spacing?: 'default' | 'compact';
  placeholder?: string;
  /** Input id, so a label can point at it. Field sets it. */
  id?: string;
  name?: string;
  /** Accessible name when there is no visible label. */
  label?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
}

/** Pick a time from a list, or type one when timeIsEditable is on. Built on Select. */
export function TimePicker({ value, defaultValue, onChange, times = DEFAULT_TIMES, timeIsEditable = false, locale = 'en-US', label, placeholder, ...rest }: TimePickerProps) {
  const [own, setOwn] = useState(defaultValue ?? '');
  const current = value ?? own;
  const option = (t: string): OptionType => ({ label: formatTime(t, locale), value: t });
  const set = (t: string) => {
    setOwn(t);
    onChange?.(t);
  };
  return (
    <SelectBase<OptionType>
      {...rest}
      aria-label={label}
      placeholder={placeholder ?? formatTime('09:00', locale)}
      options={times.map(option)}
      value={current ? option(current) : null}
      onChange={(v) => set(v && !Array.isArray(v) ? String((v as OptionType).value) : '')}
      create={
        timeIsEditable
          ? { formatCreateLabel: (input) => formatTime(parseTime(input) ?? input, locale), isValidNewOption: (input) => parseTime(input) !== null, onCreate: (input) => set(parseTime(input) ?? '') }
          : undefined
      }
    />
  );
}
