// SPDX-License-Identifier: Apache-2.0
'use client';
import { useId, useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode, type Ref } from 'react';

type Native = Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'type' | 'checked' | 'disabled' | 'required'>;

export interface RadioProps extends Native {
  label?: ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
}

/** One option in a set where only one can be chosen. Usually rendered through RadioGroup. */
export function Radio({ label, isChecked, isDisabled, isInvalid, isRequired, testId, ref, ...rest }: RadioProps) {
  return (
    <label className="il-radio" data-disabled={isDisabled || undefined} data-testid={testId && `${testId}--radio-label`}>
      <input
        {...rest}
        ref={ref}
        type="radio"
        className="il-radio-input"
        data-invalid={isInvalid || undefined}
        checked={isChecked}
        disabled={isDisabled}
        required={isRequired}
        aria-invalid={isInvalid || undefined}
        data-testid={testId && `${testId}--radio-input`}
      />
      {label ? <span className="il-radio-label">{label}</span> : null}
    </label>
  );
}

export interface RadioOption {
  label: ReactNode;
  value: string;
  isDisabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  /** Controlled value. */
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  /** Id of the element that labels the group, such as a Label or legend. */
  'aria-labelledby'?: string;
  testId?: string;
}

/** A set of radios where exactly one can be chosen. Arrow keys move between options. */
export function RadioGroup({ options, value, defaultValue = null, onChange, name, isDisabled, isInvalid, isRequired, testId, ...aria }: RadioGroupProps) {
  const auto = useId();
  const [own, setOwn] = useState<string | null>(defaultValue);
  const current = value !== undefined ? value : own;
  return (
    <div role="radiogroup" className="il-radio-group" aria-labelledby={aria['aria-labelledby']} aria-invalid={isInvalid || undefined} data-testid={testId}>
      {options.map((o) => (
        <Radio
          key={o.value}
          name={name ?? auto}
          value={o.value}
          label={o.label}
          isChecked={current === o.value}
          isDisabled={isDisabled || o.isDisabled}
          isInvalid={isInvalid}
          isRequired={isRequired}
          onChange={(e) => {
            setOwn(o.value);
            onChange?.(e);
          }}
        />
      ))}
    </div>
  );
}
