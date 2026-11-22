// SPDX-License-Identifier: Apache-2.0
'use client';
import { useId, type MouseEvent, type ReactNode } from 'react';
import { MenuItemContent } from '../menu/menu-item';
import { useDropdown } from './dropdown-context';

export interface DropdownItemProps {
  children?: ReactNode;
  description?: ReactNode;
  elemBefore?: ReactNode;
  elemAfter?: ReactNode;
  /** Makes the item a link. */
  href?: string;
  target?: string;
  rel?: string;
  isDisabled?: boolean;
  /** Marks the current choice, such as the active view. */
  isSelected?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  shouldTitleWrap?: boolean;
  shouldDescriptionWrap?: boolean;
  testId?: string;
}

/** One action in a dropdown menu. Choosing it closes the menu. */
export function DropdownItem({ children, description, elemBefore, elemAfter, href, target, rel, isDisabled = false, isSelected = false, onClick, shouldTitleWrap, shouldDescriptionWrap, testId }: DropdownItemProps) {
  const { close, spacing } = useDropdown();
  const props = {
    className: 'il-dropdown-item',
    role: 'menuitem',
    tabIndex: -1,
    'data-spacing': spacing,
    'data-selected': isSelected || undefined,
    'aria-current': isSelected || undefined,
    'aria-disabled': isDisabled || undefined,
    'data-testid': testId,
    onClick: (e: MouseEvent<HTMLElement>) => {
      if (isDisabled) return e.preventDefault();
      onClick?.(e);
      close(e.nativeEvent);
    },
  };
  const body = <MenuItemContent iconBefore={elemBefore} iconAfter={elemAfter} description={description} shouldTitleWrap={shouldTitleWrap} shouldDescriptionWrap={shouldDescriptionWrap}>{children}</MenuItemContent>;
  return href && !isDisabled ? (
    <a {...props} href={href} target={target} rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}>
      {body}
    </a>
  ) : (
    <button type="button" {...props}>
      {body}
    </button>
  );
}

export interface DropdownItemGroupProps {
  children?: ReactNode;
  /** Visible heading of the group. */
  title?: string;
  hasSeparator?: boolean;
  /** Scroll this group on its own when it is long. */
  isScrollable?: boolean;
  id?: string;
  testId?: string;
}

/** Groups related items, with an optional title and a line above. */
export function DropdownItemGroup({ children, title, hasSeparator = false, isScrollable = false, id, testId }: DropdownItemGroupProps) {
  const auto = useId();
  const { spacing } = useDropdown();
  const titleId = `${id ?? auto}-title`;
  return (
    <div className="il-dropdown-group" role="group" aria-labelledby={title ? titleId : undefined} data-spacing={spacing} data-separator={hasSeparator || undefined} data-scrollable={isScrollable || undefined} id={id} data-testid={testId}>
      {title ? (
        <div className="il-dropdown-group-title" id={titleId} aria-hidden="true">
          {title}
        </div>
      ) : null}
      {children}
    </div>
  );
}
