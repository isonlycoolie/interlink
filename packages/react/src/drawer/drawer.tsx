// SPDX-License-Identifier: Apache-2.0
'use client';
import { useRef, type MouseEvent, type ReactNode, type RefObject } from 'react';
import { useModalDialog } from '../layering/use-modal-dialog';
import { usePresence } from '../layering/use-presence';
import { DrawerContext } from './drawer-parts';

export type DrawerWidth = 'narrow' | 'medium' | 'wide' | 'extended' | 'full';

export interface DrawerProps {
  isOpen: boolean;
  /** Called on Escape, the close button or a click on the blanket. */
  onClose?: (event: Event | MouseEvent) => void;
  width?: DrawerWidth;
  /** Edge the drawer slides in from. */
  enterFrom?: 'left' | 'right';
  /** Accessible name when there is no visible title. */
  label?: string;
  /** Id of a visible title inside the drawer. */
  titleId?: string;
  /** true focuses the first interactive element; pass a ref to focus a specific one. */
  autoFocusFirstElem?: boolean | RefObject<HTMLElement | null>;
  shouldReturnFocus?: boolean;
  children?: ReactNode;
  testId?: string;
}

/** Exit time of --il-panel-exit. */
const EXIT_MS = 200;

function DrawerPanel({ onClose, width, enterFrom, label, titleId, autoFocusFirstElem, shouldReturnFocus, children, testId, isExiting }: Omit<DrawerProps, 'isOpen'> & { isExiting: boolean }) {
  const dialog = useRef<HTMLDialogElement | null>(null);
  const { onOverlayClick, nativeModal } = useModalDialog({ dialog, onClose, autoFocus: autoFocusFirstElem, shouldReturnFocus });
  return (
    <DrawerContext.Provider value={{ onClose }}>
      <dialog ref={dialog} className="il-dialog-shell il-drawer-shell" aria-modal="true" aria-label={label} aria-labelledby={label ? undefined : titleId} data-fallback={nativeModal ? undefined : true} data-exiting={isExiting || undefined} onClick={onOverlayClick}>
        <div className="il-drawer" data-width={width} data-enter-from={enterFrom} data-testid={testId}>
          {children}
        </div>
      </dialog>
    </DrawerContext.Provider>
  );
}

/** A panel that slides in from the edge of the screen for a focused task, keeping the page in view behind it. */
export function Drawer({ isOpen, width = 'narrow', enterFrom = 'left', autoFocusFirstElem = true, shouldReturnFocus = true, ...rest }: DrawerProps) {
  const { isMounted, isExiting } = usePresence(isOpen, EXIT_MS);
  if (!isMounted) return null;
  return <DrawerPanel {...rest} width={width} enterFrom={enterFrom} autoFocusFirstElem={autoFocusFirstElem} shouldReturnFocus={shouldReturnFocus} isExiting={isExiting} />;
}
