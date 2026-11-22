// SPDX-License-Identifier: Apache-2.0
import AutomationIcon from '@interlink/icons/core/automation';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { Avatar } from '@interlink/react/avatar';
import { Lozenge } from '@interlink/react/lozenge';
import { ThinkingIndicator } from '@interlink/react/thinking-indicator';
import { people } from '../../src/people';

const COLS = [
  { title: 'To do', cards: [['Pricing page in Swahili', 'accent-purple', 'Design', people.zawadi], ['Agent: tidy backlog', 'accent-blue', 'Ops', null]] },
  { title: 'Doing', cards: [['M-Pesa payouts', 'accent-lime', 'Payments', people.kwame], ['Launch checklist', 'accent-orange', 'Launch', people.neema]] },
  { title: 'Done', cards: [['Beta invites sent', 'accent-teal', 'Growth', people.tunde]] },
] as const;

/** A small, real-looking app window for marketing pictures: a board with people and one agent at work. */
export function AppWindow({ title = 'Kenya launch' }: { title?: string }) {
  return (
    <div className="lml-window" role="img" aria-label="A Lumen board with work in three columns, and an agent tidying the backlog">
      <div className="lml-window-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <strong>{title}</strong>
      </div>
      <div className="lml-window-board" aria-hidden="true">
        {COLS.map((c) => (
          <div key={c.title} className="lml-window-col">
            <span className="lml-window-col-title">{c.title}</span>
            {c.cards.map(([text, tone, label, who]) => (
              <div key={text} className="lml-window-card">
                <span className="lml-window-card-title">{text}</span>
                <span className="lml-window-card-foot">
                  <Lozenge appearance={tone}>{label}</Lozenge>
                  {who ? <Avatar src={who.photo} name={who.name} size="xsmall" label="" /> : <AgentAvatar name="Runner" icon={AutomationIcon} color="blue" size="xsmall" label="" />}
                </span>
                {who ? null : <ThinkingIndicator label="Sorting 18 items" />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
