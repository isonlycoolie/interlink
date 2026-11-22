// SPDX-License-Identifier: Apache-2.0
'use client';
import { createContext, useContext, type MouseEvent } from 'react';

export type CloseEvent = Event | MouseEvent;

export interface ModalAttributes {
  titleId: string;
  onClose?: (event: CloseEvent) => void;
  testId?: string;
}
export const ModalContext = createContext<ModalAttributes | null>(null);

/** Title id, close handler and test id of the surrounding modal dialog. */
export function useModal(): ModalAttributes {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('Modal parts must be used inside ModalDialog.');
  return ctx;
}

/** True while ModalTransition plays the exit animation of its modal. */
export const ExitingContext = createContext(false);
