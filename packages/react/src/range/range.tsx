// SPDX-License-Identifier: Apache-2.0
'use client';
import { useState, type CSSProperties, type InputHTMLAttributes, type Ref } from 'react';

export interface RangeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange' | 'disabled' | 'min' | 'max' | 'step' | 'className'> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  isDisabled?: boolean;
  /** Called with the new number while people drag or press arrow keys. */
  onChange?: (value: number) => void;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
}

/** A slider for picking a number within a range, where an approximate value is fine. Needs a label. */
export function Range({ value, defaultValue, min = 0, max = 100, step = 1, isDisabled = false, onChange, testId, ref, ...rest }: RangeProps) {
  const [own, setOwn] = useState(defaultValue ?? (min + max) / 2);
  const current = value ?? own;
  const percent = max > min ? ((current - min) / (max - min)) * 100 : 0;
  return (
    <input
      {...rest}
      ref={ref}
      type="range"
      className="il-range"
      min={min}
      max={max}
      step={step}
      value={current}
      disabled={isDisabled}
      style={{ '--il-range-fill': `${percent}%` } as CSSProperties}
      onChange={(e) => {
        const next = Number(e.target.value);
        setOwn(next);
        onChange?.(next);
      }}
      data-testid={testId}
    />
  );
}
