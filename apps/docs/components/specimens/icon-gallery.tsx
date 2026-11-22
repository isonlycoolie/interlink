// SPDX-License-Identifier: Apache-2.0
'use client';
import * as Icons from '@interlink/icons/core';
import metadata from '@interlink/icons/metadata.json';
import type { ComponentType } from 'react';
import type { IconProps } from '@interlink/icons';
import { useMemo, useState } from 'react';

type Meta = Record<string, { component: string; import: string; category: string; keywords: string[] }>;
const entries = Object.entries(metadata as Meta);
const registry = Icons as unknown as Record<string, ComponentType<IconProps>>;

/** Every icon, searchable by name and keyword. Selecting one shows its import line. */
export function IconGallery() {
  const [query, setQuery] = useState('');
  const [picked, setPicked] = useState<string | null>(null);
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter(([name, m]) => !q || name.includes(q) || m.keywords.some((k) => k.includes(q)));
  }, [query]);
  const chosen = picked ? (metadata as Meta)[picked] : undefined;
  return (
    <div className="spec-icons">
      <input type="search" className="spec-token-search" placeholder="Search icons" aria-label="Search icons" value={query} onChange={(e) => setQuery(e.target.value)} />
      <p className="spec-token-count" aria-live="polite">{`${list.length} icons`}</p>
      {chosen ? <pre className="spec-icon-import"><code>{`import ${chosen.component} from '${chosen.import}';`}</code></pre> : null}
      <div className="spec-icon-grid">
        {list.map(([name, m]) => {
          const Icon = registry[m.component];
          return Icon ? (
            <button key={name} type="button" className="spec-icon il-focusable" aria-pressed={picked === name} onClick={() => setPicked(name)}>
              <Icon label="" />
              <span>{name}</span>
            </button>
          ) : null;
        })}
      </div>
    </div>
  );
}
