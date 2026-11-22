// SPDX-License-Identifier: Apache-2.0
'use client';
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { firstFocusable } from '../layering/focus';
import type { Placement } from '../layering/place';
import { useAnchored } from '../layering/use-anchored';
import { useDismiss } from '../layering/use-dismiss';

export interface TriggerProps {
  ref: (el: HTMLElement | null) => void;
  'aria-controls'?: string;
  'aria-expanded': boolean;
  'aria-haspopup'?: boolean | 'dialog' | 'menu' | 'listbox';
}
export interface ContentProps {
  /** Recalculate the position after the content changes size. */
  update: () => void;
  onClose?: () => void;
  isOpen: boolean;
  /** Choose which element receives focus when the popup opens. */
  setInitialFocusRef: (el: HTMLElement | null) => void;
}
export interface PopupProps {
  isOpen: boolean;
  /** Called with the event when people press Escape or click outside. */
  onClose?: (event: Event) => void;
  trigger: (props: TriggerProps) => ReactNode;
  content: (props: ContentProps) => ReactNode;
  placement?: Placement;
  /** [along the trigger edge, away from the trigger] in pixels. */
  offset?: [number, number];
  shouldFlip?: boolean;
  /** Move focus into the popup when it opens. */
  autoFocus?: boolean;
  shouldReturnFocus?: boolean;
  /** ARIA role of the popup, such as dialog. */
  role?: string;
  /** Accessible name when there is no visible title. */
  label?: string;
  /** Id of a visible title that names the popup. */
  titleId?: string;
  id?: string;
  /** Make the popup as wide as its trigger. */
  shouldFitContainer?: boolean;
  testId?: string;
}

/** Popup plus internal styling hooks shared by inline dialogs, menus and select menus. */
export function PopupBase({ isOpen, onClose, trigger, content, placement = 'auto', offset, shouldFlip = true, autoFocus = true, shouldReturnFocus = true, role, label, titleId, id, shouldFitContainer, testId, className = '', onLayerKeyDown }: PopupProps & { className?: string; onLayerKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void }) {
  const auto = useId();
  const layerId = id ?? auto;
  const triggerRef = useRef<HTMLElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const [initialFocus, setInitialFocus] = useState<HTMLElement | null>(null);
  const { update, style, pos, popover } = useAnchored({ isOpen, trigger: triggerRef, layer: layerRef, placement, offset, shouldFlip, matchWidth: shouldFitContainer });
  useDismiss({ isOpen, onDismiss: (e) => onClose?.(e), inside: [triggerRef, layerRef] });

  useEffect(() => {
    if (!isOpen) return;
    if (autoFocus) (initialFocus ?? firstFocusable(layerRef.current) ?? layerRef.current)?.focus();
    return () => {
      const active = document.activeElement;
      const lost = !active || active === document.body || layerRef.current?.contains(active);
      if (shouldReturnFocus && lost) triggerRef.current?.focus();
    };
  }, [isOpen]);

  const triggerProps: TriggerProps = {
    ref: (el: HTMLElement | null) => {
      triggerRef.current = el;
    },
    'aria-controls': isOpen ? layerId : undefined,
    'aria-expanded': isOpen,
    'aria-haspopup': role === 'dialog' || role === 'menu' || role === 'listbox' ? role : true,
  };
  return (
    <>
      {trigger(triggerProps)}
      {isOpen ? (
        <div ref={layerRef} id={layerId} className={`il-layer ${className}`.trim()} popover={popover} role={role} aria-label={label} aria-labelledby={titleId} aria-modal={role === 'dialog' ? false : undefined} tabIndex={-1} data-side={pos?.side} data-testid={testId} style={style} onKeyDown={onLayerKeyDown}>
          {content({ update, onClose: () => onClose?.(new Event('close')), isOpen, setInitialFocusRef: setInitialFocus })}
        </div>
      ) : null}
    </>
  );
}
