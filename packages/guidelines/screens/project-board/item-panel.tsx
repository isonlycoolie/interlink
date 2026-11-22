// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import ChevronUpIcon from '@interlink/icons/core/chevron-up';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import { Avatar } from '@interlink/react/avatar';
import { IconButton } from '@interlink/react/button';
import { Comment, CommentAction, CommentAuthor, CommentTime } from '@interlink/react/comment';
import { Link } from '@interlink/react/link';
import { LozengeDropdownTrigger } from '@interlink/react/lozenge';
import { Panel } from '@interlink/react/navigation-system';
import { SuggestionCard } from '@interlink/react/suggestion-card';
import { useState, type ReactNode } from 'react';
import { people } from '../../src/people';
import { ITEMS, type Item } from './data';

const field = (label: string, value: ReactNode) => (
  <div className="scr-field">
    <dt>{label}</dt>
    <dd>{value}</dd>
  </div>
);

/** Details of one work item beside the board, with an agent's suggestion people can accept. */
export function ItemPanel({ item, onMove, onClose }: { item: Item; onMove: (item: Item) => void; onClose: () => void }) {
  const [accepted, setAccepted] = useState(false);
  const i = ITEMS.findIndex((x) => x.key === item.key);
  const go = (d: number) => {
    const next = ITEMS[(i + d + ITEMS.length) % ITEMS.length];
    if (next) onMove(next);
  };
  return (
    <Panel
      title={item.key}
      subtitle="Payments board"
      onClose={onClose}
      actions={
        <>
          <IconButton appearance="subtle" icon={ChevronUpIcon} label="Previous item" onClick={() => go(-1)} />
          <IconButton appearance="subtle" icon={ChevronDownIcon} label="Next item" onClick={() => go(1)} />
          <IconButton appearance="subtle" icon={MoreIcon} label="More actions" />
        </>
      }
    >
      <h3 className="scr-panel-title">{item.title}</h3>
      <LozengeDropdownTrigger appearance={accepted ? 'success' : 'information'} aria-label={`Status: ${accepted ? 'In review' : item.status}. Change status`}>
        {accepted ? 'In review' : item.status}
      </LozengeDropdownTrigger>
      <dl className="scr-fields">
        {field('Assignee', <span className="scr-person"><Avatar src={item.assignee.photo} name={item.assignee.name} size="xsmall" label="" />{item.assignee.name}</span>)}
        {field('Reporter', <span className="scr-person"><Avatar src={people.amara.photo} name={people.amara.name} size="xsmall" label="" />{people.amara.name}</span>)}
        {field('Priority', <span className="scr-capital">{item.priority}</span>)}
        {field('Sprint', 'Payments sprint 14')}
        {field('Linked', <Link href="#pr-482">Pull request 482</Link>)}
      </dl>
      <SuggestionCard
        title="Move to In review"
        reason="Pull request 482 merged an hour ago and every check passed."
        context={<Link href="#pr-482">Pull request 482</Link>}
        secondaryLabel="Not now"
        onAccept={() => setAccepted(true)}
        acceptedText={accepted ? 'Moved to In review' : undefined}
      />
      <h4 className="scr-panel-sub">Activity</h4>
      <Comment
        avatar={<Avatar src={people.kwame.photo} name={people.kwame.name} size="medium" label="" />}
        author={<CommentAuthor>{people.kwame.name}</CommentAuthor>}
        time={<CommentTime>40 minutes ago</CommentTime>}
        content={<p>Airtel sandbox payouts pass. Waiting on production keys from their team.</p>}
        actions={[<CommentAction key="reply">Reply</CommentAction>, <CommentAction key="like">Like</CommentAction>]}
        headingLevel={5}
      />
    </Panel>
  );
}
