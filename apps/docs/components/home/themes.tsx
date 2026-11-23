// SPDX-License-Identifier: Apache-2.0
import RoadmapIcon from '@interlink/icons/core/roadmap';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { Button } from '@interlink/react/button';
import { Lozenge } from '@interlink/react/lozenge';
import { PixelWord } from './pixel';

const THEMES = [
  { name: 'Light', mode: 'light', contrast: undefined },
  { name: 'Dark', mode: 'dark', contrast: undefined },
  { name: 'High contrast', mode: 'light', contrast: 'more' },
] as const;

/** The same live components in each theme, side by side: switching is one attribute, not a redesign. */
export function Themes() {
  return (
    <section className="home-sell" aria-labelledby="home-themes">
      <p className="home-hand">one attribute away</p>
      <h2 id="home-themes" className="home-sell-title"><PixelWord text="Every theme" /></h2>
      <p className="home-sell-lead">Light, dark and high contrast come with every component, tested for contrast and focus.</p>
      <ul className="home-themes">
        {THEMES.map((t) => (
          <li key={t.name} className="home-theme" data-color-mode={t.mode} data-contrast-mode={t.contrast}>
            <p className="home-theme-name">{t.name}</p>
            <div className="home-theme-card">
              <div className="home-theme-row">
                <AgentAvatar name="Planner" icon={RoadmapIcon} color="purple" size="small" label="" />
                <strong>Q3 launch plan</strong>
                <Lozenge appearance="success">On track</Lozenge>
              </div>
              <p>Twelve tasks across three teams, due Friday.</p>
              <div className="home-theme-row">
                <Button>Comment</Button>
                <Button appearance="primary">Approve</Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
