// SPDX-License-Identifier: Apache-2.0
import CalendarIcon from '@interlink/icons/core/calendar';
import { Avatar } from '@interlink/react/avatar';
import { Lozenge } from '@interlink/react/lozenge';
import { people, type Person } from '../../src/people';
import { AppTile } from '../shared/frame';
import ReleaseIcon from '@interlink/icons/core/release';

const TILES = [
  { n: 2, label: 'On track', change: '+1 from last week', tone: 'success' },
  { n: 1, label: 'At risk', change: '+1 from last week', tone: 'warning' },
  { n: 1, label: 'Off track', change: 'No change', tone: 'danger' },
  { n: 0, label: 'No update', change: 'No change', tone: 'neutral' },
  { n: 0, label: 'Cancelled', change: 'No change', tone: 'neutral' },
  { n: 1, label: 'Completed', change: '+1 from last week', tone: 'information' },
];

/** How the followed projects moved this week: one tile per status, with the change since last week. */
export function Breakdown() {
  return (
    <ul className="scr-breakdown" aria-label="Projects by status">
      {TILES.map((t) => (
        <li key={t.label} data-tone={t.tone}>
          <strong>{t.n}</strong>
          <span>
            <span className="scr-breakdown-label">{t.label}</span>
            <span className="scr-muted">{t.change}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

interface Update {
  project: string;
  color: 'saffron' | 'lime' | 'blue' | 'purple';
  author: Person;
  when: string;
  status: ['On track' | 'At risk' | 'Off track', 'success' | 'warning' | 'danger'];
  lines: string[];
}

const UPDATES: Update[] = [
  { project: 'Kenya payouts launch', color: 'saffron', author: people.amara, when: '3 days ago', status: ['On track', 'success'], lines: ['Twelve beta merchants are live and paid out daily since Monday.', 'Next: open the waitlist to 200 merchants in Mombasa and Kisumu.'] },
  { project: 'Merchant onboarding in a day', color: 'blue', author: people.kwame, when: '4 days ago', status: ['At risk', 'warning'], lines: ['Document checks still take two days for sole traders.', 'We asked the compliance team for a faster review path by Friday.'] },
];

/** Each followed project's latest update: who wrote it, the status they set, and what changed. */
export function Feed() {
  return (
    <div className="scr-feed">
      {UPDATES.map((u) => (
        <section key={u.project} className="scr-update" aria-label={u.project}>
          <div className="scr-update-project">
            <AppTile icon={ReleaseIcon} color={u.color} size="medium" />
            <span>
              <span className="scr-muted">Project</span>
              <strong>{u.project}</strong>
            </span>
          </div>
          <article className="scr-update-card">
            <header>
              <Avatar name={u.author.name} src={u.author.photo} size="medium" />
              <span className="scr-update-who">
                <strong>{u.author.name}</strong>
                <span className="scr-muted">{u.when}</span>
              </span>
              <span className="scr-row">
                <Lozenge appearance={u.status[1]}>{u.status[0]}</Lozenge>
                <span className="scr-muted">for</span>
                <span className="scr-date-chip"><CalendarIcon label="" color="currentColor" size="small" />November</span>
              </span>
            </header>
            {u.lines.map((l) => <p key={l}>{l}</p>)}
          </article>
        </section>
      ))}
    </div>
  );
}
