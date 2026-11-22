// SPDX-License-Identifier: Apache-2.0
'use client';
import AppsIcon from '@interlink/icons/core/apps';
import AutomationIcon from '@interlink/icons/core/automation';
import ChatIcon from '@interlink/icons/core/ai-chat';
import EditIcon from '@interlink/icons/core/edit';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import ShieldIcon from '@interlink/icons/core/shield';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { NavItem, SideNav, SideNavContent, SideNavFooter, SideNavSection } from '@interlink/react/navigation-system';

export const CHATS = ['Close payments sprint 14', 'Summarise the Kenya beta', 'Draft the pricing FAQ', 'Who owns payout risk?'];

export interface AssistantNavProps {
  current: string | null;
  onNew: () => void;
  onOpen: (title: string) => void;
}

/** New chat first, then recent chats, then the agents people can talk to. */
export function AssistantNav({ current, onNew, onOpen }: AssistantNavProps) {
  return (
    <SideNav label="Assistant">
      <SideNavContent>
        <SideNavSection>
          <NavItem icon={EditIcon} onClick={onNew} isSelected={current === null}>
            New chat
          </NavItem>
        </SideNavSection>
        <SideNavSection title="Recent chats" hasSeparator>
          {CHATS.map((c) => (
            <NavItem key={c} icon={ChatIcon} onClick={() => onOpen(c)} isSelected={current === c}>
              {c}
            </NavItem>
          ))}
        </SideNavSection>
        <SideNavSection title="Agents" hasSeparator>
          <NavItem href="#planner" icon={<AgentAvatar name="Planner" icon={RoadmapIcon} color="purple" size="xsmall" label="" />}>Planner</NavItem>
          <NavItem href="#runner" icon={<AgentAvatar name="Runner" icon={AutomationIcon} color="blue" size="xsmall" label="" />}>Runner</NavItem>
          <NavItem href="#guard" icon={<AgentAvatar name="Guard" icon={ShieldIcon} color="lime" size="xsmall" label="" />}>Guard</NavItem>
        </SideNavSection>
      </SideNavContent>
      <SideNavFooter>
        <NavItem href="#agents" icon={AppsIcon}>Browse agents</NavItem>
      </SideNavFooter>
    </SideNav>
  );
}
