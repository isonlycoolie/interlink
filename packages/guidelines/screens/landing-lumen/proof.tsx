// SPDX-License-Identifier: Apache-2.0
import Automation from '@interlink/illustrations/art/automation';
import CreateProject from '@interlink/illustrations/art/create-project';
import Reports from '@interlink/illustrations/art/reports';
import Security from '@interlink/illustrations/art/security';
import { people, scenes } from '../../src/people';
import { Reveal, stagger } from '../shared/reveal';

const STATS = [['4,000+', 'teams use Lumen every day'], ['38%', 'less time in status meetings'], ['30', 'countries, 12 of them in Africa'], ['99.95%', 'uptime over the last year']];

export function Stats() {
  return (
    <section className="lml-stats" aria-label="Lumen in numbers">
      <Reveal className="lnd-wrap lml-stats-grid">
        {STATS.map(([n, t], i) => (
          <p key={n} style={stagger(i)}>
            <strong>{n}</strong>
            {t}
          </p>
        ))}
      </Reveal>
    </section>
  );
}

const CARDS = [
  { Art: CreateProject, title: 'Plan', text: 'Goals, docs and timelines in the same space as the work.' },
  { Art: Reports, title: 'Track', text: 'Boards and reports that update as people and agents work.' },
  { Art: Automation, title: 'Automate', text: 'Agents for the routine steps, with your approval built in.' },
  { Art: Security, title: 'Secure', text: 'Single sign-on, audit logs and data kept in your region.' },
];

export function Pillars() {
  return (
    <section className="lnd-section" aria-labelledby="lml-pillars-title">
      <div className="lnd-wrap">
        <h2 id="lml-pillars-title" className="lnd-h2">Everything a growing company runs on</h2>
        <Reveal className="lml-pillars">
          {CARDS.map(({ Art, title, text }, i) => (
            <article key={title} className="lml-pillar" style={stagger(i)}>
              <span className="lml-pillar-art"><Art size="medium" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Story() {
  const f = people.folake;
  return (
    <section className="lnd-section lml-story-wrap" aria-labelledby="lml-story-title">
      <div className="lnd-wrap lml-story">
        <img className="lml-story-photo" src={scenes.twoColleagues} alt="Two colleagues reviewing a plan on a laptop" />
        <figure className="lml-story-quote">
          <h2 id="lml-story-title" className="lnd-eyebrow">Pwani Logistics</h2>
          <blockquote>“We run 40 depots from one space. The agents close out the routine tickets, and my team spends its mornings with drivers, not spreadsheets.”</blockquote>
          <figcaption>
            <img src={f.photo} alt="" />
            <span><strong>{f.name}</strong>{f.role}, Pwani Logistics</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
