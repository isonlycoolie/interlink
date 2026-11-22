// SPDX-License-Identifier: Apache-2.0
'use client';
import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState, type ChangeEvent } from 'react';
import { useForm } from './form-context';
import type { FieldComponentProps, FieldProps } from './field-types';

export type { FieldComponentProps, FieldProps, FieldRenderProps } from './field-types';

interface MessageIds {
  register: (kind: 'helper' | 'error' | 'valid', on: boolean) => void;
  ids: { helper: string; error: string; valid: string };
}
export const FieldContext = createContext<MessageIds | null>(null);

const read = (e: unknown) => {
  if (e && typeof e === 'object' && 'target' in e) {
    const t = (e as ChangeEvent<HTMLInputElement>).target;
    return t.type === 'checkbox' ? t.checked : t.value;
  }
  return e;
};

/** Connects one control to the form: label, value, validation, and help and error messages. */
export function Field<V = string>({ name, label, defaultValue, isRequired = false, isDisabled, validate, children, id, testId, hideLabel }: FieldComponentProps<V>) {
  const form = useForm();
  const auto = useId();
  const fieldId = id ?? `${auto}-${name}`;
  const el = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState({ helper: false, error: false, valid: false });
  const required = useCallback(
    (v: unknown, all: Record<string, unknown>) => (isRequired && (v === undefined || v === '' || v === false) ? 'This field is required.' : (validate?.(v as V, all) ?? undefined)),
    [isRequired, validate],
  );
  useEffect(() => {
    form?.register(name, { validate: required, focus: () => el.current?.focus() }, defaultValue ?? '');
  }, [form, name, required, defaultValue]);
  const value = (form?.values[name] ?? defaultValue ?? '') as V;
  const touched = !!form?.touched[name];
  const error = form && (touched || form.submitFailed) ? form.errors[name] : undefined;
  const ids = useMemo(() => ({ helper: `${fieldId}-helper`, error: `${fieldId}-error`, valid: `${fieldId}-valid` }), [fieldId]);
  const ctx = useMemo<MessageIds>(() => ({ ids, register: (kind, on) => setShown((s) => (s[kind] === on ? s : { ...s, [kind]: on })) }), [ids]);
  const describedBy = (['helper', 'error', 'valid'] as const).filter((k) => shown[k]).map((k) => ids[k]).join(' ') || undefined;
  const fieldProps: FieldProps<V> = {
    id: fieldId,
    name,
    value,
    onChange: (e) => form?.setValue(name, read(e)),
    onBlur: () => form?.touch(name),
    isInvalid: !!error,
    isRequired,
    isDisabled: !!(isDisabled || form?.isDisabled),
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    ref: (node) => {
      el.current = node;
    },
  };
  return (
    <FieldContext.Provider value={ctx}>
      <div className="il-field" data-testid={testId}>
        {label && !hideLabel ? (
          <label className="il-label" htmlFor={fieldId} id={`${fieldId}-label`}>
            {label}
            {isRequired ? <span className="il-required" aria-hidden="true">*</span> : null}
          </label>
        ) : null}
        {children({ fieldProps, error, valid: touched && !error, meta: { touched, dirty: value !== (defaultValue ?? ''), submitting: !!form?.submitting } })}
      </div>
    </FieldContext.Provider>
  );
}

export const useFieldMessages = () => useContext(FieldContext);
