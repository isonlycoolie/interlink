// SPDX-License-Identifier: Apache-2.0
'use client';
import AddIcon from '@interlink/icons/core/add';
import AppsIcon from '@interlink/icons/core/apps';
import ClockIcon from '@interlink/icons/core/clock';
import FolderIcon from '@interlink/icons/core/folder-closed';
import HomeIcon from '@interlink/icons/core/home';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import PageIcon from '@interlink/icons/core/page';
import StarIcon from '@interlink/icons/core/star-unstarred';
import TeamsIcon from '@interlink/icons/core/teams';
import WhiteboardIcon from '@interlink/icons/core/whiteboard';
import { IconButton } from '@interlink/react/button';
import { ExpandableNavItem, NavItem, SideNav, SideNavContent, SideNavFooter, SideNavHeader, SideNavSection } from '@interlink/react/navigation-system';
import { Tile } from '@interlink/react/tile';

/** The space tree of the team space: the open page is selected inside its folder. */
export function SpaceNav() {
  return (
    <SideNav label="Launch Hub space">
      <SideNavContent>
        <SideNavSection>
          <NavItem href="#for-you" icon={HomeIcon}>For you</NavItem>
          <NavItem href="#recent" icon={ClockIcon}>Recent</NavItem>
          <NavItem href="#starred" icon={StarIcon}>Starred</NavItem>
          <NavItem href="#teams" icon={TeamsIcon}>Teams</NavItem>
        </SideNavSection>
        <SideNavSection
          hasSeparator
          header={
            <SideNavHeader
              icon={<Tile label="" size="small" backgroundColor="color.background.accent.orange.subtler">🚀</Tile>}
              title="Launch Hub"
              subtitle="Team space"
              actions={<IconButton appearance="subtle" spacing="compact" icon={MoreIcon} label="Space actions" />}
            />
          }
        >
          <NavItem href="#overview" icon={HomeIcon}>Overview</NavItem>
          <ExpandableNavItem label="Plans" icon={FolderIcon} isDefaultExpanded actions={<IconButton appearance="subtle" spacing="compact" icon={AddIcon} label="Add to Plans" />}>
            <NavItem href="#kenya" icon={PageIcon} isSelected>Q3 launch: Kenya</NavItem>
            <NavItem href="#tanzania" icon={PageIcon}>Q4 launch: Tanzania</NavItem>
            <NavItem href="#pricing" icon={PageIcon}>Pricing study</NavItem>
          </ExpandableNavItem>
          <ExpandableNavItem label="Meeting notes" icon={FolderIcon}>
            <NavItem href="#weekly" icon={PageIcon}>Weekly sync</NavItem>
            <NavItem href="#retro" icon={PageIcon}>Sprint retro</NavItem>
          </ExpandableNavItem>
          <NavItem href="#board" icon={WhiteboardIcon}>Launch whiteboard</NavItem>
        </SideNavSection>
      </SideNavContent>
      <SideNavFooter>
        <NavItem icon={AddIcon}>Create</NavItem>
        <NavItem href="#apps" icon={AppsIcon}>Apps</NavItem>
      </SideNavFooter>
    </SideNav>
  );
}
