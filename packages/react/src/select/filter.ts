// SPDX-License-Identifier: Apache-2.0
import type { GroupType, Options } from './select-types';

export interface Entry<O> {
  option: O;
  group?: GroupType<O>;
  /** The "Create …" row of CreatableSelect. */
  isNew?: boolean;
}

export const isGroup = <O>(item: O | GroupType<O>): item is GroupType<O> => typeof item === 'object' && item !== null && 'options' in item && Array.isArray((item as GroupType<O>).options);

/** Default label and value readers for { label, value } options. */
export const defaultLabel = (o: unknown) => String((o as { label?: unknown }).label ?? '');
export const defaultValue = (o: unknown) => String((o as { value?: unknown }).value ?? '');
/** Case-insensitive match on the label, ignoring accents. */
const fold = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
export const defaultFilter = (label: string, input: string) => fold(label).includes(fold(input));

/** Flatten groups into menu entries, keeping each entry's group and dropping filtered and hidden options. */
export function visibleEntries<O>(options: Options<O>, input: string, keep: (option: O) => boolean): Entry<O>[] {
  const out: Entry<O>[] = [];
  for (const item of options) {
    if (isGroup(item)) for (const option of item.options) keep(option) && out.push({ option, group: item });
    else if (keep(item)) out.push({ option: item });
  }
  return out;
}

/** Split entries into runs that share a group, for rendering group headings. */
export function byGroup<O>(entries: Entry<O>[]) {
  const runs: { group?: GroupType<O>; items: { entry: Entry<O>; index: number }[] }[] = [];
  entries.forEach((entry, index) => {
    const lastRun = runs[runs.length - 1];
    if (lastRun && lastRun.group === entry.group) lastRun.items.push({ entry, index });
    else runs.push({ group: entry.group, items: [{ entry, index }] });
  });
  return runs;
}

/** Index of the next enabled entry from `from` in direction `step`, wrapping; -1 when none. */
export function nextEnabled<O>(entries: Entry<O>[], from: number, step: 1 | -1, disabled: (o: O) => boolean) {
  for (let k = 1; k <= entries.length; k++) {
    const i = (from + step * k + entries.length * 2) % entries.length;
    const e = entries[i];
    if (e && (e.isNew || !disabled(e.option))) return i;
  }
  return -1;
}
