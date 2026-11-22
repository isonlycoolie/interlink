// SPDX-License-Identifier: Apache-2.0
'use client';
import { useContext, type MouseEvent, type MouseEventHandler, type ReactNode, type Ref } from 'react';
import { SpacingContext } from './menu-group';

export interface MenuItemProps {
  /** The item's title. */
  children?: ReactNode;
  /** A second line of quieter text. */
  description?: ReactNode;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  isDisabled?: boolean;
  /** Marks the current item, such as the page people are on. */
  isSelected?: boolean;
  shouldTitleWrap?: boolean;
  shouldDescriptionWrap?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onMouseDown?: MouseEventHandler<HTMLElement>;
  /** ARIA role, such as menuitem inside a menu. */
  role?: string;
  testId?: string;
}

/** Shared item body: icons, title and description. */
export function MenuItemContent({ children, description, iconBefore, iconAfter, shouldTitleWrap, shouldDescriptionWrap }: MenuItemProps) {
  return (
    <>
      {iconBefore ? <span className="il-menu-item-before">{iconBefore}</span> : null}
      <span className="il-menu-item-text">
        <span className="il-menu-item-title" data-wrap={shouldTitleWrap || undefined}>
          {children}
        </span>
        {description ? (
          <span className="il-menu-item-description" data-wrap={shouldDescriptionWrap || undefined}>
            {description}
          </span>
        ) : null}
      </span>
      {iconAfter ? <span className="il-menu-item-after">{iconAfter}</span> : null}
    </>
  );
}

const common = (spacing: string, p: MenuItemProps) => ({
  className: 'il-menu-item',
  'data-spacing': spacing,
  'data-selected': p.isSelected || undefined,
  'data-disabled': p.isDisabled || undefined,
  'data-testid': p.testId,
  role: p.role,
  onMouseDown: p.onMouseDown,
});

export interface ButtonItemProps extends MenuItemProps {
  ref?: Ref<HTMLButtonElement>;
}
/** An item that performs an action, such as Copy or Archive. */
export function ButtonItem({ ref, ...p }: ButtonItemProps) {
  const spacing = useContext(SpacingContext);
  return (
    <button ref={ref} type="button" {...common(spacing, p)} disabled={p.isDisabled} aria-current={p.isSelected || undefined} onClick={p.isDisabled ? undefined : p.onClick}>
      <MenuItemContent {...p} />
    </button>
  );
}

export interface LinkItemProps extends MenuItemProps {
  href?: string;
  target?: string;
  rel?: string;
  ref?: Ref<HTMLAnchorElement>;
}
/** An item that takes people to another place. */
export function LinkItem({ ref, href, target, rel, ...p }: LinkItemProps) {
  const spacing = useContext(SpacingContext);
  return (
    <a ref={ref} {...common(spacing, p)} href={p.isDisabled ? undefined : href} target={target} rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)} aria-disabled={p.isDisabled || undefined} aria-current={p.isSelected ? 'page' : undefined} onClick={p.isDisabled ? undefined : p.onClick}>
      <MenuItemContent {...p} />
    </a>
  );
}
