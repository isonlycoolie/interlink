// SPDX-License-Identifier: Apache-2.0
'use client';
import TeamsIcon from '@interlink/icons/core/teams';
import { Avatar, AvatarGroup } from '@interlink/react/avatar';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button } from '@interlink/react/button';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import { people } from '../../src/people';
import { AppFrame } from '../shared/frame';
import { RecentWork, ReportingLine } from './sections';
import { TeamsNav } from './side-nav';

const me = people.amara;
const squad = [people.kwame, people.zawadi, people.tunde, people.imani, people.jabari].map((p) => ({ key: p.name, name: p.name, src: p.photo }));

/** A person's profile: who they are, how to work with them, what they did lately and where they sit. */
export default function ProfileScreen() {
  return (
    <AppFrame app={{ name: 'Teams', icon: TeamsIcon, color: 'ink' }} sideNav={<TeamsNav />}>
      <div className="scr-profile">
        <Breadcrumbs>
          <BreadcrumbsItem text="People" href="#people" />
          <BreadcrumbsItem text={me.name} href="#me" />
        </Breadcrumbs>
        <div className="scr-profile-banner" aria-hidden="true">
          <svg viewBox="0 0 1400 128" preserveAspectRatio="xMinYMid meet">
            <path className="scr-scribble-blue" d="M300 140 L 360 -10" />
            <path className="scr-scribble-purple" d="M330 70 L 420 95 L 560 60 L 660 72" />
            <path className="scr-scribble-white" d="M700 120 C 720 60, 760 40, 780 90 S 820 130, 840 60 M 880 100 h 40 M 900 80 v 40" />
            <path className="scr-scribble-purple" d="M860 4 C 940 14, 1040 12, 1200 -6" />
          </svg>
        </div>
        <div className="scr-profile-id">
          <span className="scr-profile-avatar"><Avatar name={me.name} src={me.photo} size="xlarge" /></span>
          <div className="scr-profile-name">
            <h1>{me.name}</h1>
            <p className="scr-muted-body">{me.role} · Nairobi · Lumen Payments</p>
          </div>
          <Button>Account settings</Button>
        </div>
        <Tabs id="profile-tabs">
          <TabList aria-label="Profile sections">
            {['Overview', 'Goals', 'Projects', 'Kudos'].map((t) => <Tab key={t}>{t}</Tab>)}
          </TabList>
          <TabPanel>
            <div className="scr-profile-body">
              <div className="scr-profile-main">
                <section className="scr-about">
                  <h2>Working with me</h2>
                  <p>I prefer async updates in Docs. For anything urgent, message me between 9am and 3pm East Africa time.</p>
                </section>
                <RecentWork />
                <ReportingLine />
              </div>
              <aside className="scr-rail" aria-label="Details">
                <section className="scr-prop">
                  <h2 className="scr-rail-title">Details</h2>
                  <dl className="scr-details"><dt>Email</dt><dd>amara@mkoba.example</dd><dt>Local time</dt><dd>10:42 EAT</dd></dl>
                </section>
                <section className="scr-prop">
                  <h2 className="scr-rail-title">Teams</h2>
                  <div className="scr-team-card">
                    <AvatarGroup data={squad} size="small" label="Payments squad" />
                    <strong>Payments squad</strong>
                    <span className="scr-muted">8 members · owns checkout and payouts</span>
                    <span className="scr-row"><Button>Create team</Button><Button appearance="subtle">Browse teams</Button></span>
                  </div>
                </section>
              </aside>
            </div>
          </TabPanel>
          {['Goals', 'Projects', 'Kudos'].map((t) => <TabPanel key={t}><p className="scr-muted-body scr-project-empty">{t} will appear here.</p></TabPanel>)}
        </Tabs>
      </div>
    </AppFrame>
  );
}
