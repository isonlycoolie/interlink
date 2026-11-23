// SPDX-License-Identifier: Apache-2.0
'use client';
import ArrowLeftIcon from '@interlink/icons/core/arrow-left';
import ArrowRightIcon from '@interlink/icons/core/arrow-right';
import ReleaseIcon from '@interlink/icons/core/release';
import { Avatar } from '@interlink/react/avatar';
import { Button, IconButton } from '@interlink/react/button';
import { Link } from '@interlink/react/link';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import { people } from '../../src/people';
import { AppFrame, AppTile } from '../shared/frame';
import { ProjectsNav } from '../project/side-nav';
import { Breakdown, Feed } from './feed';

const MINE = [
  ['Kenya payouts launch', 'saffron', '6 followers'],
  ['Agent audit log', 'purple', '3 followers'],
] as const;

/** The weekly catch-up: how followed projects moved, then each project's latest update, with your projects beside it. */
export default function UpdatesScreen() {
  return (
    <AppFrame app={{ name: 'Projects', icon: ReleaseIcon, color: 'ink' }} sideNav={<ProjectsNav current="updates" />}>
      <div className="scr-updates">
        <header className="scr-updates-head">
          <h1 className="scr-title">Status updates</h1>
          <div className="scr-row">
            <Button>Catch up</Button>
            <Button>Write update</Button>
          </div>
        </header>
        <Tabs id="updates-tabs">
          <TabList aria-label="Update feeds">
            <Tab>Following</Tab>
          </TabList>
          <TabPanel>
            <div className="scr-updates-body">
              <div className="scr-updates-main">
                <div className="scr-week">
                  <IconButton icon={ArrowLeftIcon} label="Previous week" />
                  <h2>Last week</h2>
                  <IconButton icon={ArrowRightIcon} label="Next week" isDisabled />
                </div>
                <p className="scr-week-lead">You’re following 5 active projects. Here’s how they moved.</p>
                <Breakdown />
                <Feed />
              </div>
              <aside className="scr-rail scr-updates-rail" aria-label="Your projects">
                <section className="scr-prop">
                  <h2 className="scr-rail-title">Your projects</h2>
                  {MINE.map(([name, color, followers]) => (
                    <span key={name} className="scr-rail-row">
                      <AppTile icon={ReleaseIcon} color={color} />
                      <Link href="#project">{name}</Link>
                      <span className="scr-muted">{followers}</span>
                    </span>
                  ))}
                </section>
                <section className="scr-prop">
                  <h2 className="scr-rail-title">New projects</h2>
                  <span className="scr-rail-row">
                    <AppTile icon={ReleaseIcon} color="lime" />
                    <Link href="#project">Mombasa depot rollout</Link>
                    <Avatar name={people.folake.name} src={people.folake.photo} size="small" />
                  </span>
                </section>
                <section className="scr-prop">
                  <h2 className="scr-rail-title">Completed projects</h2>
                  <span className="scr-rail-row scr-muted-body">No completed projects this week</span>
                </section>
              </aside>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </AppFrame>
  );
}
