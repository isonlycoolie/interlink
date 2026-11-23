// SPDX-License-Identifier: Apache-2.0
import ArrowRightIcon from '@interlink/icons/core/arrow-right';
import BoardIcon from '@interlink/icons/core/board';
import PagesIcon from '@interlink/icons/core/pages';
import VideoIcon from '@interlink/icons/core/video';
import { Avatar } from '@interlink/react/avatar';
import { people, type Person } from '../../src/people';
import { AppTile } from '../shared/frame';

const RECENT = [
  { icon: PagesIcon, color: 'blue', title: 'Q3 launch plan: Kenya', meta: ['Page', 'Docs', 'Payments'], when: 'Just now' },
  { icon: BoardIcon, color: 'lime', title: 'KPL board', meta: ['Board', 'Tracker', 'Kenya payouts'], when: '2 hours ago' },
  { icon: VideoIcon, color: 'purple', title: 'Pricing walkthrough for finance', meta: ['Video', '4 min', 'Neema Kileo'], when: 'Yesterday' },
] as const;

/** What this person touched last, newest first, with where it lives. */
export function RecentWork() {
  return (
    <section className="scr-about">
      <h2>Recent work</h2>
      <ul className="scr-recent">
        {RECENT.map((r) => (
          <li key={r.title}>
            <AppTile icon={r.icon} color={r.color} size="large" />
            <span className="scr-recent-text">
              <a href="#item">{r.title}</a>
              <span className="scr-muted">{r.meta.join(' • ')}</span>
            </span>
            <span className="scr-muted-body">{r.when}</span>
          </li>
        ))}
      </ul>
      <a className="scr-link-arrow scr-see-all" href="#recent">See all recent work <ArrowRightIcon label="" color="currentColor" size="small" /></a>
    </section>
  );
}

const face = (p: Person, ring: string) => (
  <span className="scr-tree-face" data-ring={ring}>
    <Avatar name={p.name} src={p.photo} size="large" />
  </span>
);

/** Who this person reports to and who reports to them, drawn as a small tree. */
export function ReportingLine() {
  return (
    <section className="scr-about">
      <h2>Reporting line</h2>
      <div className="scr-tree">
        <div className="scr-tree-top">
          {face(people.kofi, 'saffron')}
          <span className="scr-tree-name"><strong>{people.kofi.name}</strong>{people.kofi.role}</span>
        </div>
        <svg className="scr-tree-lines" viewBox="0 0 240 40" aria-hidden="true">
          <path d="M120 0 V 16 M40 40 V 28 Q 40 16 52 16 H 188 Q 200 16 200 28 V 40 M120 16 V 40" />
        </svg>
        <div className="scr-tree-row">
          {face(people.kwame, 'blue')}
          {face(people.amara, 'lime')}
          {face(people.neema, 'purple')}
        </div>
      </div>
    </section>
  );
}
