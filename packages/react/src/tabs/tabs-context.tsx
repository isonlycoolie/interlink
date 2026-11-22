// SPDX-License-Identifier: Apache-2.0
'use client';
import { Children, createContext, isValidElement, useContext, type ReactElement, type ReactNode } from 'react';

export interface TabsState {
  id: string;
  selected: number;
  select: (index: number) => void;
  shouldUnmount: boolean;
  /** Direction the indicator slides in from, for the selected tab only. */
  direction?: 'left' | 'right';
}
export const TabsContext = createContext<TabsState | null>(null);
export const IndexContext = createContext(0);
export const useTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tab parts must be used inside Tabs.');
  return ctx;
};
export const withIndex = (children: ReactNode, match: (el: ReactElement) => boolean) => {
  let i = 0;
  return Children.map(children, (child) => (isValidElement(child) && match(child) ? <IndexContext.Provider value={i++}>{child}</IndexContext.Provider> : child));
};
