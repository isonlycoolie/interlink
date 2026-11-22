// SPDX-License-Identifier: Apache-2.0
import type { ChangeEvent, ReactNode } from 'react';

export interface FieldProps<V> {
  id: string;
  name: string;
  value: V;
  onChange: (eventOrValue: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | V) => void;
  onBlur: () => void;
  isInvalid: boolean;
  isRequired: boolean;
  isDisabled: boolean;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
  ref: (el: HTMLElement | null) => void;
}

export interface FieldRenderProps<V> {
  fieldProps: FieldProps<V>;
  /** The validation or server error to show, once the field is touched or a submit failed. */
  error?: string;
  valid: boolean;
  meta: { touched: boolean; dirty: boolean; submitting: boolean };
}

export interface FieldComponentProps<V> {
  name: string;
  label?: ReactNode;
  defaultValue?: V;
  isRequired?: boolean;
  isDisabled?: boolean;
  /** Return an error message, or nothing when the value is fine. */
  validate?: (value: V | undefined, values: Record<string, unknown>) => string | undefined | void;
  children: (props: FieldRenderProps<V>) => ReactNode;
  id?: string;
  testId?: string;
  /** Internal: CheckboxField renders its label next to the control instead of above it. */
  hideLabel?: boolean;
}
