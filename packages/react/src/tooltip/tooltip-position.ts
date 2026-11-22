// SPDX-License-Identifier: Apache-2.0
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export interface Placement {
  top: number;
  left: number;
  side: TooltipPosition;
}

const GAP = 8;
const FLIP: Record<TooltipPosition, TooltipPosition> = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };

/** Place a tooltip of size w x h next to the trigger rect, flipping to the opposite side when it would not fit. */
export function placeTooltip(t: DOMRect, w: number, h: number, position: TooltipPosition): Placement {
  const fits: Record<TooltipPosition, boolean> = {
    top: t.top - h - GAP > 0,
    bottom: t.bottom + h + GAP < window.innerHeight,
    left: t.left - w - GAP > 0,
    right: t.right + w + GAP < window.innerWidth,
  };
  const side = fits[position] ? position : FLIP[position];
  const cx = t.left + t.width / 2 - w / 2;
  const cy = t.top + t.height / 2 - h / 2;
  const p = { top: { top: t.top - h - GAP, left: cx }, bottom: { top: t.bottom + GAP, left: cx }, left: { top: cy, left: t.left - w - GAP }, right: { top: cy, left: t.right + GAP } }[side];
  return { top: Math.max(GAP, p.top), left: Math.min(Math.max(GAP, p.left), window.innerWidth - w - GAP), side };
}
