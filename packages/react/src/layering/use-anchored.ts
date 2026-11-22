// SPDX-License-Identifier: Apache-2.0
'use client';
import { useCallback, useLayoutEffect, useState, type RefObject } from 'react';
import { canPopover, place, type Placement, type Position } from './place';

export interface AnchorOptions {
  isOpen: boolean;
  trigger: RefObject<HTMLElement | null>;
  layer: RefObject<HTMLElement | null>;
  placement: Placement;
  offset?: [number, number];
  shouldFlip?: boolean;
  /** Make the layer as wide as the trigger, as Select does. */
  matchWidth?: boolean;
}

/** Shows a layer in the top layer and keeps it next to its trigger while the page scrolls or resizes. */
export function useAnchored({ isOpen, trigger, layer, placement, offset, shouldFlip, matchWidth }: AnchorOptions) {
  const [pos, setPos] = useState<(Position & { width?: number }) | null>(null);
  const update = useCallback(() => {
    const t = trigger.current?.getBoundingClientRect();
    const el = layer.current;
    if (!t || !el) return;
    const width = matchWidth ? t.width : undefined;
    setPos({ ...place(t, width ?? el.offsetWidth, el.offsetHeight, placement, { offset, shouldFlip }), width });
  }, [trigger, layer, placement, offset?.[0], offset?.[1], shouldFlip, matchWidth]);

  useLayoutEffect(() => {
    const el = layer.current;
    if (!isOpen || !el) {
      setPos(null);
      return;
    }
    if (canPopover() && !el.matches(':popover-open')) el.showPopover();
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [isOpen, update]);

  const style = pos ? { top: pos.top, left: pos.left, width: pos.width } : { visibility: 'hidden' as const };
  return { pos, update, style, popover: canPopover() ? ('manual' as const) : undefined };
}
