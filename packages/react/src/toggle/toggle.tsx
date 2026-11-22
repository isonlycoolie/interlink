// SPDX-License-Identifier: Apache-2.0
'use client';
import { useState, type ChangeEvent, type Ref } from 'react';

export interface ToggleProps {
  size?: 'regular' | 'large';
  isChecked?: boolean;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  /** Shows the switch as busy while a change is saved. */
  isLoading?: boolean;
  /** Accessible name when there is no visible label pointing at `id`. */
  label?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
}

/** Turns a setting on or off immediately, like a light switch. */
export function Toggle({ size = 'regular', isChecked, defaultChecked = false, isDisabled, isLoading, label, id, name, value, onChange, testId, ref }: ToggleProps) {
  const [own, setOwn] = useState(defaultChecked);
  const checked = isChecked ?? own;
  return (
    <span className="il-toggle" data-size={size} data-checked={checked || undefined} data-disabled={isDisabled || undefined} data-loading={isLoading || undefined} data-testid={testId}>
      <input
        ref={ref}
        id={id}
        name={name}
        value={value}
        type="checkbox"
        role="switch"
        className="il-toggle-input"
        aria-label={label}
        aria-busy={isLoading || undefined}
        checked={checked}
        disabled={isDisabled}
        data-testid={testId && `${testId}--input`}
        onChange={(e) => {
          if (isLoading) return;
          setOwn(e.target.checked);
          onChange?.(e);
        }}
      />
      <svg className="il-toggle-glyph il-toggle-check" viewBox="0 0 16 16" aria-hidden="true">
        <path d="m6.5 10.4-2.5-2.5-1 1 3.5 3.5 6.5-6.5-1-1z" />
      </svg>
      <svg className="il-toggle-glyph il-toggle-cross" viewBox="0 0 16 16" aria-hidden="true">
        <path d="m8 7 3-3 1 1-3 3 3 3-1 1-3-3-3 3-1-1 3-3-3-3 1-1z" />
      </svg>
    </span>
  );
}
