// SPDX-License-Identifier: Apache-2.0
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import CommentIcon from '@interlink/icons/core/comment';
import EmojiIcon from '@interlink/icons/core/emoji';
import EyeIcon from '@interlink/icons/core/eye-open';
import { Avatar } from '@interlink/react/avatar';
import { Checkbox } from '@interlink/react/checkbox';
import { people, type Person } from '../../src/people';

interface Clip {
  id: string;
  title: string;
  by: Person;
  age: string;
  length: string;
  thumb: string;
  wide?: boolean;
  stats: [number, number, number];
}

export const CLIPS: Clip[] = [
  { id: 'v1', title: 'Payout flow walkthrough for the beta merchants', by: people.amara, age: '2 days', length: '4 min', thumb: people.amara.photo, stats: [38, 6, 12] },
  { id: 'v2', title: 'Pricing for TZS and KES, explained', by: people.neema, age: '3 days', length: '6 min', thumb: people.neema.photo, stats: [54, 9, 7] },
  { id: 'v3', title: 'Sprint 14 demo: checkout on mobile', by: people.tunde, age: '1 week', length: '12 min', thumb: '/photos/scenes/team-review.webp', wide: true, stats: [112, 21, 30] },
  { id: 'v4', title: 'How the audit log blocks risky shares', by: people.sipho, age: '1 week', length: '3 min', thumb: people.sipho.photo, stats: [27, 2, 4] },
  { id: 'v5', title: 'Depot rollout: what changed in Mombasa', by: people.folake, age: '2 weeks', length: '8 min', thumb: '/photos/scenes/team-meeting.webp', wide: true, stats: [64, 11, 15] },
  { id: 'v6', title: 'Support playbook for failed payouts', by: people.wanjiru, age: '3 weeks', length: '5 min', thumb: people.wanjiru.photo, stats: [41, 3, 9] },
];

/** One recording: thumbnail with its length, who made it and where it is shared, the title and its reactions. */
export function VideoCard({ clip, selected, onSelect }: { clip: Clip; selected: boolean; onSelect: () => void }) {
  return (
    <article className="scr-clip" data-selected={selected || undefined}>
      <div className="scr-clip-thumb" data-wide={clip.wide || undefined}>
        <img src={clip.thumb} alt="" />
        <span className="scr-clip-length">{clip.length}</span>
        <span className="scr-clip-check"><Checkbox label={`Select ${clip.title}`} isChecked={selected} onChange={onSelect} /></span>
      </div>
      <div className="scr-clip-body">
        <div className="scr-clip-by">
          <Avatar name={clip.by.name} src={clip.by.photo} size="medium" />
          <span>
            <span><strong>{clip.by.name}</strong> <span className="scr-muted">· {clip.age}</span></span>
            <button type="button" className="scr-clip-share">Share to spaces <ChevronDownIcon label="" color="currentColor" size="small" /></button>
          </span>
        </div>
        <h3><a href={`#${clip.id}`}>{clip.title}</a></h3>
        <p className="scr-clip-stats">
          <span><EyeIcon label="Views" color="currentColor" size="small" />{clip.stats[0]}</span>
          <span><CommentIcon label="Comments" color="currentColor" size="small" />{clip.stats[1]}</span>
          <span><EmojiIcon label="Reactions" color="currentColor" size="small" />{clip.stats[2]}</span>
        </p>
      </div>
    </article>
  );
}
