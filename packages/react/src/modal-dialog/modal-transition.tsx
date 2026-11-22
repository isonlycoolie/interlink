// SPDX-License-Identifier: Apache-2.0
'use client';
import { useEffect, useState, type ReactNode } from 'react';
import { usePresence } from '../layering/use-presence';
import { ExitingContext } from './modal-context';

export interface ModalTransitionProps {
  /** A modal dialog, or nothing. Removing it plays the exit animation before it unmounts. */
  children?: ReactNode;
}

/** Exit time of --il-modal-exit. */
const EXIT_MS = 200;

/** Wrap a conditionally rendered ModalDialog so it animates out instead of disappearing. */
export function ModalTransition({ children }: ModalTransitionProps) {
  const [last, setLast] = useState<ReactNode>(children);
  const hasChild = !!children;
  const { isMounted, isExiting } = usePresence(hasChild, EXIT_MS);
  useEffect(() => {
    if (children) setLast(children);
  }, [children]);
  if (!isMounted) return null;
  return <ExitingContext.Provider value={isExiting}>{children || last}</ExitingContext.Provider>;
}
