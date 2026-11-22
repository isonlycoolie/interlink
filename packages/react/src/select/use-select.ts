// SPDX-License-Identifier: Apache-2.0
'use client';
import { useState, type KeyboardEvent } from 'react';
import { defaultFilter, defaultLabel, defaultValue, nextEnabled, visibleEntries, type Entry } from './filter';
import type { ActionMeta, CreateOptions, SelectProps } from './select-types';

const toArray = <O>(v: unknown): O[] => (v === null || v === undefined || v === '' ? [] : Array.isArray(v) ? [...v] : [v as O]);

/** State and keyboard behaviour of Select: value, menu, typed text and the active option. */
export function useSelect<O>(p: SelectProps<O> & { create?: CreateOptions }) {
  const label = p.getOptionLabel ?? defaultLabel;
  const valueOf = p.getOptionValue ?? defaultValue;
  const disabled = (o: O) => !!(p.isOptionDisabled?.(o) ?? (o as { isDisabled?: boolean }).isDisabled);
  const [own, setOwn] = useState<O[]>(toArray(p.defaultValue));
  const selected: O[] = p.value !== undefined ? toArray(p.value) : own;
  const [isOpen, setOpen] = useState(!!p.defaultMenuIsOpen);
  const [input, setInput] = useState('');
  const [active, setActive] = useState(0);
  const [message, setMessage] = useState('');
  const isSelected = (o: O) => selected.some((s) => valueOf(s) === valueOf(o));
  const hide = p.hideSelectedOptions ?? !!p.isMulti;
  const filter = p.filterOption === null ? () => true : (o: O) => (p.filterOption ? p.filterOption(o, input) : defaultFilter(label(o), input));
  const entries: Entry<O>[] = visibleEntries(p.options ?? [], input, (o) => !(hide && isSelected(o)) && filter(o));
  const all = (p.options ?? []).flatMap((i) => ('options' in (i as object) ? (i as { options: O[] }).options : [i as O]));
  if (p.create && input.trim() && p.create.isValidNewOption(input, p.options ?? []) && !all.some((o) => label(o).toLowerCase() === input.trim().toLowerCase()))
    entries.push({ option: { label: input, value: input } as O, isNew: true });

  const emit = (next: O[], meta: ActionMeta<O>) => {
    if (p.value === undefined) setOwn(next);
    p.onChange?.(p.isMulti ? next : (next[0] ?? null), meta);
  };
  const open = () => {
    if (isOpen || p.isDisabled) return;
    setOpen(true);
    setActive(Math.max(0, nextEnabled(entries, -1, 1, disabled)));
    p.onMenuOpen?.();
  };
  const close = () => {
    if (!isOpen) return;
    setOpen(false);
    p.onMenuClose?.();
  };
  const choose = (entry: Entry<O> | undefined) => {
    if (!entry || (!entry.isNew && disabled(entry.option))) return;
    if (entry.isNew) p.create?.onCreate(input.trim());
    else if (p.isMulti && isSelected(entry.option)) emit(selected.filter((s) => valueOf(s) !== valueOf(entry.option)), { action: 'deselect-option', option: entry.option });
    else emit(p.isMulti ? [...selected, entry.option] : [entry.option], { action: 'select-option', option: entry.option });
    setMessage(`${entry.isNew ? input.trim() : label(entry.option)}, selected.`);
    setInput('');
    p.onInputChange?.('');
    if (p.closeMenuOnSelect ?? !p.isMulti) close();
  };
  const remove = (o: O, action: 'remove-value' | 'pop-value' = 'remove-value') => {
    emit(selected.filter((s) => valueOf(s) !== valueOf(o)), { action, removedValue: o });
    setMessage(`${label(o)}, removed.`);
  };
  const clear = () => {
    emit([], { action: 'clear' });
    setMessage('All values cleared.');
  };
  const changeInput = (v: string) => {
    setInput(v);
    setActive(0);
    p.onInputChange?.(v);
    if (!isOpen) open();
  };
  const move = (step: 1 | -1) => setActive((a) => Math.max(0, nextEnabled(entries, a, step, disabled)));

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (p.isDisabled) return;
    const k = e.key;
    if (k === 'ArrowDown' || k === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) open();
      else move(k === 'ArrowDown' ? 1 : -1);
    } else if (k === 'Enter' && isOpen) {
      e.preventDefault();
      choose(entries[active]);
    } else if (k === 'Tab' && isOpen && !p.isMulti && input) choose(entries[active]);
    else if (k === ' ' && (!p.isSearchable || !input)) {
      if (!isOpen) {
        e.preventDefault();
        open();
      } else if (p.isSearchable === false) {
        e.preventDefault();
        choose(entries[active]);
      }
    } else if (k === 'Backspace' && !input && selected.length && (p.isMulti || p.isClearable)) remove(selected[selected.length - 1] as O, 'pop-value');
  };
  return { label, valueOf, disabled, selected, isSelected, isOpen, open, close, input, changeInput, setInput, entries, active, setActive, choose, remove, clear, onKeyDown, message };
}
