// SPDX-License-Identifier: Apache-2.0
'use client';
import AutomationIcon from '@interlink/icons/core/automation';
import ChartIcon from '@interlink/icons/core/chart-bar';
import EmailIcon from '@interlink/icons/core/email';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import SearchIcon from '@interlink/icons/core/search';
import ShieldIcon from '@interlink/icons/core/shield';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { DynamicTable } from '@interlink/react/dynamic-table';
import { Lozenge } from '@interlink/react/lozenge';
import { Pagination } from '@interlink/react/pagination';
import { useState } from 'react';
import { IDENTITIES } from './data';

const GLYPH = { roadmap: RoadmapIcon, automation: AutomationIcon, shield: ShieldIcon, search: SearchIcon, chart: ChartIcon, email: EmailIcon };
const STATUS = { Active: 'success', Paused: 'neutral', Blocked: 'danger' } as const;
const PER_PAGE = 6;
const HEAD = {
  cells: [
    { key: 'name', content: 'Name', isSortable: true, width: 30 },
    { key: 'status', content: 'Status', isSortable: true },
    { key: 'mode', content: 'Mode' },
    { key: 'actor', content: 'Actor type' },
    { key: 'apps', content: 'Apps', isSortable: true },
    { key: 'last', content: 'Last active' },
  ],
};

/** Agents and service accounts with access, paged in a footer that belongs to the table. */
export function Identities() {
  const [page, setPage] = useState(0);
  const shown = IDENTITIES.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const rows = shown.map((a) => ({
    key: a.name,
    cells: [
      { key: a.name, content: (
        <span className="scr-person">
          <AgentAvatar name={a.name} icon={GLYPH[a.glyph]} color={a.color} size="small" label="" />
          <span className="scr-person-text">
            <span className="scr-person-name">{a.name}</span>
            <span className="scr-muted">Owner: {a.owner.name}</span>
          </span>
        </span>
      ) },
      { key: a.status, content: <Lozenge appearance={STATUS[a.status]}>{a.status}</Lozenge> },
      { key: a.mode, content: a.mode },
      { key: a.actor, content: a.actor },
      { key: a.apps, content: String(a.apps) },
      { key: a.lastActive, content: a.lastActive },
    ],
  }));
  const from = page * PER_PAGE + 1;
  return (
    <section className="scr-table-card" aria-labelledby="ids-title">
      <div className="scr-table-card-head">
        <h2 id="ids-title">Agents and service accounts</h2>
        <span className="scr-muted">{IDENTITIES.filter((a) => a.status === 'Active').length} active</span>
      </div>
      <DynamicTable head={HEAD} rows={rows} label="Agents and service accounts" />
      <div className="scr-table-foot">
        <p className="scr-muted">
          Showing {from}–{from + shown.length - 1} of {IDENTITIES.length}
        </p>
        <Pagination pages={[1, 2]} selectedIndex={page} onChange={(_, p) => setPage(p - 1)} label="Agents pages" />
      </div>
    </section>
  );
}
