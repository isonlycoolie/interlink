// SPDX-License-Identifier: Apache-2.0
import ArchiveIcon from '@interlink/icons/core/archive-box';
import EyeIcon from '@interlink/icons/core/eye-open';
import GoalIcon from '@interlink/icons/core/goal';
import MegaphoneIcon from '@interlink/icons/core/megaphone';
import ReleaseIcon from '@interlink/icons/core/release';
import TeamsIcon from '@interlink/icons/core/teams';
import { NavItem, SideNav, SideNavContent, SideNavSection } from '@interlink/react/navigation-system';
import { AppTile } from '../shared/frame';

/** The Goals app: its own views first, then the neighbouring apps people move between. */
export function GoalsNav() {
  return (
    <SideNav label="Goals">
      <SideNavContent>
        <SideNavSection>
          <NavItem href="#directory" icon={GoalIcon} isSelected>Goal directory</NavItem>
          <NavItem href="#following" icon={EyeIcon}>Following</NavItem>
          <NavItem href="#updates" icon={MegaphoneIcon}>Status updates</NavItem>
          <NavItem href="#archived" icon={ArchiveIcon}>Archived</NavItem>
        </SideNavSection>
        <SideNavSection>
          <NavItem href="#teams" icon={<AppTile icon={TeamsIcon} color="ink" />}>Teams</NavItem>
          <NavItem href="#projects" icon={<AppTile icon={ReleaseIcon} color="ink" />}>Projects</NavItem>
        </SideNavSection>
      </SideNavContent>
    </SideNav>
  );
}
