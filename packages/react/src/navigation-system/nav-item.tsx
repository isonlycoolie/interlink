// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import { isValidElement, useId, useState, type ComponentType, type ReactNode } from 'react';
import type { IconProps } from '@interlink/icons';

export interface NavItemProps {
  children: ReactNode;
  /** Leave it out for an item that runs an action instead of navigating. */
  href?: string;
  onClick?: () => void;
  /** A glyph, or any element such as a Tile or Avatar. */
  icon?: ComponentType<IconProps> | ReactNode;
  /** The current page: a selected fill and a bar on the leading edge. */
  isSelected?: boolean;
  /** Content at the end, such as a count Badge or a chevron. */
  elemAfter?: ReactNode;
  testId?: string;
}

/** Icons are components (functions or memo objects); anything else is already an element to render as is. */
function glyph(icon: NavItemProps['icon']): ReactNode {
  if (icon == null || isValidElement(icon) || (typeof icon !== 'function' && typeof icon !== 'object')) return icon as ReactNode;
  const Icon = icon as ComponentType<IconProps>;
  return <Icon label="" />;
}

/** One row in the side navigation, 32px tall. */
export function NavItem({ children, href, onClick, icon, isSelected = false, elemAfter, testId }: NavItemProps) {
  const inner = (
    <>
      {icon ? <span className="il-ns-item-icon">{glyph(icon)}</span> : null}
      <span className="il-ns-item-label">{children}</span>
      {elemAfter ? <span className="il-ns-item-after">{elemAfter}</span> : null}
    </>
  );
  return (
    <li className="il-ns-li">
      {href ? (
        <a className="il-ns-item" href={href} onClick={onClick} aria-current={isSelected ? 'page' : undefined} data-testid={testId}>
          {inner}
        </a>
      ) : (
        <button type="button" className="il-ns-item" onClick={onClick} data-selected={isSelected || undefined} data-testid={testId}>
          {inner}
        </button>
      )}
    </li>
  );
}

export interface ExpandableNavItemProps {
  /** The item's name. */
  label: string;
  icon?: NavItemProps['icon'];
  /** Nested NavItem and ExpandableNavItem rows. */
  children: ReactNode;
  isDefaultExpanded?: boolean;
  /** Marks the item when one of its children is the current page and the group is closed. */
  isSelected?: boolean;
  /** Actions shown at the end, such as add. */
  actions?: ReactNode;
}

/** A row that opens to show nested rows, for trees of pages or folders. */
export function ExpandableNavItem({ label, icon, children, isDefaultExpanded = false, isSelected = false, actions }: ExpandableNavItemProps) {
  const [open, setOpen] = useState(isDefaultExpanded);
  const id = useId();
  return (
    <li className="il-ns-li" data-expanded={open || undefined}>
      <div className="il-ns-expand-row">
        <button type="button" className="il-ns-item" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)} data-selected={(isSelected && !open) || undefined}>
          <span className="il-ns-item-icon il-ns-chevron">
            <ChevronRightIcon label="" size="small" />
          </span>
          {icon ? <span className="il-ns-item-icon il-ns-item-icon-rest">{glyph(icon)}</span> : null}
          <span className="il-ns-item-label">{label}</span>
        </button>
        {actions ? <span className="il-ns-item-actions">{actions}</span> : null}
      </div>
      <ul id={id} className="il-ns-list il-ns-nested" hidden={!open}>
        {children}
      </ul>
    </li>
  );
}
