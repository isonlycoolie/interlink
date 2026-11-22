// SPDX-License-Identifier: Apache-2.0
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Elements inside root that take keyboard focus, in DOM order. */
export const focusables = (root: HTMLElement | null) => (root ? [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => !el.closest('[inert]')) : []);
export const firstFocusable = (root: HTMLElement | null) => focusables(root)[0] ?? null;

export type ArrowKeys = 'vertical' | 'horizontal';

/** Next index for arrow, Home and End keys, wrapping at the ends; null for any other key. */
export function nextIndex(key: string, current: number, count: number, orientation: ArrowKeys = 'vertical'): number | null {
  if (count === 0) return null;
  const [back, forward] = orientation === 'vertical' ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
  if (key === forward) return (current + 1 + count) % count;
  if (key === back) return (current - 1 + count) % count;
  if (key === 'Home') return 0;
  if (key === 'End') return count - 1;
  return null;
}

/** Index of the first item after current whose text starts with what has been typed in the last half second. */
export function createTypeahead() {
  let typed = '';
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (char: string, labels: string[], current: number) => {
    clearTimeout(timer);
    typed += char.toLowerCase();
    timer = setTimeout(() => (typed = ''), 500);
    const order = labels.map((_, i) => (current + 1 + i) % labels.length);
    const hit = order.find((i) => labels[i]?.trim().toLowerCase().startsWith(typed));
    return hit ?? -1;
  };
}

/** Roving focus over a list of items: arrows, Home, End and type-ahead. Returns true when the key was handled. */
export function rove(e: { key: string; preventDefault: () => void }, items: HTMLElement[], typeahead: ReturnType<typeof createTypeahead>, orientation: ArrowKeys = 'vertical') {
  const current = items.indexOf(document.activeElement as HTMLElement);
  let next = nextIndex(e.key, current, items.length, orientation);
  if (next === null && e.key.length === 1 && e.key !== ' ') {
    const hit = typeahead(e.key, items.map((el) => el.textContent ?? ''), current);
    next = hit >= 0 ? hit : null;
  }
  if (next === null) return false;
  e.preventDefault();
  items[next]?.focus();
  return true;
}
