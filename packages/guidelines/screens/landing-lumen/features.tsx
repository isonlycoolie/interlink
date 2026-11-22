// SPDX-License-Identifier: Apache-2.0
import ShieldIcon from '@interlink/icons/core/shield';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { AvatarGroup } from '@interlink/react/avatar';
import { Lozenge } from '@interlink/react/lozenge';
import { ActionPlan } from '@interlink/react/action-plan';
import { people } from '../../src/people';
import { MarkerArrow, Reveal, stagger } from '../shared/reveal';

const crew = [people.amara, people.jabari, people.neema, people.emeka].map((p) => ({ key: p.name, name: p.name, src: p.photo }));

/** Two feature rows on a grid canvas; floating cards joined by hand-drawn arrows explain the flow. */
export function Features() {
  return (
    <section className="lnd-section lml-canvas" aria-labelledby="lml-features-title">
      <div className="lnd-wrap">
        <p className="lnd-eyebrow">How it works</p>
        <h2 id="lml-features-title" className="lnd-h2">From a goal to done, with people in charge</h2>
        <div className="lml-feature">
          <div>
            <h3>Agents draft the plan</h3>
            <p>Say what you want to reach. An agent reads your spaces and lays out the steps, owners and dates for you to check.</p>
          </div>
          <Reveal className="lml-feature-picture">
            <div className="lml-float lml-float-a" style={stagger(0)}>
              <ActionPlan
                title="Launch in Tanzania"
                steps={[
                  { id: 'a', title: 'Read the Kenya retro', status: 'done' },
                  { id: 'b', title: 'Draft the Q4 plan', detail: '12 tasks, 5 owners', status: 'current' },
                  { id: 'c', title: 'Ask finance to approve fees', status: 'upcoming' },
                ]}
              />
            </div>
            <MarkerArrow className="lml-arrow-a" />
            <div className="lml-float lml-float-b" style={stagger(1)}>
              <strong>Owners agreed</strong>
              <AvatarGroup data={crew} size="small" label="Owners" />
            </div>
          </Reveal>
        </div>
        <div className="lml-feature" data-flip>
          <div>
            <h3>Guardrails you can see</h3>
            <p>Every agent has an owner, a mode and a log. Anything risky waits for a person, and admins can pause any agent at once.</p>
          </div>
          <Reveal className="lml-feature-picture">
            <div className="lml-float lml-float-c" style={stagger(0)}>
              <span className="lml-row">
                <AgentAvatar name="Guard" icon={ShieldIcon} color="lime" size="medium" label="" />
                <strong>Guard</strong>
                <Lozenge appearance="success">Active</Lozenge>
              </span>
              <span className="lml-muted">Blocked a share with an API key in it · 2 min ago</span>
            </div>
            <MarkerArrow className="lml-arrow-b" flip />
            <div className="lml-float lml-float-d" style={stagger(1)}>
              <img src={people.sipho.photo} alt="" />
              <span>
                <strong>Sipho approved</strong>
                <span className="lml-muted">Security engineer</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
