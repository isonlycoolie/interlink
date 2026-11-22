// SPDX-License-Identifier: Apache-2.0
'use client';
import { cloneElement, isValidElement, useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type FocusEvent, type HTMLAttributes, type MouseEvent, type ReactElement, type ReactNode } from 'react';

import { placeTooltip, type Placement, type TooltipPosition } from './tooltip-position';

export type { TooltipPosition } from './tooltip-position';

export interface TooltipTriggerProps {
  'aria-describedby'?: string;
  onMouseEnter: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: (e: MouseEvent<HTMLElement>) => void;
  onFocus: (e: FocusEvent<HTMLElement>) => void;
  onBlur: (e: FocusEvent<HTMLElement>) => void;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  ref: (el: HTMLElement | null) => void;
}

export interface TooltipProps {
  /** Short, plain text that adds to the trigger. Never critical or interactive content. */
  content: ReactNode;
  /** The trigger: an element, or a function that receives trigger props to spread. */
  children: ReactElement<HTMLAttributes<HTMLElement>> | ((props: TooltipTriggerProps) => ReactNode);
  position?: TooltipPosition;
  /** Milliseconds before showing on hover. */
  delay?: number;
  hideTooltipOnClick?: boolean;
  testId?: string;
}

/** Top layer when the browser supports popovers, so tooltips are never clipped; fixed position otherwise. */
const canPopover = () => typeof HTMLElement !== 'undefined' && 'showPopover' in HTMLElement.prototype;

/** A short label that appears on hover or focus, for icon buttons and truncated text. */
export function Tooltip({ content, children, position = 'top', delay = 300, hideTooltipOnClick = false, testId }: TooltipProps) {
  const id = useId();
  const trigger = useRef<HTMLElement | null>(null);
  const tip = useRef<HTMLDivElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [place, setPlace] = useState<Placement | null>(null);

  const show = useCallback((wait: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), wait);
  }, []);
  const hide = useCallback(() => {
    clearTimeout(timer.current);
    setOpen(false);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && hide();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, hide]);

  useLayoutEffect(() => {
    const t = trigger.current?.getBoundingClientRect();
    const el = tip.current;
    if (!open || !t || !el) return;
    if (canPopover() && !el.matches(':popover-open')) el.showPopover();
    setPlace(placeTooltip(t, el.offsetWidth, el.offsetHeight, position));
  }, [open, position, content]);

  const props: TooltipTriggerProps = {
    'aria-describedby': open ? id : undefined,
    onMouseEnter: () => show(delay),
    onMouseLeave: hide,
    onFocus: () => show(0),
    onBlur: hide,
    onClick: () => hideTooltipOnClick && hide(),
    ref: (el) => {
      trigger.current = el;
    },
  };
  const node = typeof children === 'function' ? children(props) : isValidElement(children) ? cloneElement(children as ReactElement<Record<string, unknown>>, props as unknown as Record<string, unknown>) : children;
  return (
    <>
      {node}
      {open ? (
        <div
          ref={tip}
          id={id}
          role="tooltip"
          popover={canPopover() ? 'manual' : undefined}
          className="il-tooltip"
          data-side={place?.side ?? position}
          data-testid={testId}
          style={place ? { top: place.top, left: place.left } : { visibility: 'hidden' }}
        >
          {content}
        </div>
      ) : null}
    </>
  );
}
