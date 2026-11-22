// SPDX-License-Identifier: Apache-2.0
'use client';
import { createContext, useContext, useState } from 'react';
import type { MenuSpacing } from '../menu/menu-group';

export interface DropdownContextValue {
  close: (event?: Event) => void;
  spacing: MenuSpacing;
}
export const DropdownContext = createContext<DropdownContextValue>({ close: () => undefined, spacing: 'cozy' });
export const useDropdown = () => useContext(DropdownContext);

/** Id of the surrounding checkbox or radio group. */
export const GroupIdContext = createContext<string>('default');

export interface SelectionStore {
  get: (group: string, id: string) => boolean | undefined;
  /** Whether anything in the group has been chosen yet. */
  has: (group: string) => boolean;
  set: (group: string, id: string, value: boolean) => void;
  /** Select one radio in a group and clear the others. */
  pick: (group: string, id: string) => void;
}
export const SelectionContext = createContext<SelectionStore | null>(null);

/** Keeps checkbox and radio item state while the menu closes and opens again. */
export function useSelectionStore(): SelectionStore {
  const [state, setState] = useState<Record<string, Record<string, boolean>>>({});
  return {
    get: (group, id) => state[group]?.[id],
    has: (group) => group in state,
    set: (group, id, value) => setState((s) => ({ ...s, [group]: { ...s[group], [id]: value } })),
    pick: (group, id) => setState((s) => ({ ...s, [group]: { [id]: true } })),
  };
}
