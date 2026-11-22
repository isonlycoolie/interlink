// SPDX-License-Identifier: Apache-2.0
'use client';
import AutomationIcon from '@interlink/icons/core/automation';
import BoardIcon from '@interlink/icons/core/board';
import ChartIcon from '@interlink/icons/core/chart-bar';
import ClockIcon from '@interlink/icons/core/clock';
import HomeIcon from '@interlink/icons/core/home';
import ReleaseIcon from '@interlink/icons/core/release';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import StarIcon from '@interlink/icons/core/star-unstarred';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { Badge } from '@interlink/react/badge';
import { ExpandableNavItem, NavItem, SideNav, SideNavContent, SideNavSection } from '@interlink/react/navigation-system';
import { Tile } from '@interlink/react/tile';

const space = (emoji: string, bg: 'color.background.accent.orange.subtler' | 'color.background.accent.blue.subtler' | 'color.background.accent.lime.subtler') => (
  <Tile label="" size="xsmall" backgroundColor={bg}>
    {emoji}
  </Tile>
);

export function BoardNav() {
  return (
    <SideNav label="Lumen Projects">
      <SideNavContent>
        <SideNavSection>
          <NavItem href="#for-you" icon={HomeIcon}>For you</NavItem>
          <NavItem href="#recent" icon={ClockIcon}>Recent</NavItem>
          <NavItem href="#starred" icon={StarIcon}>Starred</NavItem>
        </SideNavSection>
        <SideNavSection title="Spaces" hasSeparator>
          <ExpandableNavItem label="Payments" icon={space('💳', 'color.background.accent.orange.subtler')} isDefaultExpanded>
            <NavItem href="#board" icon={BoardIcon} isSelected elemAfter={<Badge>14</Badge>}>Board</NavItem>
            <NavItem href="#roadmap" icon={RoadmapIcon}>Roadmap</NavItem>
            <NavItem href="#releases" icon={ReleaseIcon}>Releases</NavItem>
            <NavItem href="#reports" icon={ChartIcon}>Reports</NavItem>
          </ExpandableNavItem>
          <ExpandableNavItem label="Mobile app" icon={space('📱', 'color.background.accent.blue.subtler')}>
            <NavItem href="#mobile-board" icon={BoardIcon}>Board</NavItem>
          </ExpandableNavItem>
          <ExpandableNavItem label="Data platform" icon={space('📊', 'color.background.accent.lime.subtler')}>
            <NavItem href="#data-board" icon={BoardIcon}>Board</NavItem>
          </ExpandableNavItem>
        </SideNavSection>
        <SideNavSection title="Agents" hasSeparator>
          <NavItem href="#planner" icon={<AgentAvatar name="Planner" icon={RoadmapIcon} color="purple" size="xsmall" label="" />}>Planner</NavItem>
          <NavItem href="#runner" icon={<AgentAvatar name="Runner" icon={AutomationIcon} color="blue" size="xsmall" label="" />} elemAfter={<Badge appearance="primary">1</Badge>}>
            Runner
          </NavItem>
        </SideNavSection>
      </SideNavContent>
    </SideNav>
  );
}
