// SPDX-License-Identifier: Apache-2.0
'use client';
import { Children, createContext, createElement, useId, type CSSProperties, type MouseEvent, type ReactNode } from 'react';

export type MenuSpacing = 'cozy' | 'compact';
export const SpacingContext = createContext<MenuSpacing>('cozy');

export interface MenuGroupProps {
  children: ReactNode;
  /** Cozy for most menus; compact for dense ones with many items. */
  spacing?: MenuSpacing;
  /** ARIA role, such as menu when the group is a menu people move through with arrow keys. */
  role?: string;
  /** Accessible name of the menu. */
  menuLabel?: string;
  /** Shows skeleton items instead of the children. */
  isLoading?: boolean;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  testId?: string;
}

/** The outer container of a menu: sizing, scrolling and the spacing of every item inside. */
export function MenuGroup({ children, spacing = 'cozy', role, menuLabel, isLoading = false, minWidth, maxWidth, minHeight, maxHeight, onClick, testId }: MenuGroupProps) {
  const style: CSSProperties = { minWidth, maxWidth, minHeight, maxHeight };
  return (
    <SpacingContext.Provider value={spacing}>
      <div className="il-menu-group" role={role} aria-label={menuLabel} aria-busy={isLoading || undefined} style={style} onClick={onClick} data-testid={testId}>
        {children}
      </div>
    </SpacingContext.Provider>
  );
}

export interface SectionProps {
  children?: ReactNode;
  /** Visible heading for the section. */
  title?: string;
  /** A line above the section, to separate it from the one before. */
  hasSeparator?: boolean;
  /** Scroll this section on its own when it is long. */
  isScrollable?: boolean;
  /** Render items as a list, for menus of links. */
  isList?: boolean;
  id?: string;
  testId?: string;
}

/** Groups related items under an optional heading. */
export function Section({ children, title, hasSeparator = false, isScrollable = false, isList = false, id, testId }: SectionProps) {
  const auto = useId();
  const headingId = `${id ?? auto}-heading`;
  return (
    <div className="il-menu-section" role="group" aria-labelledby={title ? headingId : undefined} data-separator={hasSeparator || undefined} data-scrollable={isScrollable || undefined} id={id} data-testid={testId}>
      {title ? (
        <HeadingItem id={headingId}>{title}</HeadingItem>
      ) : null}
      {isList ? <ul className="il-menu-list">{Children.map(children, (c) => (c ? <li>{c}</li> : null))}</ul> : children}
    </div>
  );
}

export interface HeadingItemProps {
  children: ReactNode;
  id?: string;
  /** Heading level for the section title, when it belongs in the page outline. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  testId?: string;
}

/** A title above a group of items. */
export function HeadingItem({ children, id, headingLevel, testId }: HeadingItemProps) {
  return createElement(headingLevel ? `h${headingLevel}` : 'div', { className: 'il-menu-heading', id, 'data-testid': testId }, children);
}
