// SPDX-License-Identifier: Apache-2.0
'use client';
import { useEffect, useLayoutEffect, useRef, type MouseEvent, type RefObject } from 'react';
import { firstFocusable } from './focus';
import { canDialog } from './place';
import { useDismiss } from './use-dismiss';

export interface ModalDialogOptions {
  dialog: RefObject<HTMLDialogElement | null>;
  onClose?: (event: Event | MouseEvent) => void;
  shouldCloseOnEscapePress?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  /** true focuses the first interactive element; a ref focuses that element; false leaves focus on the dialog. */
  autoFocus?: boolean | RefObject<HTMLElement | null>;
  shouldReturnFocus?: boolean;
}

/**
 * Shared behaviour of modal dialogs and drawers on a native dialog element: top layer, focus trap and inert
 * page from showModal(), Escape through the layer stack, overlay clicks, and focus back to where it was.
 */
export function useModalDialog({ dialog, onClose, shouldCloseOnEscapePress = true, shouldCloseOnOverlayClick = true, autoFocus = true, shouldReturnFocus = true }: ModalDialogOptions) {
  const close = useRef(onClose);
  close.current = onClose;
  const returnTo = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const d = dialog.current;
    if (!d) return;
    returnTo.current = document.activeElement as HTMLElement | null;
    if (canDialog()) {
      if (!d.open) d.showModal();
    } else d.setAttribute('open', '');
    const target = typeof autoFocus === 'object' ? autoFocus.current : autoFocus ? firstFocusable(d) : null;
    (target ?? d).focus();
    // Escape goes through the layer stack instead, so open menus inside close first.
    const cancel = (e: Event) => e.preventDefault();
    // Browsers may still close a dialog without a cancellable event; keep it open while React renders it.
    const reopen = () => d.isConnected && canDialog() && !d.open && d.showModal();
    d.addEventListener('cancel', cancel);
    d.addEventListener('close', reopen);
    return () => {
      d.removeEventListener('cancel', cancel);
      d.removeEventListener('close', reopen);
      if (canDialog() && d.open) d.close();
    };
  }, []);

  useEffect(
    () => () => {
      if (shouldReturnFocus && returnTo.current?.isConnected) returnTo.current.focus();
    },
    [],
  );

  useDismiss({ isOpen: true, onDismiss: (e) => close.current?.(e), closeOnEscape: shouldCloseOnEscapePress, closeOnOutsideClick: false });

  /** Clicks on the dialog element itself land on the blanket around the panel. */
  const onOverlayClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (shouldCloseOnOverlayClick && e.target === e.currentTarget) close.current?.(e);
  };
  return { onOverlayClick, nativeModal: canDialog() };
}
