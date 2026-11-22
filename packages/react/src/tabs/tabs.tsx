// SPDX-License-Identifier: Apache-2.0
'use client';
import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { nextIndex } from '../layering/focus';
import { Tab, TabPanel } from './tab';
import { TabsContext, useTabs, withIndex } from './tabs-context';

export interface TabsProps {
  /** Unique id; tab and panel ids are built from it. */
  id: string;
  children: ReactNode;
  /** Controlled selected index. */
  selected?: number;
  defaultSelected?: number;
  onChange?: (index: number) => void;
  /** Unmount panels that are not selected instead of hiding them. */
  shouldUnmountTabPanelOnChange?: boolean;
  testId?: string;
}

/** Switches between views of related content in the same place. Contains one TabList and a TabPanel per Tab. */
export function Tabs({ id, children, selected, defaultSelected = 0, onChange, shouldUnmountTabPanelOnChange = false, testId }: TabsProps) {
  const [own, setOwn] = useState(defaultSelected);
  const [direction, setDirection] = useState<'left' | 'right'>();
  const current = selected ?? own;
  const select = (index: number) => {
    if (index === current) return;
    setDirection(index > current ? 'right' : 'left');
    setOwn(index);
    onChange?.(index);
  };
  return (
    <TabsContext.Provider value={{ id, selected: current, select, shouldUnmount: shouldUnmountTabPanelOnChange, direction }}>
      <div className="il-tabs" data-testid={testId}>
        {withIndex(children, (el) => el.type === TabPanel)}
      </div>
    </TabsContext.Provider>
  );
}

export interface TabListProps {
  children: ReactNode;
  /** Accessible name when the tabs have no visible heading above them. */
  'aria-label'?: string;
}

/** The row of tabs. Arrow keys move and select, Home and End jump to the ends. */
export function TabList({ children, 'aria-label': label }: TabListProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { select } = useTabs();
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const tabs = [...(ref.current?.querySelectorAll<HTMLElement>('[role="tab"]') ?? [])];
    const next = nextIndex(e.key, tabs.indexOf(document.activeElement as HTMLElement), tabs.length, 'horizontal');
    if (next === null) return;
    e.preventDefault();
    tabs[next]?.focus();
    select(next);
  };
  return (
    <div ref={ref} className="il-tab-list" role="tablist" aria-label={label} onKeyDown={onKeyDown}>
      {withIndex(children, (el) => el.type === Tab)}
    </div>
  );
}
