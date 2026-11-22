// SPDX-License-Identifier: Apache-2.0
'use client';
import SearchIcon from '@interlink/icons/core/search';
import { staticClient } from 'fumadocs-core/search/client/orama-static';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

interface Result {
  id: string;
  url: string;
  type: 'page' | 'heading' | 'text';
  content: string;
}

/** Command-K search over the static index. Opens from the header button or Ctrl/Cmd+K. */
export function SearchDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const client = useMemo(() => staticClient({ from: '/api/search' }), []);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const open = () => {
      dialog.current?.showModal();
      input.current?.focus();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        open();
      }
    };
    const triggers = document.querySelectorAll('[data-search-trigger]');
    triggers.forEach((t) => t.addEventListener('click', open));
    window.addEventListener('keydown', onKey);
    return () => {
      triggers.forEach((t) => t.removeEventListener('click', open));
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    let live = true;
    if (!query.trim()) return setResults([]);
    Promise.resolve(client.search(query)).then((r) => {
      if (live) {
        setResults((r as Result[]).filter((x) => !x.content.trim().startsWith("<")).slice(0, 12));
        setActive(0);
      }
    });
    return () => {
      live = false;
    };
  }, [client, query]);

  const go = (r?: Result) => {
    if (!r) return;
    dialog.current?.close();
    setQuery('');
    router.push(r.url);
  };

  return (
    <dialog ref={dialog} className="site-search" aria-label="Search documentation" onClick={(e) => e.target === dialog.current && dialog.current?.close()}>
      <div className="site-search-field">
        <SearchIcon label="" color="color.icon.subtle" />
        <input
          ref={input}
          type="search"
          placeholder="Search Interlink"
          value={query}
          aria-controls="site-search-results"
          aria-activedescendant={results[active] ? `sr-${active}` : undefined}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') setActive((a) => Math.min(a + 1, results.length - 1));
            else if (e.key === 'ArrowUp') setActive((a) => Math.max(a - 1, 0));
            else if (e.key === 'Enter') go(results[active]);
            else return;
            e.preventDefault();
          }}
        />
      </div>
      <ul id="site-search-results" role="listbox" className="site-search-results">
        {results.map((r, i) => (
          <li key={r.id} id={`sr-${i}`} role="option" aria-selected={i === active} data-type={r.type} onMouseEnter={() => setActive(i)} onClick={() => go(r)}>
            {r.content}
          </li>
        ))}
        {query && results.length === 0 ? <li className="site-search-empty">No results for “{query}”.</li> : null}
      </ul>
    </dialog>
  );
}
