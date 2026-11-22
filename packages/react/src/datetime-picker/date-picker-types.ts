// SPDX-License-Identifier: Apache-2.0
import type { FocusEvent, Ref } from 'react';
import type { DateRules, ISODate, WeekDay } from '../calendar/calendar-utils';

export interface DatePickerProps extends DateRules {
  /** Controlled value, an ISO date (YYYY-MM-DD), or an empty string. */
  value?: ISODate;
  defaultValue?: ISODate;
  onChange?: (value: ISODate) => void;
  defaultIsOpen?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isClearable?: boolean;
  appearance?: 'default' | 'subtle' | 'none';
  spacing?: 'default' | 'compact';
  /** Example of the format, such as 28/05/2026. */
  placeholder?: string;
  locale?: string;
  weekStartDay?: WeekDay;
  /** Input id, so a label can point at it. Field sets it. */
  id?: string;
  name?: string;
  /** Accessible name when there is no visible label. */
  label?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  clearControlLabel?: string;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
}
