// SPDX-License-Identifier: Apache-2.0
'use client';
import CrossIcon from '@interlink/icons/core/cross';
import StatusErrorIcon from '@interlink/icons/core/status-error';
import StatusWarningIcon from '@interlink/icons/core/status-warning';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { IconButton } from '../button/icon-button';
import { useModal } from './modal-context';

export interface ModalHeaderProps {
  children?: ReactNode;
  /** Adds a close button that calls the modal's onClose. */
  hasCloseButton?: boolean;
  closeButtonLabel?: string;
  testId?: string;
}
export function ModalHeader({ children, hasCloseButton = false, closeButtonLabel = 'Close modal', testId }: ModalHeaderProps) {
  const { onClose, testId: modal } = useModal();
  return (
    <div className="il-modal-header" data-testid={testId ?? (modal && `${modal}--header`)}>
      {children}
      {hasCloseButton ? <IconButton appearance="subtle" icon={CrossIcon} label={closeButtonLabel} onClick={(e) => onClose?.(e)} /> : null}
    </div>
  );
}

export interface ModalTitleProps {
  children?: ReactNode;
  /** Adds a warning or danger icon for destructive or risky tasks. */
  appearance?: 'warning' | 'danger';
  /** Wrap long titles; false truncates them to one line. */
  isMultiline?: boolean;
  testId?: string;
}
export function ModalTitle({ children, appearance, isMultiline = true, testId }: ModalTitleProps) {
  const { titleId } = useModal();
  const Icon = appearance === 'danger' ? StatusErrorIcon : appearance === 'warning' ? StatusWarningIcon : null;
  return (
    <h1 className="il-modal-title" id={titleId} data-multiline={isMultiline || undefined} data-testid={testId}>
      {Icon ? <Icon label={appearance ?? ''} color={appearance === 'danger' ? 'color.icon.danger' : 'color.icon.warning'} spacing="spacious" /> : null}
      <span className="il-modal-title-text">{children}</span>
    </h1>
  );
}

export interface ModalBodyProps {
  children?: ReactNode;
  /** Horizontal padding; turn off for full-bleed content such as a table. */
  hasInlinePadding?: boolean;
  testId?: string;
}
/** The scrolling content of a modal; shows keylines above and below when it scrolls. */
export function ModalBody({ children, hasInlinePadding = true, testId }: ModalBodyProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scrolls, setScrolls] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => setScrolls(el.scrollHeight > el.clientHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} className="il-modal-body" data-inline-padding={hasInlinePadding || undefined} data-scrolls={scrolls || undefined} tabIndex={scrolls ? 0 : undefined} data-testid={testId}>
      {children}
    </div>
  );
}

export interface ModalFooterProps {
  /** Actions, primary on the right. */
  children?: ReactNode;
  testId?: string;
}
export function ModalFooter({ children, testId }: ModalFooterProps) {
  return (
    <div className="il-modal-footer" data-testid={testId}>
      {children}
    </div>
  );
}
