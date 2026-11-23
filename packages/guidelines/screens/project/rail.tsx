// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import GoalIcon from '@interlink/icons/core/goal';
import { Avatar, AvatarGroup } from '@interlink/react/avatar';
import { IconButton } from '@interlink/react/button';
import { Lozenge } from '@interlink/react/lozenge';
import { Tag } from '@interlink/react/tag';
import type { ReactNode } from 'react';
import { people } from '../../src/people';

function Property({ title, count, children, canAdd = true }: { title: string; count?: number; children?: ReactNode; canAdd?: boolean }) {
  return (
    <section className="scr-prop">
      <div className="scr-prop-head">
        <h2>
          {title}
          {count ? <span className="scr-prop-count">{count}</span> : null}
        </h2>
        {canAdd ? <IconButton appearance="subtle" spacing="compact" icon={AddIcon} label={`Add to ${title.toLowerCase()}`} /> : null}
      </div>
      {children}
    </section>
  );
}

const person = (p: (typeof people)[keyof typeof people]) => (
  <span className="scr-prop-person">
    <Avatar name={p.name} src={p.photo} size="small" />
    {p.name}
  </span>
);

/** The project's properties on the right: who, what it serves, where its work lives, and when it started. */
export function PropertyRail() {
  const crew = [people.kwame, people.zawadi, people.tunde, people.neema].map((p) => ({ key: p.name, name: p.name, src: p.photo }));
  return (
    <aside className="scr-rail" aria-label="Project details">
      <Property title="Owner" canAdd={false}>{person(people.amara)}</Property>
      <Property title="Contributors" count={3}>
        {person(people.kwame)}
        {person(people.zawadi)}
        {person(people.tunde)}
      </Property>
      <Property title="Followers">
        <AvatarGroup data={crew} size="small" label="Followers" />
      </Property>
      <Property title="Contributes to goals">
        <span className="scr-prop-goal">
          <GoalIcon label="" color="color.icon.success" size="small" />
          Launch mobile-money payouts in Kenya
          <Lozenge appearance="success" trailingMetric="0.7">On track</Lozenge>
        </span>
      </Property>
      <Property title="Related projects" />
      <Property title="Tracker work">
        <a className="scr-prop-link" href="#board">KPL board · 24 work items</a>
      </Property>
      <Property title="Tags">
        <span className="scr-row"><Tag text="payments" /><Tag text="kenya" /><Tag text="q3" /></span>
      </Property>
      <Property title="Start date" canAdd={false}><span className="scr-muted-body">Aug 4, 2026</span></Property>
    </aside>
  );
}
