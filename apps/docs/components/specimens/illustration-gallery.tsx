// SPDX-License-Identifier: Apache-2.0
'use client';
import { catalog, groups, pascal, type IllustrationGroup } from '@interlink/illustrations';
import { illustrations } from '@interlink/illustrations/all';
import { useMemo, useState } from 'react';

const GROUPS: (IllustrationGroup | 'All')[] = ['All', ...groups];
const count = (g: IllustrationGroup | 'All') => (g === 'All' ? catalog.length : catalog.filter((c) => c.group === g).length);
/** Palettes to try: the default, and three recolours a product might pass in. */
const PALETTES = {
  Interlink: undefined,
  Ocean: { primary: 'var(--il-chart-blue-bolder)', secondary: 'var(--il-chart-teal-bold)', tertiary: 'var(--il-chart-yellow-bold)', quaternary: 'var(--il-chart-green-bold)' },
  Forest: { primary: 'var(--il-chart-green-bolder)', secondary: 'var(--il-chart-lime-bold)', tertiary: 'var(--il-chart-orange-bold)', quaternary: 'var(--il-chart-teal-bold)' },
  Sunset: { primary: 'var(--il-chart-magenta-bolder)', secondary: 'var(--il-chart-orange-bold)', tertiary: 'var(--il-chart-yellow-bold)', quaternary: 'var(--il-chart-red-bold)' },
} as const;

/** Every illustration, searchable, filterable by group and recolourable. Selecting one shows its import line. */
export function IllustrationGallery() {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState<(typeof GROUPS)[number]>('All');
  const [palette, setPalette] = useState<keyof typeof PALETTES>('Interlink');
  const [picked, setPicked] = useState<string | null>(null);
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalog.filter((c) => (group === 'All' || c.group === group) && (!q || c.slug.includes(q) || c.meaning.toLowerCase().includes(q) || c.keywords.some((k) => k.includes(q))));
  }, [query, group]);
  return (
    <div className="spec-illos">
      <div className="spec-token-tools">
        <input type="search" className="spec-token-search" placeholder="Search illustrations" aria-label="Search illustrations" value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="spec-token-groups" role="group" aria-label="Group">
          {GROUPS.map((g) => (
            <button key={g} type="button" className="spec-token-group il-focusable" aria-pressed={group === g} onClick={() => setGroup(g)}>
              {g} <span className="spec-group-count">{count(g)}</span>
            </button>
          ))}
        </div>
        <div className="spec-token-groups" role="group" aria-label="Palette">
          {(Object.keys(PALETTES) as (keyof typeof PALETTES)[]).map((p) => (
            <button key={p} type="button" className="spec-token-group il-focusable" aria-pressed={palette === p} onClick={() => setPalette(p)}>
              {p}
            </button>
          ))}
        </div>
        <p className="spec-token-count" aria-live="polite">{`${list.length} illustrations`}</p>
      </div>
      {picked ? <pre className="spec-icon-import"><code>{`import ${pascal(picked)} from '@interlink/illustrations/art/${picked}';`}</code></pre> : null}
      <div className="spec-illo-grid">
        {list.map((c) => {
          const Art = illustrations[c.slug];
          return Art ? (
            <button key={c.slug} type="button" className="spec-illo il-focusable" data-hero={c.hero || undefined} aria-pressed={picked === c.slug} onClick={() => setPicked(c.slug)}>
              <span className="spec-illo-stage">
                <Art size={c.hero ? 88 : 96} colors={PALETTES[palette]} />
              </span>
              <span className="spec-illo-name">{pascal(c.slug)}</span>
              <span className="spec-illo-meaning">{c.meaning}</span>
            </button>
          ) : null;
        })}
      </div>
    </div>
  );
}
