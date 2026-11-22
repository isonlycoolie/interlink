// SPDX-License-Identifier: Apache-2.0
'use client';
import { useContext, type ReactNode } from 'react';
import { IndexContext, useTabs } from './tabs-context';

export interface TabProps {
  children: ReactNode;
  testId?: string;
}

/** One tab in a TabList. */
export function Tab({ children, testId }: TabProps) {
  const { id, selected, select, direction } = useTabs();
  const index = useContext(IndexContext);
  const isSelected = index === selected;
  return (
    <button type="button" role="tab" id={`${id}-${index}-tab`} aria-controls={`${id}-${index}`} aria-selected={isSelected} tabIndex={isSelected ? 0 : -1} className="il-tab" data-motion={isSelected ? direction : undefined} onClick={() => select(index)} data-testid={testId}>
      <span className="il-tab-label">{children}</span>
    </button>
  );
}

export interface TabPanelProps {
  children: ReactNode;
  testId?: string;
}

/** The content shown when its tab is selected. */
export function TabPanel({ children, testId }: TabPanelProps) {
  const { id, selected, shouldUnmount } = useTabs();
  const index = useContext(IndexContext);
  const hidden = index !== selected;
  if (hidden && shouldUnmount) return null;
  return (
    <div role="tabpanel" id={`${id}-${index}`} aria-labelledby={`${id}-${index}-tab`} hidden={hidden} tabIndex={0} className="il-tab-panel" data-testid={testId}>
      {children}
    </div>
  );
}
