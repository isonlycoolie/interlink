// SPDX-License-Identifier: Apache-2.0
import { Avatar } from '@interlink/react/avatar';
import { Button } from '@interlink/react/button';
import { DynamicTable } from '@interlink/react/dynamic-table';
import { Link } from '@interlink/react/link';
import { Lozenge } from '@interlink/react/lozenge';
import { ACTIVITY } from './data';

const HEAD = { cells: [{ key: 'date', content: 'Date' }, { key: 'actor', content: 'Actor' }, { key: 'action', content: 'Action', width: 40 }, { key: 'location', content: 'Location' }] };

/** What agents did, and who they did it for. */
export function ActivityLog() {
  const rows = ACTIVITY.map((a) => ({
    key: a.date + a.actor,
    cells: [
      { content: <span className="scr-nowrap">{a.date}</span> },
      { content: (
        <span className="scr-actor">
          <span className="scr-person-name">{a.actor}</span>
          {a.delegatedBy ? (
            <span className="scr-person">
              <Lozenge appearance="discovery">Delegated</Lozenge>
              <Avatar src={a.delegatedBy.photo} name={a.delegatedBy.name} size="xsmall" label="" />
              <span className="scr-muted">by {a.delegatedBy.name}</span>
            </span>
          ) : null}
        </span>
      ) },
      { content: a.action },
      { content: a.location },
    ],
  }));
  return (
    <section className="scr-table-card" aria-labelledby="log-title">
      <div className="scr-table-card-head">
        <h2 id="log-title">Activity log</h2>
        <Button appearance="subtle">Export log</Button>
      </div>
      <DynamicTable head={HEAD} rows={rows} label="Agent activity" />
      <div className="scr-table-foot">
        <p className="scr-muted">Last 24 hours · 1,284 actions</p>
        <Link href="#activity">View all activity</Link>
      </div>
    </section>
  );
}
