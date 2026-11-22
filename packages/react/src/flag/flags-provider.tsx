// SPDX-License-Identifier: Apache-2.0
'use client';
import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react';
import { Flag, type FlagProps } from './flag';
import { AutoDismissFlag, FlagGroup } from './flag-group';
import type { FlagId } from './flag-parts';

export interface CreateFlagArgs extends Omit<FlagProps, 'id'> {
  id?: FlagId;
  /** Dismiss after a few seconds, for success messages. */
  isAutoDismiss?: boolean;
}
export interface FlagAPI {
  /** Shows a flag and returns a function that dismisses it. */
  showFlag: (args: CreateFlagArgs) => () => void;
  hideFlag: (id: FlagId) => void;
}

const FlagContext = createContext<FlagAPI | null>(null);

/** Show and hide flags from anywhere below FlagsProvider. */
export function useFlags(): FlagAPI {
  const api = useContext(FlagContext);
  if (!api) throw new Error('useFlags must be used inside FlagsProvider.');
  return api;
}

export interface FlagsProviderProps {
  children: ReactNode;
}

/** Owns the app's FlagGroup so any component can raise a flag with useFlags(). */
export function FlagsProvider({ children }: FlagsProviderProps) {
  const [flags, setFlags] = useState<(CreateFlagArgs & { id: FlagId })[]>([]);
  const next = useRef(0);
  const hideFlag = useCallback((id: FlagId) => setFlags((all) => all.filter((f) => f.id !== id)), []);
  const showFlag = useCallback(
    (args: CreateFlagArgs) => {
      const id = args.id ?? `flag-${next.current++}`;
      setFlags((all) => [{ ...args, id }, ...all.filter((f) => f.id !== id)]);
      return () => hideFlag(id);
    },
    [hideFlag],
  );
  const api = useMemo(() => ({ showFlag, hideFlag }), [showFlag, hideFlag]);
  return (
    <FlagContext.Provider value={api}>
      {children}
      <FlagGroup onDismissed={hideFlag}>
        {flags.map(({ isAutoDismiss, ...f }) => (isAutoDismiss ? <AutoDismissFlag key={f.id} {...f} /> : <Flag key={f.id} {...f} />))}
      </FlagGroup>
    </FlagContext.Provider>
  );
}
