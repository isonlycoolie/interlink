// SPDX-License-Identifier: Apache-2.0
'use client';
import { createContext, useContext, useEffect, useId, useRef, type MouseEvent, type ReactNode, type RefObject } from 'react';
import { firstFocusable } from '../layering/focus';
import type { Placement } from '../layering/place';
import { useAnchored } from '../layering/use-anchored';
import { useDismiss } from '../layering/use-dismiss';

type Handler = (event: Event | MouseEvent) => void;
export interface SpotlightContextValue {
  headingId: string;
  side?: string;
  dismiss?: Handler;
  back?: Handler;
  next?: Handler;
  done?: Handler;
}
const TargetContext = createContext<RefObject<HTMLSpanElement | null> | null>(null);
export const SpotlightContext = createContext<SpotlightContextValue>({ headingId: '' });

/** Ties one PopoverTarget to its PopoverContent. */
export function PopoverProvider({ children }: { children: ReactNode }) {
  const target = useRef<HTMLSpanElement | null>(null);
  return <TargetContext.Provider value={target}>{children}</TargetContext.Provider>;
}

/** The element a spotlight points at. */
export function PopoverTarget({ children }: { children: ReactNode }) {
  const target = useContext(TargetContext);
  return (
    <span ref={target} className="il-spotlight-target">
      {children}
    </span>
  );
}

export interface PopoverContentProps {
  children: ReactNode;
  /** Which side of the target the card sits on. */
  placement: Placement;
  isVisible?: boolean;
  /** Close the spotlight: the dismiss control, Escape and, if allowed, a click outside. */
  dismiss: Handler;
  /** Go to the previous step; the secondary action uses it. */
  back?: Handler;
  /** Go to the next step; the primary action uses it. */
  next?: Handler;
  /** Finish the tour; the primary action uses it on the last step. */
  done?: Handler;
  shouldDismissOnClickOutside?: boolean;
  /** [along the edge, away from the target] in pixels. */
  offset?: [number, number];
  testId?: string;
}

/** Shows a SpotlightCard next to the target, in the top layer, and moves focus into it. */
export function PopoverContent({ children, placement, isVisible = true, dismiss, back, next, done, shouldDismissOnClickOutside = false, offset = [0, 12], testId }: PopoverContentProps) {
  const target = useContext(TargetContext) ?? { current: null };
  const layer = useRef<HTMLDivElement | null>(null);
  const headingId = useId();
  const { pos, style, popover } = useAnchored({ isOpen: isVisible, trigger: target, layer, placement, offset });
  useDismiss({ isOpen: isVisible, onDismiss: dismiss, inside: [layer], closeOnOutsideClick: shouldDismissOnClickOutside });
  useEffect(() => {
    if (isVisible) (firstFocusable(layer.current) ?? layer.current)?.focus();
  }, [isVisible]);
  if (!isVisible) return null;
  return (
    <div ref={layer} className="il-spotlight-layer" popover={popover} role="dialog" aria-labelledby={headingId} tabIndex={-1} data-side={pos?.side} style={style} data-testid={testId}>
      <SpotlightContext.Provider value={{ headingId, side: pos?.side, dismiss, back, next, done }}>{children}</SpotlightContext.Provider>
    </div>
  );
}
