// SPDX-License-Identifier: Apache-2.0
'use client';
import { createContext, useContext } from 'react';

export type Values = Record<string, unknown>;
export type Validator = (value: unknown, values: Values) => string | undefined | void;
/** Return field errors to show them; return nothing when the submit succeeded. */
export type SubmitResult = Record<string, string> | undefined | void;

export interface Registered {
  validate?: Validator;
  focus?: () => void;
}

export interface Store {
  values: Values;
  touched: Record<string, boolean>;
  errors: Record<string, string | undefined>;
  submitFailed: boolean;
  submitting: boolean;
  isDisabled: boolean;
  register: (name: string, reg: Registered, initial: unknown) => void;
  setValue: (name: string, value: unknown) => void;
  touch: (name: string) => void;
}

export const FormContext = createContext<Store | null>(null);
export const useForm = () => useContext(FormContext);
