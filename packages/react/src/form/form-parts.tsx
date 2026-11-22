// SPDX-License-Identifier: Apache-2.0
'use client';
import StatusErrorIcon from '@interlink/icons/core/status-error';
import StatusSuccessIcon from '@interlink/icons/core/status-success';
import { useEffect, type ReactNode } from 'react';
import { Field, useFieldMessages, type FieldComponentProps, type FieldProps } from './field';

function Message({ kind, children, testId }: { kind: 'helper' | 'error' | 'valid'; children: ReactNode; testId?: string }) {
  const field = useFieldMessages();
  useEffect(() => {
    field?.register(kind, true);
    return () => field?.register(kind, false);
  }, [field, kind]);
  const Icon = kind === 'error' ? StatusErrorIcon : kind === 'valid' ? StatusSuccessIcon : null;
  return (
    <div className="il-form-message" data-kind={kind} id={field?.ids[kind]} data-testid={testId} aria-live={kind === 'error' ? 'polite' : undefined}>
      {Icon ? <Icon label="" size="small" color={kind === 'error' ? 'color.icon.danger' : 'color.icon.success'} /> : null}
      <span>{children}</span>
    </div>
  );
}

/** Extra help under a field: format, limits or why the field is asked for. */
export const HelperMessage = ({ children, testId }: { children: ReactNode; testId?: string }) => <Message kind="helper" testId={testId}>{children}</Message>;
/** Says what is wrong and how to fix it. */
export const ErrorMessage = ({ children, testId }: { children: ReactNode; testId?: string }) => <Message kind="error" testId={testId}>{children}</Message>;
/** Confirms a value is valid, for checks people care about such as username availability. */
export const ValidMessage = ({ children, testId }: { children: ReactNode; testId?: string }) => <Message kind="valid" testId={testId}>{children}</Message>;

/** A field label for controls outside Field. */
export function Label({ htmlFor, id, children }: { htmlFor: string; id?: string; children: ReactNode }) {
  return (
    <label className="il-label" htmlFor={htmlFor} id={id}>
      {children}
    </label>
  );
}

/** The asterisk that marks a required field. Explain it once at the top of the form. */
export const RequiredAsterisk = () => (
  <span className="il-required" aria-hidden="true">
    *
  </span>
);

export type CheckboxFieldProps = Omit<FieldProps<boolean>, 'value'> & { isChecked: boolean; value: string };

/** A Field for a single checkbox: the checkbox carries its own label, so the field shows none above it. */
export function CheckboxField({ children, value = 'true', ...props }: Omit<FieldComponentProps<boolean>, 'hideLabel' | 'children'> & { value?: string; children: (p: { fieldProps: CheckboxFieldProps; error?: string }) => ReactNode }) {
  return (
    <Field<boolean> {...props} defaultValue={props.defaultValue ?? false} hideLabel>
      {({ fieldProps, error }) => children({ fieldProps: { ...fieldProps, isChecked: !!fieldProps.value, value }, error })}
    </Field>
  );
}

/** Groups related controls, such as a set of checkboxes, under one legend. */
export function Fieldset({ legend, children }: { legend: ReactNode; children: ReactNode }) {
  return (
    <fieldset className="il-fieldset">
      <legend className="il-label">{legend}</legend>
      {children}
    </fieldset>
  );
}

/** Form title and description. */
export function FormHeader({ title, description, children }: { title: ReactNode; description?: ReactNode; children?: ReactNode }) {
  return (
    <div className="il-form-header">
      <h2 className="il-form-title">{title}</h2>
      {description ? <div className="il-form-description">{description}</div> : null}
      {children}
    </div>
  );
}

/** A titled section that groups related fields. */
export function FormSection({ title, description, children }: { title?: ReactNode; description?: ReactNode; children: ReactNode }) {
  return (
    <section className="il-form-section">
      {title ? <h3 className="il-form-section-title">{title}</h3> : null}
      {description ? <div className="il-form-description">{description}</div> : null}
      {children}
    </section>
  );
}

/** Holds the form's buttons. Align start for full pages and end for dialogs. */
export function FormFooter({ align = 'end', children }: { align?: 'start' | 'end'; children: ReactNode }) {
  return (
    <div className="il-form-footer" data-align={align}>
      {children}
    </div>
  );
}
