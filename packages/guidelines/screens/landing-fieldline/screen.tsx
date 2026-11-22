// SPDX-License-Identifier: Apache-2.0
'use client';
import ApiIcon from '@interlink/icons/core/api';
import DatabaseIcon from '@interlink/icons/core/database';
import ShieldIcon from '@interlink/icons/core/shield';
import LightningIcon from '@interlink/icons/core/automation';
import { Lozenge } from '@interlink/react/lozenge';
import { SiteFooter } from '../shared/site-footer';
import { SiteHeader } from '../shared/site-header';
import { Pricing, Sdk } from './build';
import { Hero } from './hero';
import { Network } from './network';
import { Products } from './products';

const brand = (
  <>
    <span className="fld-mark" aria-hidden="true" />
    Fieldline
  </>
);
const MENUS = [
  { label: 'Platform', items: [
    { title: 'Workers', text: 'Code in 330 cities', icon: LightningIcon, color: 'saffron' as const },
    { title: 'Tables', text: 'SQL close to readers', icon: DatabaseIcon, color: 'blue' as const },
    { title: 'Shield', text: 'Attacks and bots stopped', icon: ShieldIcon, color: 'lime' as const },
    { title: 'APIs', text: 'Gateways and keys', icon: ApiIcon, color: 'purple' as const },
  ] },
];
const UPDATES = [
  { tag: 'New', tone: 'discovery' as const, title: 'Johannesburg region is live', date: '20 Nov' },
  { tag: 'Improved', tone: 'information' as const, title: 'Tables reads are 40% faster in West Africa', date: '14 Nov' },
  { tag: 'Fixed', tone: 'success' as const, title: 'Queue retries keep their original order', date: '9 Nov' },
];

/** The marketing site of a developer cloud: terminal hero, products, the network map, code, pricing and updates. */
export default function LandingFieldlineScreen() {
  return (
    <div className="lnd fld" id="top">
      <SiteHeader brand={brand} announcement={<>New: Fieldline runs in Lagos, Nairobi and Johannesburg. <a href="#network">See the map</a></>} menus={MENUS} links={['Pricing', 'Docs', 'Customers']} cta="Start building" />
      <main>
        <Hero />
        <Products />
        <div id="network">
          <Network />
        </div>
        <Sdk />
        <Pricing />
        <section className="lnd-section" aria-labelledby="fld-updates-title">
          <div className="lnd-wrap fld-updates">
            <div className="fld-status">
              <h2 id="fld-updates-title" className="fld-status-title">System status</h2>
              <p><span className="fld-dot" aria-hidden="true" /> All systems normal</p>
              <p className="fld-text">99.99% uptime over 90 days across 330 cities.</p>
            </div>
            <ul className="fld-changelog" aria-label="Changelog">
              {UPDATES.map((u) => (
                <li key={u.title}>
                  <Lozenge appearance={u.tone}>{u.tag}</Lozenge>
                  <strong>{u.title}</strong>
                  <span>{u.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter
        brand={<span className="lnd-brand">{brand}</span>}
        tagline="The developer cloud with Africa on the map."
        columns={[
          { title: 'Platform', links: ['Workers', 'Tables', 'Queues', 'Shield'] },
          { title: 'Developers', links: ['Docs', 'SDKs', 'Changelog', 'Status'] },
          { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
          { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Data residency'] },
        ]}
        legal="© 2026 Fieldline Cloud. A sample product made with Interlink."
      />
    </div>
  );
}
