// SPDX-License-Identifier: Apache-2.0
import ArchiveIcon from '@interlink/icons/core/archive-box';
import EyeIcon from '@interlink/icons/core/eye-open';
import GoalIcon from '@interlink/icons/core/goal';
import MegaphoneIcon from '@interlink/icons/core/megaphone';
import ReleaseIcon from '@interlink/icons/core/release';
import TeamsIcon from '@interlink/icons/core/teams';
import { NavItem, SideNav, SideNavContent, SideNavSection } from '@interlink/react/navigation-system';
import { AppTile } from '../shared/frame';

/** The Projects app: its views, then the apps beside it. */
export function ProjectsNav({ current = 'directory' }: { current?: 'directory' | 'following' | 'updates' | 'archived' }) {
  return (
    <SideNav label="Projects">
      <SideNavContent>
        <SideNavSection>
          <NavItem href="#directory" icon={ReleaseIcon} isSelected={current === 'directory'}>Project directory</NavItem>
          <NavItem href="#following" icon={EyeIcon} isSelected={current === 'following'}>Following</NavItem>
          <NavItem href="#updates" icon={MegaphoneIcon} isSelected={current === 'updates'}>Status updates</NavItem>
          <NavItem href="#archived" icon={ArchiveIcon} isSelected={current === 'archived'}>Archived</NavItem>
        </SideNavSection>
        <SideNavSection>
          <NavItem href="#teams" icon={<AppTile icon={TeamsIcon} color="ink" />}>Teams</NavItem>
          <NavItem href="#goals" icon={<AppTile icon={GoalIcon} color="ink" />}>Goals</NavItem>
        </SideNavSection>
      </SideNavContent>
    </SideNav>
  );
}
