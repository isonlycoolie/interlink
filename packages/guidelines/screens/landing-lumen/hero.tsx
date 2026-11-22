// SPDX-License-Identifier: Apache-2.0
import RoadmapIcon from '@interlink/icons/core/roadmap';
import { LinkButton } from '@interlink/react/button';
import { PresenceCursor } from '@interlink/react/presence-cursor';
import { people } from '../../src/people';
import { Reveal, stagger as i } from '../shared/reveal';
import { AppWindow } from './window';

/** Statement and actions on the left; on the right the product on a solid angled block, with people and an agent at work. */
export function Hero() {
  return (
    <section className="lml-hero" aria-labelledby="lml-hero-title">
      <div className="lnd-wrap lml-hero-grid">
        <Reveal>
          <p className="lnd-eyebrow" style={i(0)}>
            Lumen work platform
          </p>
          <h1 id="lml-hero-title" className="lnd-h1" style={i(1)}>
            Where teams and their agents get work done
          </h1>
          <p className="lnd-lead" style={i(2)}>
            Plan in docs, track on boards, talk it through on video, and hand the busywork to agents that ask before they act. One
            place, from Lagos to Nairobi to London.
          </p>
          <div style={i(3)}>
            <div className="lnd-ctas">
              <LinkButton appearance="primary" href="#start">Get it free</LinkButton>
              <LinkButton href="#tour">See how it works</LinkButton>
            </div>
            <p className="lml-trust">Free for up to 10 people. No card needed.</p>
          </div>
        </Reveal>
        <div className="lml-stage">
          <div className="lml-block" aria-hidden="true" />
          <AppWindow />
          <span className="lml-hero-cursor lml-hero-cursor-a" aria-hidden="true">
            <PresenceCursor name="Wanjiru" color="purple" size="large" />
          </span>
          <span className="lml-hero-cursor lml-hero-cursor-b" aria-hidden="true">
            <PresenceCursor name="Planner" color="agent" agentIcon={RoadmapIcon} size="large" pointer="top-right" />
          </span>
          <img className="lml-hero-photo" src={people.wanjiru.photo} alt="" />
        </div>
      </div>
    </section>
  );
}
