// SPDX-License-Identifier: Apache-2.0
'use client';
import CalendarIcon from '@interlink/icons/core/calendar';
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import GoalIcon from '@interlink/icons/core/goal';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import { Avatar } from '@interlink/react/avatar';
import { Button, IconButton } from '@interlink/react/button';
import { DynamicTable } from '@interlink/react/dynamic-table';
import { Lozenge } from '@interlink/react/lozenge';
import { useState } from 'react';
import { GOALS, STATUS } from './data';

/** The goal list: name with its sub-goals, status with score, target date, owner, following and last update. */
export function GoalTable() {
  const [following, setFollowing] = useState(() => new Set(GOALS.filter((g) => g.following).map((g) => g.id)));
  const toggle = (id: string) => setFollowing((s) => (s.has(id) ? (s.delete(id), new Set(s)) : new Set(s.add(id))));
  return (
    <DynamicTable
      label="Goals"
      isFixedSize
      head={{
        cells: [
          { key: 'name', content: 'Name', width: 40 },
          { key: 'status', content: 'Status', width: 13 },
          { key: 'target', content: 'Target date', width: 11 },
          { key: 'owner', content: 'Owner', width: 7 },
          { key: 'following', content: 'Following', width: 12 },
          { key: 'updated', content: 'Last updated', width: 13 },
          { key: 'more', content: <span className="il-visually-hidden">Actions</span>, width: 4 },
        ],
      }}
      rows={GOALS.map((g) => ({
        key: g.id,
        cells: [
          {
            key: g.name,
            content: (
              <span className="scr-goal-name">
                {g.subGoals ? <IconButton appearance="subtle" spacing="compact" icon={ChevronRightIcon} label={`Show ${g.subGoals} sub-goals of ${g.name}`} /> : <span className="scr-goal-indent" />}
                <span className="scr-goal-icon" data-status={g.status}>
                  <GoalIcon label="" color="currentColor" />
                </span>
                <a href={`#${g.id}`}>{g.name}</a>
              </span>
            ),
          },
          { key: g.status, content: <Lozenge appearance={STATUS[g.status].appearance} trailingMetric={g.score}>{STATUS[g.status].label}</Lozenge> },
          { key: g.target, content: <span className="scr-date-chip"><CalendarIcon label="" color="currentColor" size="small" />{g.target}</span> },
          { content: <Avatar name={g.owner.name} src={g.owner.photo} size="small" label={`Owner: ${g.owner.name}`} /> },
          { content: <Button spacing="compact" onClick={() => toggle(g.id)}>{following.has(g.id) ? 'Following' : 'Follow'}</Button> },
          { key: g.updated, content: <span className="scr-muted-body">{g.updated}</span> },
          { content: <IconButton appearance="subtle" spacing="compact" icon={MoreIcon} label={`More actions for ${g.name}`} /> },
        ],
      }))}
    />
  );
}
