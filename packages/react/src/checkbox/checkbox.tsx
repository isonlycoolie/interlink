// SPDX-License-Identifier: Apache-2.0
'use client';
import { useEffect, useRef, type InputHTMLAttributes, type ReactNode, type Ref } from 'react';

type Native = Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'type' | 'checked' | 'disabled' | 'required'>;

export interface CheckboxProps extends Native {
  /** Visible label next to the box. */
  label?: ReactNode;
  isChecked?: boolean;
  /** Shows a dash for a parent whose children are partly selected. */
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
}

/** Lets people pick any number of options, or turn one option on and off as part of a form. */
export function Checkbox({ label, isChecked, isIndeterminate = false, isDisabled, isInvalid, isRequired, testId, ref, ...rest }: CheckboxProps) {
  const inner = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inner.current) inner.current.indeterminate = isIndeterminate;
  }, [isIndeterminate]);
  const setRef = (el: HTMLInputElement | null) => {
    inner.current = el;
    if (typeof ref === 'function') ref(el);
    else if (ref) (ref as { current: HTMLInputElement | null }).current = el;
  };
  return (
    <label className="il-checkbox" data-disabled={isDisabled || undefined} data-invalid={isInvalid || undefined} data-testid={testId && `${testId}--checkbox-label`}>
      <span className="il-checkbox-box">
        <input
          {...rest}
          ref={setRef}
          type="checkbox"
          className="il-checkbox-input"
          checked={isChecked}
          disabled={isDisabled}
          required={isRequired}
          aria-invalid={isInvalid || undefined}
          data-testid={testId && `${testId}--hidden-checkbox`}
        />
        <svg className="il-checkbox-icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5.5" y="5.5" width="13" height="13" rx="2" className="il-checkbox-rect" />
          <path className="il-checkbox-tick" d="M9.6 14.6 7.5 12.5l-1 1 3.1 3.1 7-7-1-1z" />
          <rect className="il-checkbox-dash" x="8" y="11.25" width="8" height="1.5" rx=".75" />
        </svg>
      </span>
      {label ? (
        <span className="il-checkbox-label">
          {label}
          {isRequired ? <span className="il-required" aria-hidden="true">*</span> : null}
        </span>
      ) : null}
    </label>
  );
}
