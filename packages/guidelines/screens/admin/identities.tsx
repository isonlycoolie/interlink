// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import AiAgentIcon from '@interlink/icons/core/ai-agent';
import AngleBracketsIcon from '@interlink/icons/core/angle-brackets';
import AppIcon from '@interlink/icons/core/app';
import AutomationIcon from '@interlink/icons/core/automation';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import DataFlowIcon from '@interlink/icons/core/data-flow';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import PersonIcon from '@interlink/icons/core/person';
import RefreshIcon from '@interlink/icons/core/refresh';
import SearchIcon from '@interlink/icons/core/search';
import ShieldIcon from '@interlink/icons/core/shield';
import { AgentAvatar, type AgentColor } from '@interlink/react/agent-avatar';
import { Button, IconButton } from '@interlink/react/button';
import { DynamicTable } from '@interlink/react/dynamic-table';
import { Lozenge } from '@interlink/react/lozenge';
import { TextField } from '@interlink/react/textfield';
import type { ComponentType } from 'react';
import type { IconProps } from '@interlink/icons';

type Mode = 'Autonomous' | 'Delegated' | 'Workload';
const MODE_ICON: Record<Mode, ComponentType<IconProps>> = { Autonomous: AutomationIcon, Delegated: PersonIcon, Workload: DataFlowIcon };
const ROWS: { name: string; icon: ComponentType<IconProps>; color: AgentColor; modes: Mode[]; actor: 'App' | 'Agent' }[] = [
  { name: 'Lumen Assist', icon: AiAgentIcon, color: 'brand', modes: ['Autonomous', 'Delegated'], actor: 'App' },
  { name: 'Customer insights', icon: AiAgentIcon, color: 'blue', modes: ['Delegated'], actor: 'Agent' },
  { name: 'Builder', icon: AngleBracketsIcon, color: 'ink', modes: ['Delegated'], actor: 'Agent' },
  { name: 'Reviewer', icon: AiAgentIcon, color: 'saffron', modes: ['Delegated'], actor: 'Agent' },
  { name: 'Payments sync', icon: DataFlowIcon, color: 'purple', modes: ['Workload'], actor: 'App' },
  { name: 'Guard', icon: ShieldIcon, color: 'lime', modes: ['Autonomous'], actor: 'Agent' },
];

const tag = (Icon: ComponentType<IconProps>, text: string) => <span key={text} className="scr-mode"><Icon label="" color="color.icon.subtle" size="small" />{text}</span>;

/** Every agent and app that can act in the organisation, with how it acts and on whose behalf. */
export function Identities() {
  return (
    <>
      <h1 className="scr-title">Non-human identities</h1>
      <p className="scr-lead">Find the agents and apps connected to the directories you manage.</p>
      <div className="scr-filters scr-filters-tight">
        <TextField aria-label="Search identities" width="medium" elemBeforeInput={<span className="scr-field-icon"><SearchIcon label="" color="color.icon.subtle" size="small" /></span>} />
        <Button iconAfter={ChevronDownIcon}>Status</Button>
        <Button iconAfter={ChevronDownIcon}>Actor type</Button>
        <Button iconBefore={AddIcon}>More</Button>
      </div>
      <p className="scr-results">Showing 1,890 results <IconButton appearance="subtle" spacing="compact" icon={RefreshIcon} label="Refresh results" /></p>
      <div className="scr-table-card">
        <DynamicTable
          label="Non-human identities"
          head={{ cells: [{ key: 'name', content: 'Name', width: 32 }, { key: 'status', content: 'Status', width: 14 }, { key: 'mode', content: 'Mode', width: 28 }, { key: 'actor', content: 'Actor type', width: 20 }, { key: 'more', content: <span className="il-visually-hidden">Actions</span>, width: 6 }] }}
          rows={ROWS.map((r) => ({
            key: r.name,
            cells: [
              { key: r.name, content: <span className="scr-person"><AgentAvatar name={r.name} icon={r.icon} color={r.color} size="medium" label="" />{r.name}</span> },
              { content: <Lozenge appearance="success" iconBefore={ShieldIcon}>Active</Lozenge> },
              { content: <span className="scr-row">{r.modes.map((m) => tag(MODE_ICON[m], m))}</span> },
              { content: tag(r.actor === 'App' ? AppIcon : AiAgentIcon, r.actor) },
              { content: <IconButton appearance="subtle" spacing="compact" icon={MoreIcon} label={`More actions for ${r.name}`} /> },
            ],
          }))}
        />
      </div>
    </>
  );
}
