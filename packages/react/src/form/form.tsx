// SPDX-License-Identifier: Apache-2.0
'use client';
import { useCallback, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { FormContext, type Registered, type Store, type SubmitResult, type Values } from './form-context';

export { FormContext, useForm, type SubmitResult } from './form-context';

export interface FormChildProps {
  formProps: { onSubmit: (e: FormEvent<HTMLFormElement>) => void; noValidate: true };
  submitting: boolean;
  dirty: boolean;
  reset: () => void;
  getValues: () => Values;
}

export interface FormProps {
  onSubmit: (values: Values) => SubmitResult | Promise<SubmitResult>;
  /** Render function receiving formProps to spread on a form element, or plain children inside a form. */
  children: ((props: FormChildProps) => ReactNode) | ReactNode;
  isDisabled?: boolean;
  testId?: string;
}

/** Holds field values, validates on blur and submit, and shows errors in place. */
export function Form({ onSubmit, children, isDisabled = false, testId }: FormProps) {
  const fields = useRef(new Map<string, Registered>());
  const initial = useRef<Values>({});
  const [values, setValues] = useState<Values>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [serverErrors, setServerErrors] = useState<Record<string, string>>({});
  const [submitFailed, setSubmitFailed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => {
    const out: Record<string, string | undefined> = {};
    for (const [name, reg] of fields.current) out[name] = serverErrors[name] ?? reg.validate?.(values[name], values) ?? undefined;
    return out;
  }, [values, serverErrors]);

  const register = useCallback((name: string, reg: Registered, init: unknown) => {
    fields.current.set(name, reg);
    if (!(name in initial.current)) {
      initial.current[name] = init;
      setValues((v) => (name in v ? v : { ...v, [name]: init }));
    }
  }, []);
  const setValue = useCallback((name: string, value: unknown) => {
    setValues((v) => ({ ...v, [name]: value }));
    setServerErrors((e) => (e[name] ? { ...e, [name]: '' } : e));
  }, []);
  const touch = useCallback((name: string) => setTouched((t) => (t[name] ? t : { ...t, [name]: true })), []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting || isDisabled) return;
    const invalid = [...fields.current.entries()].filter(([name, reg]) => reg.validate?.(values[name], values));
    if (invalid.length) {
      setSubmitFailed(true);
      invalid[0]?.[1].focus?.();
      return;
    }
    setSubmitting(true);
    try {
      const result = await onSubmit(values);
      if (result && Object.keys(result).length) {
        setServerErrors(result);
        setSubmitFailed(true);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const store: Store = { values, touched, errors, submitFailed, submitting, isDisabled, register, setValue, touch };
  const dirty = Object.keys(values).some((k) => values[k] !== initial.current[k]);
  const reset = () => {
    setValues({ ...initial.current });
    setTouched({});
    setSubmitFailed(false);
    setServerErrors({});
  };
  const formProps = { onSubmit: handleSubmit, noValidate: true as const };
  return (
    <FormContext.Provider value={store}>
      {typeof children === 'function' ? (
        children({ formProps, submitting, dirty, reset, getValues: () => values })
      ) : (
        <form {...formProps} data-testid={testId}>
          {children}
        </form>
      )}
    </FormContext.Provider>
  );
}
