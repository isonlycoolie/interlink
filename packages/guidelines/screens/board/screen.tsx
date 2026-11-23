// SPDX-License-Identifier: Apache-2.0
'use client';
import BoardIcon from '@interlink/icons/core/board';
import CollapseIcon from '@interlink/icons/core/chevron-left';
import FilterIcon from '@interlink/icons/core/filter';
import GlobeIcon from '@interlink/icons/core/globe';
import LayersIcon from '@interlink/icons/core/boards';
import ListIcon from '@interlink/icons/core/list-bulleted';
import PagesIcon from '@interlink/icons/core/pages';
import ReleaseIcon from '@interlink/icons/core/release';
import SearchIcon from '@interlink/icons/core/search';
import CalendarIcon from '@interlink/icons/core/calendar';
import { AgentSession } from '@interlink/react/agent-session';
import { Avatar } from '@interlink/react/avatar';
import { Button, IconButton } from '@interlink/react/button';
import { TextField } from '@interlink/react/textfield';
import { people } from '../../src/people';
import { AppFrame, AppTile } from '../shared/frame';
import { AgentFace, WorkCard } from './card';
import { LANES, UNLINKED } from './data';
import { TrackerNav } from './side-nav';

const VIEWS = [['Summary', GlobeIcon], ['Board', BoardIcon], ['List', ListIcon], ['Pages', PagesIcon], ['Calendar', CalendarIcon]] as const;
const CREW = [people.tunde, people.imani, people.sipho, people.kwame, people.neema];

/** A sprint board where people and agents share the work: agent runs sit on their cards, unlinked runs in their own lane. */
export default function BoardScreen() {
  return (
    <AppFrame app={{ name: 'Tracker', icon: BoardIcon, color: 'blue' }} sideNav={<TrackerNav />}>
      <div className="scr-board">
        <p className="scr-muted-body">Spaces</p>
        <h1 className="scr-project-title"><AppTile icon={ReleaseIcon} color="saffron" size="large" />Kenya payouts</h1>
        <nav className="scr-views" aria-label="Views">
          {VIEWS.map(([v, Icon]) => <a key={v} href={`#${v.toLowerCase()}`} aria-current={v === 'Board' ? 'page' : undefined}><Icon label="" color="currentColor" size="small" />{v}</a>)}
        </nav>
        <div className="scr-board-bar">
          <TextField aria-label="Search board" placeholder="Search board" width="small" elemBeforeInput={<span className="scr-field-icon"><SearchIcon label="" color="color.icon.subtle" size="small" /></span>} />
          <span className="scr-people-filter" role="group" aria-label="Filter by person or agent">
            {CREW.map((p) => <Avatar key={p.name} name={p.name} src={p.photo} size="small" onClick={() => {}} />)}
            <AgentFace agent="builder" person={people.imani} />
            <AgentFace agent="guard" person={people.sipho} />
          </span>
          <Button iconBefore={FilterIcon}>Filter</Button>
          <Button iconBefore={LayersIcon}>Group</Button>
          <Button>Needs input</Button>
        </div>
        <div className="scr-lanes">
          <section className="scr-lane scr-lane-sessions" aria-labelledby="lane-unlinked">
            <header><h2 id="lane-unlinked">Unlinked agent sessions <span>{UNLINKED.length}</span></h2><IconButton appearance="subtle" spacing="compact" icon={CollapseIcon} label="Collapse lane" /></header>
            {UNLINKED.map((s) => (
              <AgentSession key={s.change} layout="row" avatar={<AgentFace agent={s.agent} person={s.for} size="medium" />} status={s.status} title={s.title} meta={`${s.change} · ${s.when}`} href={`#${s.change}`} />
            ))}
          </section>
          {LANES.map((l) => (
            <section key={l.title} className="scr-lane" aria-labelledby={`lane-${l.title}`}>
              <header><h2 id={`lane-${l.title}`}>{l.title} <span>{l.items.length}</span></h2></header>
              {l.items.map((i) => <WorkCard key={i.key} item={i} />)}
            </section>
          ))}
        </div>
      </div>
    </AppFrame>
  );
}
