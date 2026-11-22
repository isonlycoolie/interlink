// SPDX-License-Identifier: Apache-2.0
'use client';
import { useContext, type MouseEvent, type ReactNode } from 'react';
import { SpotlightContext } from './popover';

export interface SpotlightFooterProps {
  /** Usually SpotlightStepCount and SpotlightActions. */
  children?: ReactNode;
  testId?: string;
}
export function SpotlightFooter({ children, testId }: SpotlightFooterProps) {
  return (
    <div className="il-spotlight-footer" data-testid={testId}>
      {children}
    </div>
  );
}

export interface SpotlightStepCountProps {
  current: number;
  total: number;
  testId?: string;
}
/** "2 of 3": where people are in a tour. */
export function SpotlightStepCount({ current, total, testId }: SpotlightStepCountProps) {
  return (
    <span className="il-spotlight-step-count" data-testid={testId}>
      {current} of {total}
    </span>
  );
}

export function SpotlightActions({ children, testId }: { children?: ReactNode; testId?: string }) {
  return (
    <div className="il-spotlight-actions" data-testid={testId}>
      {children}
    </div>
  );
}

export interface SpotlightActionProps {
  children: ReactNode;
  /** Outline for most steps; primary only for the one action that matters most. */
  appearance?: 'outline' | 'primary';
  /** Defaults to next, then done, of PopoverContent. */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  testId?: string;
}
/** The main action of a step, such as Next or Done. */
export function SpotlightPrimaryAction({ children, appearance = 'outline', onClick, testId }: SpotlightActionProps) {
  const { next, done } = useContext(SpotlightContext);
  return (
    <button type="button" className="il-spotlight-action il-focusable" data-appearance={appearance} onClick={(e) => (onClick ?? next ?? done)?.(e)} data-testid={testId}>
      {children}
    </button>
  );
}

/** A quieter action, such as Back. */
export function SpotlightSecondaryAction({ children, onClick, testId }: Omit<SpotlightActionProps, 'appearance'>) {
  const { back } = useContext(SpotlightContext);
  return (
    <button type="button" className="il-spotlight-action il-focusable" data-appearance="subtle" onClick={(e) => (onClick ?? back)?.(e)} data-testid={testId}>
      {children}
    </button>
  );
}
