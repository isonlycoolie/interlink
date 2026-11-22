// SPDX-License-Identifier: Apache-2.0
'use client';
import CrossCircleIcon from '@interlink/icons/core/cross-circle';
import type { InputHTMLAttributes, ReactNode, Ref } from 'react';

/** Pass an element to a callback ref or an object ref. */
export function setRef<T>(ref: Ref<T> | undefined, el: T | null) {
  if (typeof ref === 'function') ref(el);
  else if (ref) ref.current = el;
}

export interface PickerFieldProps {
  /** Receives the control element, which the popup anchors to. */
  anchor: (el: HTMLElement | null) => void;
  input: (el: HTMLInputElement | null) => void;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  appearance: 'default' | 'subtle' | 'none';
  spacing: 'default' | 'compact';
  isInvalid?: boolean;
  isDisabled: boolean;
  /** Called when people press the control outside the input. */
  onToggle: () => void;
  /** Shows a clear button when set. */
  onClear?: () => void;
  clearLabel: string;
  icon: ReactNode;
}

/** The text-field-looking control of the pickers: same border, focus and invalid states as Select. */
export function PickerField({ anchor, input, inputProps, appearance, spacing, isInvalid, isDisabled, onToggle, onClear, clearLabel, icon }: PickerFieldProps) {
  let inputEl: HTMLInputElement | null = null;
  return (
    <div
      ref={anchor}
      className="il-select-control"
      data-appearance={appearance}
      data-spacing={spacing}
      data-invalid={isInvalid || undefined}
      data-disabled={isDisabled || undefined}
      onMouseDown={(e) => {
        if (isDisabled || (e.target as HTMLElement).closest('button')) return;
        if (e.target !== inputEl) e.preventDefault();
        inputEl?.focus();
        onToggle();
      }}
    >
      <div className="il-select-values">
        <input
          {...inputProps}
          ref={(el) => {
            inputEl = el;
            input(el);
          }}
          className="il-select-input"
          autoComplete="off"
          disabled={isDisabled}
        />
      </div>
      <div className="il-select-indicators">
        {onClear && !isDisabled ? (
          <button type="button" className="il-select-clear" aria-label={clearLabel} tabIndex={-1} onClick={onClear}>
            <CrossCircleIcon label="" color="color.icon.subtle" />
          </button>
        ) : null}
        {icon}
      </div>
    </div>
  );
}
