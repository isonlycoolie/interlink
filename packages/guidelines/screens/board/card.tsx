// SPDX-License-Identifier: Apache-2.0
import AiAgentIcon from '@interlink/icons/core/ai-agent';
import AngleBracketsIcon from '@interlink/icons/core/angle-brackets';
import BranchIcon from '@interlink/icons/core/pull-request';
import CheckboxIcon from '@interlink/icons/core/checkbox-checked';
import PriorityHighIcon from '@interlink/icons/core/priority-high';
import PriorityMediumIcon from '@interlink/icons/core/priority-medium';
import ShieldIcon from '@interlink/icons/core/shield';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { AgentSession } from '@interlink/react/agent-session';
import { Avatar } from '@interlink/react/avatar';
import { AGENTS, type AgentKey, type Item, type Session } from './data';

const GLYPH = { builder: AngleBracketsIcon, reviewer: AiAgentIcon, guard: ShieldIcon };

/** An agent's hexagon with a small photo of the person it works for. */
export function AgentFace({ agent, size = 'small', person }: { agent: AgentKey; size?: 'small' | 'medium'; person: Session['for'] }) {
  const a = AGENTS[agent];
  return <AgentAvatar name={a.name} icon={GLYPH[agent]} color={a.color} size={size} label={`${a.name}, for ${person.name}`} onBehalfOf={<img src={person.photo} alt="" />} />;
}

/** A work item: title, labels, key with its change, priority and owner, and the agent session running on it. */
export function WorkCard({ item }: { item: Item }) {
  return (
    <article className="scr-card" aria-label={`${item.key} ${item.title}`}>
      <div className="scr-card-body">
        <h3><a href={`#${item.key}`}>{item.title}</a></h3>
        <span className="scr-row">{item.labels.map((l) => <span key={l} className="scr-label">{l}</span>)}</span>
        <div className="scr-card-foot">
          <span className="scr-card-key"><CheckboxIcon label="Task" color="color.icon.brand" size="small" />{item.key}</span>
          <span className="scr-row">
            {item.hasChange ? <BranchIcon label="Has an open change" color="color.icon.danger" size="small" /> : null}
            {item.priority === 'high' ? <PriorityHighIcon label="High priority" color="color.icon.danger" size="small" /> : <PriorityMediumIcon label="Medium priority" color="color.icon.warning" size="small" />}
            <Avatar name={item.owner.name} src={item.owner.photo} size="small" />
          </span>
        </div>
      </div>
      {item.session ? <AgentSession avatar={<AgentFace agent={item.session.agent} person={item.session.for} />} status={item.session.status} href={`#${item.key}-session`} /> : null}
    </article>
  );
}
