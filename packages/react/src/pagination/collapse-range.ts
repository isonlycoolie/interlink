// SPDX-License-Identifier: Apache-2.0
export type Slot = number | 'ellipsis';

const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

/**
 * Page slots for a pagination of `total` pages showing at most `max` slots: the first and last page always,
 * the current page with its neighbours, and an ellipsis where pages are hidden.
 */
export function collapseRange(total: number, current: number, max: number): Slot[] {
  if (total <= max) return range(0, total - 1);
  const window = Math.max(1, max - 4);
  const last = total - 1;
  if (current < max - 3) return [...range(0, max - 3), 'ellipsis', last];
  if (current > last - (max - 3)) return [0, 'ellipsis', ...range(last - (max - 3), last)];
  const start = current - Math.floor((window - 1) / 2);
  return [0, 'ellipsis', ...range(start, start + window - 1), 'ellipsis', last];
}
