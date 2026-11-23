// SPDX-License-Identifier: Apache-2.0
'use client';
import ArrowRightIcon from '@interlink/icons/core/arrow-right';
import CheckCircleIcon from '@interlink/icons/core/check-circle';
import HomeIcon from '@interlink/icons/core/home';
import NoProjects from '@interlink/illustrations/art/no-projects';
import { SegmentedControl } from '@interlink/react/segmented-control';
import { useState } from 'react';
import { people } from '../../src/people';
import { AppFrame, AppTile } from '../shared/frame';
import { Banner } from './banner';
import { APPS, HomeNav } from './side-nav';

const VIEWS = [
  { value: 'viewed', label: 'Viewed' },
  { value: 'worked', label: 'Worked on' },
  { value: 'assigned', label: 'Assigned to you' },
  { value: 'starred', label: 'Starred' },
];

/** The home of the platform: a greeting, the apps people use, the places they visit and their own work. */
export default function HomeScreen() {
  const [view, setView] = useState('viewed');
  const first = people.amara.name.split(' ')[0] ?? 'there';
  return (
    <AppFrame app={{ name: 'Home', icon: HomeIcon, color: 'ink' }} sideNav={<HomeNav />} canvas="grid">
      <div className="scr-page">
        <Banner name={first} />
        <section className="scr-section" aria-labelledby="home-apps">
          <div className="scr-section-head">
            <h2 id="home-apps" className="scr-h2">Your apps</h2>
            <a className="scr-link-arrow" href="#apps">
              View all apps
              <span className="scr-link-arrow-box"><ArrowRightIcon label="" color="currentColor" size="small" /></span>
            </a>
          </div>
          <ul className="scr-apps">
            {APPS.slice(1).map((a) => (
              <li key={a.name}>
                <a className="scr-app-card" href={`#${a.name.toLowerCase()}`}>
                  <AppTile icon={a.icon} color={a.color} size="large" />
                  <span>
                    <span className="scr-app-name">{a.name}</span>
                    <span className="scr-muted">{a.owner}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="scr-section" aria-labelledby="home-frequent">
          <h2 id="home-frequent" className="scr-h2">Frequently visited</h2>
          <p className="scr-frequent">
            <CheckCircleIcon label="" color="color.icon.subtle" size="small" />
            You haven’t visited any places yet. Visit and view your team’s spaces to start seeing your work.
          </p>
        </section>
        <section className="scr-section" aria-labelledby="home-work">
          <div className="scr-section-head">
            <h2 id="home-work" className="scr-h2">Your work</h2>
            <SegmentedControl label="Show work" options={VIEWS} value={view} onChange={setView} />
          </div>
          <div className="scr-empty">
            <NoProjects size={96} />
            <h3>You haven’t viewed anything yet</h3>
            <p>Once you start exploring, the items you visit will appear here.</p>
          </div>
        </section>
      </div>
    </AppFrame>
  );
}
