// SPDX-License-Identifier: Apache-2.0
'use client';
import { useContext, useId, useRef, type CSSProperties, type ReactNode, type RefObject } from 'react';
import { useModalDialog } from '../layering/use-modal-dialog';
import { ExitingContext, ModalContext, type CloseEvent } from './modal-context';

export type ModalWidth = 'small' | 'medium' | 'large' | 'x-large';
/** Named widths in pixels. */
export const MODAL_WIDTHS: Record<ModalWidth, number> = { small: 400, medium: 600, large: 800, 'x-large': 968 };

export interface ModalDialogProps {
  children: ReactNode;
  /** Called on Escape, the close button or an overlay click. Render the modal conditionally to close it. */
  onClose?: (event: CloseEvent) => void;
  width?: ModalWidth | number | string;
  height?: number | string;
  /** true focuses the first interactive element; pass a ref to focus a specific one. */
  autoFocus?: boolean | RefObject<HTMLElement | null>;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscapePress?: boolean;
  shouldReturnFocus?: boolean;
  /** Scroll the whole viewport instead of the modal body for very long content. */
  shouldScrollInViewport?: boolean;
  isBlanketHidden?: boolean;
  /** Accessible name when there is no ModalTitle. */
  label?: string;
  testId?: string;
}

const size = (v: number | string) => (typeof v === 'number' ? `${v}px` : v);

/** A dialog above a blanket for one focused task or message; the page behind is inert until it closes. */
export function ModalDialog({ children, onClose, width = 'medium', height, autoFocus = true, shouldCloseOnOverlayClick = true, shouldCloseOnEscapePress = true, shouldReturnFocus = true, shouldScrollInViewport = false, isBlanketHidden = false, label, testId }: ModalDialogProps) {
  const titleId = useId();
  const dialog = useRef<HTMLDialogElement | null>(null);
  const exiting = useContext(ExitingContext);
  const { onOverlayClick, nativeModal } = useModalDialog({ dialog, onClose, shouldCloseOnEscapePress, shouldCloseOnOverlayClick, autoFocus, shouldReturnFocus });
  const w = typeof width === 'string' && width in MODAL_WIDTHS ? MODAL_WIDTHS[width as ModalWidth] : width;
  const style = { '--il-modal-width': size(w), ...(height !== undefined ? { '--il-modal-height': size(height) } : {}) } as CSSProperties;
  return (
    <ModalContext.Provider value={{ titleId, onClose, testId }}>
      <dialog
        ref={dialog}
        className="il-dialog-shell il-modal-shell"
        aria-modal="true"
        aria-labelledby={label ? undefined : titleId}
        aria-label={label}
        data-blanket={isBlanketHidden ? 'hidden' : undefined}
        data-fallback={nativeModal ? undefined : true}
        data-exiting={exiting || undefined}
        data-scroll={shouldScrollInViewport ? 'viewport' : 'body'}
        onClick={onOverlayClick}
      >
        <section className="il-modal" style={style} data-testid={testId} tabIndex={-1}>
          {children}
        </section>
      </dialog>
    </ModalContext.Provider>
  );
}
