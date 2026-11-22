// SPDX-License-Identifier: Apache-2.0
'use client';
import type { InputHTMLAttributes, ReactNode, Ref } from 'react';

type Native = Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'width' | 'disabled' | 'readOnly' | 'required'>;
export type FieldWidth = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number | string;
const WIDTHS: Record<string, string> = { xsmall: '5rem', small: '10rem', medium: '15rem', large: '20rem', xlarge: '30rem' };
export const fieldWidth = (w?: FieldWidth) => (w === undefined ? undefined : typeof w === 'number' ? `${w}px` : (WIDTHS[w] ?? w));

export interface TextFieldProps extends Native {
  /** `subtle` shows a border only on hover and focus; `none` never shows one. */
  appearance?: 'standard' | 'subtle' | 'none';
  isCompact?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  /** Use a monospace font, for codes and keys. */
  isMonospaced?: boolean;
  /** Content before the input, such as an icon. */
  elemBeforeInput?: ReactNode;
  /** Content after the input, such as a clear or show button. */
  elemAfterInput?: ReactNode;
  /** Maximum width: a size name, a number of pixels or any CSS width. */
  width?: FieldWidth;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
}

/** A single-line text input. Pair it with a visible label, usually through Field. */
export function TextField({ appearance = 'standard', isCompact, isDisabled, isInvalid, isReadOnly, isRequired, isMonospaced, elemBeforeInput, elemAfterInput, width, testId, ref, ...rest }: TextFieldProps) {
  const on = (v?: boolean) => (v ? '' : undefined);
  return (
    <div
      className="il-textfield"
      data-appearance={appearance}
      data-compact={on(isCompact)}
      data-disabled={on(isDisabled)}
      data-invalid={on(isInvalid)}
      data-monospaced={on(isMonospaced)}
      data-testid={testId && `${testId}-container`}
      style={{ maxWidth: fieldWidth(width) }}
    >
      {elemBeforeInput}
      <input
        {...rest}
        ref={ref}
        className="il-textfield-input"
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        aria-invalid={isInvalid || undefined}
        data-testid={testId}
      />
      {elemAfterInput}
    </div>
  );
}
