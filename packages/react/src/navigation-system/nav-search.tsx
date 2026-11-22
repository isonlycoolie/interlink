// SPDX-License-Identifier: Apache-2.0
'use client';
import SearchIcon from '@interlink/icons/core/search';
import { useId, useState, type FormEvent } from 'react';

export interface NavSearchProps {
  placeholder?: string;
  /** Accessible name of the field. */
  label?: string;
  /** A keyboard shortcut hint shown at the end, such as "/". */
  shortcut?: string;
  /** Called with the text when people press Enter. */
  onSubmit?: (query: string) => void;
  /** Called on focus, for example to open a search dialog with recent items. */
  onFocus?: () => void;
}

/** The search field in the top bar. It sits in the middle and grows to fill it. */
export function NavSearch({ placeholder = 'Search', label = 'Search', shortcut, onSubmit, onFocus }: NavSearchProps) {
  const id = useId();
  const [q, setQ] = useState('');
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(q);
  };
  return (
    <form role="search" className="il-ns-search" onSubmit={submit}>
      <label htmlFor={id} className="il-visually-hidden">
        {label}
      </label>
      <SearchIcon label="" color="color.icon.subtle" />
      <input id={id} type="search" placeholder={placeholder} value={q} onChange={(e) => setQ(e.target.value)} onFocus={onFocus} />
      {shortcut ? (
        <kbd className="il-ns-search-key" aria-hidden="true">
          {shortcut}
        </kbd>
      ) : null}
    </form>
  );
}
