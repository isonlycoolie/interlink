// SPDX-License-Identifier: Apache-2.0
'use client';
import AddIcon from '@interlink/icons/core/add';
import AppSwitcherIcon from '@interlink/icons/core/app-switcher';
import SidebarCollapseIcon from '@interlink/icons/core/sidebar-collapse';
import SidebarExpandIcon from '@interlink/icons/core/sidebar-expand';
import type { ComponentType, ReactNode } from 'react';
import type { IconProps } from '@interlink/icons';
import { Button } from '../button/button';
import { IconButton } from '../button/icon-button';
import { useNavigationSystem } from './root';

export interface TopNavProps {
  children: ReactNode;
  /** Names the bar for assistive technology. */
  label?: string;
}
/** The bar across the top of every page: app identity at the start, search and create in the middle, people tools at the end. */
export function TopNav({ children, label = 'Global' }: TopNavProps) {
  return (
    <header className="il-ns-top" aria-label={label}>
      {children}
    </header>
  );
}
export function TopNavStart({ children }: { children: ReactNode }) {
  return <div className="il-ns-top-start">{children}</div>;
}
export function TopNavMiddle({ children }: { children: ReactNode }) {
  return <div className="il-ns-top-middle">{children}</div>;
}
export function TopNavEnd({ children }: { children: ReactNode }) {
  return <div className="il-ns-top-end">{children}</div>;
}

/** Opens and closes the side navigation. */
export function SideNavToggle({ label }: { label?: string }) {
  const { isSideNavOpen, toggleSideNav } = useNavigationSystem();
  return (
    <IconButton appearance="subtle" icon={isSideNavOpen ? SidebarCollapseIcon : SidebarExpandIcon} label={label ?? (isSideNavOpen ? 'Collapse sidebar' : 'Expand sidebar')} aria-expanded={isSideNavOpen} onClick={toggleSideNav} />
  );
}

/** Opens the list of apps people can switch to. */
export function AppSwitcher({ onClick, label = 'Switch apps' }: { onClick?: () => void; label?: string }) {
  return <IconButton appearance="subtle" icon={AppSwitcherIcon} label={label} onClick={onClick} />;
}

export interface AppLogoProps {
  /** The product name, shown bold beside its tile. */
  name: string;
  /** The product glyph, drawn in white on the tile. */
  icon: ComponentType<IconProps>;
  /** Usually the app's home. */
  href: string;
  color?: 'brand' | 'blue' | 'purple' | 'saffron' | 'lime' | 'ink';
}
/** The product mark: a solid tile with the product glyph, then the name. It always links home. */
export function AppLogo({ name, icon: Icon, href, color = 'brand' }: AppLogoProps) {
  return (
    <a className="il-ns-logo" href={href} data-color={color}>
      <span className="il-ns-logo-tile" aria-hidden="true">
        <Icon label="" color="currentColor" />
      </span>
      <span className="il-ns-logo-name">{name}</span>
    </a>
  );
}

/** The main create action of the app. One per app, always in the top bar. */
export function CreateButton({ children = 'Create', onClick }: { children?: ReactNode; onClick?: () => void }) {
  return (
    <Button appearance="primary" iconBefore={AddIcon} onClick={onClick}>
      {children}
    </Button>
  );
}
