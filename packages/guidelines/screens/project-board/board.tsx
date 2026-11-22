// SPDX-License-Identifier: Apache-2.0
'use client';
import AutomationIcon from '@interlink/icons/core/automation';
import HighestIcon from '@interlink/icons/core/priority-highest';
import HighIcon from '@interlink/icons/core/priority-high';
import LowIcon from '@interlink/icons/core/priority-low';
import MediumIcon from '@interlink/icons/core/priority-medium';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { Avatar } from '@interlink/react/avatar';
import { GenerativeBorder } from '@interlink/react/generative-border';
import { Lozenge } from '@interlink/react/lozenge';
import { ObjectIcon } from '@interlink/react/object';
import { ThinkingIndicator } from '@interlink/react/thinking-indicator';
import { ITEMS, STATUSES, type Item, type Priority } from './data';

const PRIORITY: Record<Priority, typeof HighIcon> = { highest: HighestIcon, high: HighIcon, medium: MediumIcon, low: LowIcon };

function Card({ item, isOpen, onOpen }: { item: Item; isOpen: boolean; onOpen: (item: Item) => void }) {
  const Priority = PRIORITY[item.priority];
  const card = (
    <button type="button" className="scr-card" data-open={isOpen || undefined} onClick={() => onOpen(item)}>
      <span className="scr-card-title">{item.title}</span>
      <Lozenge appearance={`accent-${item.label.color}`}>{item.label.text}</Lozenge>
      {item.agent ? (
        <span className="scr-card-agent">
          <AgentAvatar name="Runner" icon={AutomationIcon} color="blue" size="xsmall" label="" />
          <ThinkingIndicator label={`Runner: ${item.agent}…`} />
        </span>
      ) : null}
      <span className="scr-card-foot">
        <span className="scr-row">
          <ObjectIcon type={item.type} />
          <span className="scr-card-key">{item.key}</span>
        </span>
        <span className="scr-row">
          <Priority label={`${item.priority} priority`} />
          <Avatar src={item.assignee.photo} name={item.assignee.name} size="xsmall" label={`Assignee: ${item.assignee.name}`} />
        </span>
      </span>
    </button>
  );
  return <li>{item.agent ? <GenerativeBorder isGenerating radius="medium">{card}</GenerativeBorder> : card}</li>;
}

/** Four balanced columns; each card opens its details in the side panel. */
export function Board({ query, openKey, onOpen }: { query: string; openKey?: string; onOpen: (item: Item) => void }) {
  const shown = ITEMS.filter((i) => `${i.key} ${i.title}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="scr-board">
      {STATUSES.map((status) => {
        const items = shown.filter((i) => i.status === status);
        return (
          <section key={status} className="scr-column" aria-labelledby={`col-${status}`}>
            <h2 id={`col-${status}`} className="scr-column-title">
              {status} <span className="scr-column-count">{items.length}</span>
            </h2>
            <ul className="scr-column-list">
              {items.map((i) => (
                <Card key={i.key} item={i} isOpen={i.key === openKey} onOpen={onOpen} />
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
