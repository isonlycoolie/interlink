// SPDX-License-Identifier: Apache-2.0
'use client';
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface NavState {
  isSideNavOpen: boolean;
  toggleSideNav: () => void;
}
const NavContext = createContext<NavState>({ isSideNavOpen: true, toggleSideNav: () => {} });

/** The open state of the side navigation, for custom toggles. */
export function useNavigationSystem(): NavState {
  return useContext(NavContext);
}

export interface RootProps {
  /** TopNav, SideNav, Main and an optional Panel, in that order. */
  children: ReactNode;
  /** Controlled open state of the side navigation. */
  isSideNavOpen?: boolean;
  defaultIsSideNavOpen?: boolean;
  onSideNavToggle?: (isOpen: boolean) => void;
  /** Label of the skip link that jumps past the navigation. */
  skipLinkLabel?: string;
  testId?: string;
}

/**
 * The frame of an app: a top bar across the page, side navigation on the left, the page in the middle, and an
 * optional panel on the right. Below 48rem the side navigation and panel open over the page.
 */
export function Root({ children, isSideNavOpen, defaultIsSideNavOpen = true, onSideNavToggle, skipLinkLabel = 'Skip to main content', testId }: RootProps) {
  const [own, setOwn] = useState(defaultIsSideNavOpen);
  const open = isSideNavOpen ?? own;
  const toggleSideNav = useCallback(() => {
    setOwn(!open);
    onSideNavToggle?.(!open);
  }, [open, onSideNavToggle]);
  const value = useMemo(() => ({ isSideNavOpen: open, toggleSideNav }), [open, toggleSideNav]);
  return (
    <NavContext.Provider value={value}>
      <div className="il-ns-frame" data-testid={testId}>
        <a className="il-ns-skip" href="#il-main">
          {skipLinkLabel}
        </a>
        <div className="il-ns" data-side={open ? 'open' : 'closed'}>
          {children}
        </div>
      </div>
    </NavContext.Provider>
  );
}

export interface MainProps {
  children: ReactNode;
  /** Use full width for boards and tables; fixed keeps reading pages at a comfortable measure. */
  width?: 'full' | 'fixed';
  testId?: string;
}

/** The page itself. The skip link lands here. */
export function Main({ children, width = 'full', testId }: MainProps) {
  return (
    <main id="il-main" className="il-ns-main" data-width={width} tabIndex={-1} data-testid={testId}>
      <div className="il-ns-main-inner">{children}</div>
    </main>
  );
}
