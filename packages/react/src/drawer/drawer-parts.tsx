// SPDX-License-Identifier: Apache-2.0
'use client';
import ArrowLeftIcon from '@interlink/icons/core/arrow-left';
import { createContext, useContext, type ComponentType, type MouseEvent, type ReactNode } from 'react';
import type { IconProps } from '@interlink/icons';
import { IconButton } from '../button/icon-button';

export const DrawerContext = createContext<{ onClose?: (event: Event | MouseEvent) => void }>({});

export interface DrawerSidebarProps {
  /** Usually just the DrawerCloseButton. */
  children?: ReactNode;
  testId?: string;
}
/** The narrow column at the drawer's edge that holds the close button. */
export function DrawerSidebar({ children, testId }: DrawerSidebarProps) {
  return (
    <div className="il-drawer-sidebar" data-testid={testId}>
      {children}
    </div>
  );
}

export interface DrawerContentProps {
  children?: ReactNode;
  /** Accessible name for the scrolling region. */
  scrollContentLabel?: string;
  testId?: string;
}
/** The scrolling main area of a drawer. */
export function DrawerContent({ children, scrollContentLabel, testId }: DrawerContentProps) {
  return (
    <div className="il-drawer-content" role={scrollContentLabel ? 'region' : undefined} aria-label={scrollContentLabel} data-testid={testId}>
      {children}
    </div>
  );
}

export interface DrawerCloseButtonProps {
  icon?: ComponentType<IconProps>;
  label?: string;
  testId?: string;
}
/** Closes the drawer through its onClose. */
export function DrawerCloseButton({ icon = ArrowLeftIcon, label = 'Close drawer', testId }: DrawerCloseButtonProps) {
  const { onClose } = useContext(DrawerContext);
  return <IconButton appearance="subtle" icon={icon} label={label} onClick={(e) => onClose?.(e)} testId={testId} />;
}
