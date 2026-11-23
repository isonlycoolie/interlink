// SPDX-License-Identifier: Apache-2.0
'use client';
import LinkIcon from '@interlink/icons/core/link';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import PagesIcon from '@interlink/icons/core/pages';
import { AvatarGroup } from '@interlink/react/avatar';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button, IconButton } from '@interlink/react/button';
import { people } from '../../src/people';
import { AppChrome, avatars } from '../shared/chrome';
import { Goals, Timeline } from './plan';
import { SpaceNav } from './side-nav';
import { KeyPages, MeetTheTeam } from './team';

const product = { name: 'Lumen Docs', icon: PagesIcon, color: 'blue' as const };
const mention = (name: string, color: string) => (
  <span className="scr-mention" data-color={color}>
    @{name}
  </span>
);

/** A team space page: the doc tree on the left, a live page with people and an agent working on it. */
export default function TeamSpaceScreen() {
  return (
    <AppChrome product={product} sideNav={<SpaceNav />} mainWidth="fixed">
      <article className="scr-doc" aria-labelledby="doc-title">
        <div className="scr-doc-bar">
          <Breadcrumbs>
            <BreadcrumbsItem text="Launch Hub" href="#overview" />
            <BreadcrumbsItem text="Plans" href="#plans" />
          </Breadcrumbs>
          <div className="scr-row">
            <AvatarGroup data={avatars()} size="small" maxCount={4} label="Editing now" />
            <Button appearance="primary">Update</Button>
            <Button>Share</Button>
            <IconButton icon={LinkIcon} label="Copy link" />
            <IconButton appearance="subtle" icon={MoreIcon} label="More actions" />
          </div>
        </div>
        <img className="scr-doc-banner" src="/photos/scenes/team-review.webp" alt="" />
        <h1 id="doc-title" className="scr-doc-title">
          Q3 launch: Kenya
        </h1>
        <p className="scr-muted">Owned by {people.amara.name} · Updated 2 hours ago · 6 min read</p>
        <p className="scr-doc-lead">
          We launch mobile-money payouts in Nairobi on 2 September. {mention('Kwame Mensah', 'blue')} leads engineering, {mention('Zawadi Mushi', 'purple')} owns the
          checkout design, {mention('Neema Kileo', 'lime')} signs off pricing, and {mention('Tunde Bakare', 'saffron')} runs the beta with twelve merchants.
        </p>
        <Goals />
        <Timeline />
        <MeetTheTeam />
        <KeyPages />
      </article>
    </AppChrome>
  );
}
