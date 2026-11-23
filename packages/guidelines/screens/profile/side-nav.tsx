// SPDX-License-Identifier: Apache-2.0
import GoalIcon from '@interlink/icons/core/goal';
import HeartIcon from '@interlink/icons/core/heart';
import PeopleIcon from '@interlink/icons/core/people-group';
import PersonIcon from '@interlink/icons/core/person';
import PersonAvatarIcon from '@interlink/icons/core/person-avatar';
import ReleaseIcon from '@interlink/icons/core/release';
import { NavItem, SideNav, SideNavContent, SideNavSection } from '@interlink/react/navigation-system';
import { AppTile } from '../shared/frame';

/** The Teams app: people and teams first, then the apps beside it. */
export function TeamsNav() {
  return (
    <SideNav label="Teams">
      <SideNavContent>
        <SideNavSection>
          <NavItem href="#for-you" icon={PersonAvatarIcon}>For you</NavItem>
          <NavItem href="#teams" icon={PeopleIcon}>Teams</NavItem>
          <NavItem href="#people" icon={PersonIcon} isSelected>People</NavItem>
          <NavItem href="#kudos" icon={HeartIcon}>Kudos</NavItem>
        </SideNavSection>
        <SideNavSection>
          <NavItem href="#goals" icon={<AppTile icon={GoalIcon} color="ink" />}>Goals</NavItem>
          <NavItem href="#projects" icon={<AppTile icon={ReleaseIcon} color="ink" />}>Projects</NavItem>
        </SideNavSection>
      </SideNavContent>
    </SideNav>
  );
}
