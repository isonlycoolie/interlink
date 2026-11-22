// SPDX-License-Identifier: Apache-2.0
'use client';
import type { ReactNode } from 'react';
import type { Placement } from '../layering/place';
import { PopupBase } from '../popup/popup-base';

export interface InlineDialogProps {
  /** The element the dialog points at, usually a button that toggles isOpen. */
  children: ReactNode;
  content: ReactNode | (() => ReactNode);
  isOpen?: boolean;
  /** Called on Escape or a click outside, with isOpen false. */
  onClose?: (result: { isOpen: false; event: Event }) => void;
  placement?: Placement;
  testId?: string;
}

/** A small dialog next to its trigger for extra detail or a quick task, without leaving the page. */
export function InlineDialog({ children, content, isOpen = false, onClose, placement = 'bottom-start', testId }: InlineDialogProps) {
  return (
    <PopupBase
      isOpen={isOpen}
      onClose={(event) => onClose?.({ isOpen: false, event })}
      placement={placement}
      role="dialog"
      autoFocus={false}
      className="il-inline-dialog"
      testId={testId}
      trigger={({ ref }) => (
        <span ref={ref} className="il-inline-dialog-trigger">
          {children}
        </span>
      )}
      content={() => (typeof content === 'function' ? content() : content)}
    />
  );
}
