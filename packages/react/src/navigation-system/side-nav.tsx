// SPDX-License-Identifier: Apache-2.0
'use client';
import { useId, type ReactNode } from 'react';
import { useNavigationSystem } from './root';

export interface SideNavProps {
  children: ReactNode;
  /** Names the navigation, such as the app or space name. */
  label: string;
  testId?: string;
}
/** The navigation down the left of the app. Its top and bottom stay put while the middle scrolls. */
export function SideNav({ children, label, testId }: SideNavProps) {
  const { isSideNavOpen } = useNavigationSystem();
  return (
    <nav className="il-ns-side" aria-label={label} hidden={!isSideNavOpen} data-testid={testId}>
      {children}
    </nav>
  );
}

export interface SideNavHeaderProps {
  /** The space or project: a Tile or Avatar. */
  icon?: ReactNode;
  title: string;
  /** Such as "Software space". */
  subtitle?: string;
  /** Usually a more-actions menu. */
  actions?: ReactNode;
}
/** Names the space people are in, at the top of the side navigation. */
export function SideNavHeader({ icon, title, subtitle, actions }: SideNavHeaderProps) {
  return (
    <div className="il-ns-side-header">
      {icon}
      <span className="il-ns-side-header-text">
        <span className="il-ns-side-header-title">{title}</span>
        {subtitle ? <span className="il-ns-side-header-subtitle">{subtitle}</span> : null}
      </span>
      {actions}
    </div>
  );
}

export function SideNavContent({ children }: { children: ReactNode }) {
  return <div className="il-ns-side-content">{children}</div>;
}
/** Rows pinned to the bottom, such as Create and Apps. Pass NavItem rows. */
export function SideNavFooter({ children }: { children: ReactNode }) {
  return (
    <div className="il-ns-side-footer">
      <ul className="il-ns-list">{children}</ul>
    </div>
  );
}

export interface SideNavSectionProps {
  children: ReactNode;
  /** A small heading over the group. Leave it out for the first, unnamed group. */
  title?: string;
  /** An action beside the heading, such as an add button. */
  action?: ReactNode;
  /** A SideNavHeader that names the space this group belongs to, in place of a title. */
  header?: ReactNode;
  /** Draws a divider above the group. */
  hasSeparator?: boolean;
}
/** A group of navigation items. */
export function SideNavSection({ children, title, action, header, hasSeparator = false }: SideNavSectionProps) {
  const id = useId();
  return (
    <section className="il-ns-section" data-separator={hasSeparator || undefined} aria-labelledby={title ? id : undefined}>
      {title ? (
        <div className="il-ns-section-head">
          <h2 id={id} className="il-ns-section-title">
            {title}
          </h2>
          {action}
        </div>
      ) : null}
      {header}
      <ul className="il-ns-list">{children}</ul>
    </section>
  );
}
