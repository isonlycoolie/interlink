// SPDX-License-Identifier: Apache-2.0
'use client';
import AiChatIcon from '@interlink/icons/core/ai-chat';
import BoardIcon from '@interlink/icons/core/board';
import PagesIcon from '@interlink/icons/core/pages';
import ShieldIcon from '@interlink/icons/core/shield';
import VideoIcon from '@interlink/icons/core/video';
import BankIcon from '@interlink/icons/core/office-building';
import TeamsIcon from '@interlink/icons/core/teams';
import RocketIcon from '@interlink/icons/core/release';
import { SiteFooter } from '../shared/site-footer';
import { SiteHeader } from '../shared/site-header';
import { Features } from './features';
import { Hero } from './hero';
import { Logos } from './logos';
import { Products } from './products';
import { FinalCta, Trust } from './closing';
import { Pillars, Stats, Story } from './proof';

const brand = (
  <>
    <span className="lml-mark" aria-hidden="true" />
    Lumen
  </>
);

const MENUS = [
  { label: 'Products', items: [
    { title: 'Docs', text: 'Pages and plans, written together', icon: PagesIcon, color: 'blue' as const },
    { title: 'Projects', text: 'Boards, sprints and roadmaps', icon: BoardIcon, color: 'lime' as const },
    { title: 'Video', text: 'Recorded updates with comments', icon: VideoIcon, color: 'saffron' as const },
    { title: 'Assistant', text: 'Agents that ask before they act', icon: AiChatIcon, color: 'purple' as const },
  ] },
  { label: 'Solutions', items: [
    { title: 'Startups', text: 'Free for your first ten people', icon: RocketIcon, color: 'saffron' as const },
    { title: 'Financial services', text: 'Controls banks and lenders ask for', icon: BankIcon, color: 'blue' as const },
    { title: 'Operations teams', text: 'Depots, branches and field work', icon: TeamsIcon, color: 'lime' as const },
    { title: 'Security', text: 'Admin, audit and data residency', icon: ShieldIcon, color: 'purple' as const },
  ] },
];

/** The marketing site of a work platform: statement, product, proof and one clear action, in pure colour blocks. */
export default function LandingLumenScreen() {
  return (
    <div className="lnd lml" id="top">
      <SiteHeader
        brand={brand}
        announcement={<>Lumen Assist is here: agents that ask before they act. <a href="#tour">See it work</a></>}
        menus={MENUS}
        links={['Pricing', 'Enterprise']}
        cta="Get it free"
      />
      <main>
        <Hero />
        <Logos />
        <Products />
        <Features />
        <Stats />
        <Pillars />
        <Story />
        <Trust />
        <FinalCta />
      </main>
      <SiteFooter
        brand={<span className="lnd-brand">{brand}</span>}
        tagline="Where teams and their agents get work done. Built in Nairobi and Lagos."
        columns={[
          { title: 'Products', links: ['Docs', 'Projects', 'Video', 'Assistant'] },
          { title: 'Solutions', links: ['Startups', 'Financial services', 'Operations', 'Public sector'] },
          { title: 'Resources', links: ['Guides', 'Templates', 'Community', 'Status'] },
          { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
        ]}
        legal="© 2026 Lumen Labs. A sample product made with Interlink. Privacy · Terms"
      />
    </div>
  );
}
