// SPDX-License-Identifier: Apache-2.0
import ChartIcon from '@interlink/icons/core/chart-bar';
import PageIcon from '@interlink/icons/core/page';
import ShieldIcon from '@interlink/icons/core/shield';
import WhiteboardIcon from '@interlink/icons/core/whiteboard';
import { people } from '../../src/people';

const TEAM = [people.kwame, people.zawadi, people.neema, people.tunde];

/** Large photos of the people on the launch, with their role. */
export function MeetTheTeam() {
  return (
    <section aria-labelledby="team-title">
      <h2 id="team-title" className="scr-section-title">
        Meet the team
      </h2>
      <ul className="scr-team">
        {TEAM.map((p) => (
          <li key={p.name} className="scr-team-person">
            <img className="scr-team-photo" src={p.photo} alt="" />
            <span className="scr-person-name">{p.name}</span>
            <span className="scr-muted">{p.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const PAGES = [
  { icon: PageIcon, title: 'Merchant onboarding checklist', meta: 'Updated yesterday' },
  { icon: ChartIcon, title: 'Beta results dashboard', meta: 'Live data' },
  { icon: ShieldIcon, title: 'Payout risk review', meta: 'Approved by Sipho Ndlovu' },
  { icon: WhiteboardIcon, title: 'Launch day run of show', meta: 'Whiteboard' },
];

/** Links to the pages people need next. */
export function KeyPages() {
  return (
    <section aria-labelledby="pages-title">
      <h2 id="pages-title" className="scr-section-title">
        Key pages
      </h2>
      <ul className="scr-key-pages">
        {PAGES.map(({ icon: Icon, title, meta }) => (
          <li key={title}>
            <a className="scr-key-page" href={`#${title.toLowerCase().replaceAll(' ', '-')}`}>
              <span className="scr-key-page-icon">
                <Icon label="" />
              </span>
              <span className="scr-person-text">
                <span className="scr-person-name">{title}</span>
                <span className="scr-muted">{meta}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
