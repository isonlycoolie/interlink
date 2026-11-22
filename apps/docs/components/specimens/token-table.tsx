// SPDX-License-Identifier: Apache-2.0
'use client';
import { useMemo, useState } from 'react';
import { allTokens, remToPx } from './tokens-data';

const GROUPS = ['all', 'color', 'elevation', 'space', 'font', 'radius', 'border', 'opacity', 'motion'] as const;
const isColor = (v: string) => /^#|^rgb|^transparent/.test(v);
const shown = (v: string) => (v.length > 48 ? `${v.slice(0, 45)}…` : remToPx(v));

/** Every Interlink token: search, filter by group, compare light and dark values, copy a name. */
export function TokenTable() {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState<(typeof GROUPS)[number]>('all');
  const [copied, setCopied] = useState('');
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allTokens.filter(
      (t) =>
        (group === 'all' || t.name.startsWith(`${group}.`)) &&
        (!q || t.name.includes(q) || t.description.toLowerCase().includes(q) || Object.values(t.values).some((v) => v.toLowerCase().includes(q))),
    );
  }, [query, group]);
  const copy = (name: string) => {
    void navigator.clipboard?.writeText(name);
    setCopied(name);
  };
  return (
    <div className="spec-token-table">
      <div className="spec-token-tools">
        <input type="search" className="spec-token-search" placeholder="Search tokens by name, value or use" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search tokens" />
        <div className="spec-token-groups" role="group" aria-label="Token group">
          {GROUPS.map((g) => (
            <button key={g} type="button" className="spec-token-group il-focusable" aria-pressed={group === g} onClick={() => setGroup(g)}>
              {g}
            </button>
          ))}
        </div>
        <p className="spec-token-count" aria-live="polite">{`${rows.length} tokens`}</p>
      </div>
      <div className="doc-table-wrap">
        <table className="doc-table">
          <thead>
            <tr><th>Token</th><th>Light</th><th>Dark</th><th>Use</th></tr>
          </thead>
          <tbody>
            {rows.slice(0, 300).map((t) => {
              const light = t.values.light ?? t.values.all ?? '';
              const dark = t.values.dark ?? t.values.all ?? '';
              return (
                <tr key={t.name}>
                  <td>
                    <button type="button" className="spec-token-name il-focusable" onClick={() => copy(t.name)} title="Copy token name">
                      <code>{t.name}</code>
                    </button>
                    <div className="spec-token-var">{copied === t.name ? 'Copied' : t.cssVar}</div>
                  </td>
                  {[light, dark].map((v, i) => (
                    <td key={i} className="spec-token-value">
                      {isColor(v) ? <span className="spec-token-swatch" style={{ background: v }} /> : null}
                      <code>{shown(v)}</code>
                    </td>
                  ))}
                  <td className="spec-token-desc">{t.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {rows.length > 300 ? <p className="spec-token-count">Showing the first 300. Search or filter to narrow the list.</p> : null}
    </div>
  );
}
