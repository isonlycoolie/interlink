// SPDX-License-Identifier: Apache-2.0
'use client';
import CrossIcon from '@interlink/icons/core/cross';
import EditIcon from '@interlink/icons/core/edit';
import LinkIcon from '@interlink/icons/core/link';
import LockIcon from '@interlink/icons/core/lock-locked';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import ReleaseIcon from '@interlink/icons/core/release';
import { Avatar } from '@interlink/react/avatar';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button, IconButton } from '@interlink/react/button';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import { TextField } from '@interlink/react/textfield';
import { useState } from 'react';
import { people } from '../../src/people';
import { AppFrame, AppTile } from '../shared/frame';
import { PropertyRail } from './rail';
import { ProjectsNav } from './side-nav';
import { StatusMenu } from './status-menu';

const ABOUT = [
  ['What we’re doing', 'Mobile-money payouts for merchants in Nairobi. Twelve beta merchants first, then every Kenyan account by December.'],
  ['Why we’re doing it', 'Card settlements take three days. Mobile money lands in minutes, and four in five Kenyan merchants asked for it.'],
  ['How we’ll know we’re successful', 'Beta merchants paid out daily for a month, payout failures under 0.5%, and 1,000 merchants switched on by December.'],
];

/** A project's About page: the why behind the work, a place to discuss it, and its properties beside it. */
export default function ProjectScreen() {
  const [hint, setHint] = useState(true);
  return (
    <AppFrame app={{ name: 'Projects', icon: ReleaseIcon, color: 'ink' }} sideNav={<ProjectsNav />}>
      <div className="scr-project">
        <header className="scr-project-head">
          <div>
            <Breadcrumbs>
              <BreadcrumbsItem text="Projects" href="#projects" />
              <BreadcrumbsItem text="KPL-12" href="#kpl-12" />
            </Breadcrumbs>
            <h1 className="scr-project-title"><AppTile icon={ReleaseIcon} color="saffron" size="large" />Kenya payouts launch</h1>
          </div>
          <div className="scr-row">
            <StatusMenu />
            <Button>Following</Button>
            <Button iconBefore={LockIcon}>Share</Button>
            <IconButton appearance="subtle" icon={LinkIcon} label="Copy link" />
            <IconButton appearance="subtle" icon={MoreIcon} label="More actions" />
          </div>
        </header>
        <Tabs id="project-tabs">
          <TabList aria-label="Project sections">
            {['About', 'Updates', 'Learnings', 'Risks', 'Decisions'].map((t) => <Tab key={t}>{t}</Tab>)}
          </TabList>
          <TabPanel>
            <div className="scr-project-body">
              <article className="scr-project-main">
                {hint ? (
                  <p className="scr-hint">
                    Share the context behind a project so teams understand what the work is about. <a href="#examples">See examples</a>
                    <IconButton appearance="subtle" spacing="compact" icon={CrossIcon} label="Dismiss" onClick={() => setHint(false)} />
                  </p>
                ) : null}
                {ABOUT.map(([title, text], i) => (
                  <section key={title} className="scr-about">
                    <h2>{title}{i === 1 ? <Button appearance="subtle" spacing="compact" iconBefore={EditIcon}>Edit</Button> : null}</h2>
                    <p>{text}</p>
                  </section>
                ))}
                <section className="scr-about">
                  <h2>Comments</h2>
                  <div className="scr-comment-box">
                    <Avatar name={people.amara.name} src={people.amara.photo} size="small" />
                    <TextField aria-label="Add a comment" placeholder="Add a comment… ask a question" appearance="subtle" />
                  </div>
                </section>
              </article>
              <PropertyRail />
            </div>
          </TabPanel>
          {['Updates', 'Learnings', 'Risks', 'Decisions'].map((t) => <TabPanel key={t}><p className="scr-muted-body scr-project-empty">{t} will appear here.</p></TabPanel>)}
        </Tabs>
      </div>
    </AppFrame>
  );
}
