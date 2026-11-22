// SPDX-License-Identifier: Apache-2.0
export type Side = 'top' | 'bottom' | 'left' | 'right';
export type Align = 'start' | 'center' | 'end';
export type Placement = 'auto' | 'auto-start' | 'auto-end' | Side | `${Side}-start` | `${Side}-end`;
export interface Position {
  top: number;
  left: number;
  side: Side;
}
export interface PlaceOptions {
  /** [along the edge, away from the trigger] in pixels. */
  offset?: [number, number];
  shouldFlip?: boolean;
}

/** Space kept between a layer and the viewport edge. */
const EDGE = 8;
const FLIP: Record<Side, Side> = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };

function split(placement: Placement, room: Record<Side, number>): [Side, Align] {
  const [s, a] = placement.split('-') as [Side | 'auto', Align | undefined];
  const side = s === 'auto' ? (Object.entries(room).sort((x, y) => y[1] - x[1])[0]?.[0] as Side) : s;
  return [side, a ?? 'center'];
}

/** Place a layer of size w x h next to the trigger rect; flips to the other side when it does not fit, then shifts inside the viewport. */
export function place(t: DOMRect, w: number, h: number, placement: Placement, { offset = [0, 8], shouldFlip = true }: PlaceOptions = {}): Position {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const room: Record<Side, number> = { top: t.top, bottom: vh - t.bottom, left: t.left, right: vw - t.right };
  const [preferred, align] = split(placement, room);
  const need = (s: Side) => (s === 'top' || s === 'bottom' ? h : w) + offset[1] + EDGE;
  const side = shouldFlip && room[preferred] < need(preferred) && room[FLIP[preferred]] >= need(FLIP[preferred]) ? FLIP[preferred] : preferred;
  const vertical = side === 'top' || side === 'bottom';
  const cross = vertical
    ? { start: t.left, center: t.left + t.width / 2 - w / 2, end: t.right - w }[align] + offset[0]
    : { start: t.top, center: t.top + t.height / 2 - h / 2, end: t.bottom - h }[align] + offset[0];
  const main = { top: t.top - h - offset[1], bottom: t.bottom + offset[1], left: t.left - w - offset[1], right: t.right + offset[1] }[side];
  const clamp = (v: number, size: number, max: number) => Math.min(Math.max(EDGE, v), Math.max(EDGE, max - size - EDGE));
  return vertical ? { top: main, left: clamp(cross, w, vw), side } : { top: clamp(cross, h, vh), left: main, side };
}

/** Top layer when the browser supports popovers, so layers are never clipped; fixed position otherwise. */
export const canPopover = () => typeof HTMLElement !== 'undefined' && 'showPopover' in HTMLElement.prototype;
/** Native modal dialogs give a real focus trap and an inert page; jsdom and old browsers fall back to aria-modal. */
export const canDialog = () => typeof HTMLDialogElement !== 'undefined' && typeof HTMLDialogElement.prototype.showModal === 'function';
