// SPDX-License-Identifier: Apache-2.0
import AppsIcon from '@interlink/icons/core/apps';
import BoardIcon from '@interlink/icons/core/board';
import CompassIcon from '@interlink/icons/core/compass';
import CustomizeIcon from '@interlink/icons/core/customize';
import GoalIcon from '@interlink/icons/core/goal';
import HashtagIcon from '@interlink/icons/core/hashtag';
import ListIcon from '@interlink/icons/core/list-bulleted';
import MegaphoneIcon from '@interlink/icons/core/megaphone';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import NotificationIcon from '@interlink/icons/core/notification';
import PersonIcon from '@interlink/icons/core/person-avatar';
import ReleaseIcon from '@interlink/icons/core/release';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import TeamsIcon from '@interlink/icons/core/teams';
import VideoIcon from '@interlink/icons/core/video';
import { IconButton } from '@interlink/react/button';
import { Lozenge } from '@interlink/react/lozenge';
import { NavItem, SideNav, SideNavContent, SideNavSection } from '@interlink/react/navigation-system';
import { AppTile, type App } from '../shared/frame';

/** The apps of the platform, each with its own solid tile. Shared by Home and the app switcher. */
export const APPS: (App & { owner: string })[] = [
  { name: 'Tracker', icon: BoardIcon, color: 'blue', owner: 'Mkoba Labs' },
  { name: 'Video', icon: VideoIcon, color: 'blue', owner: 'Mkoba Labs' },
  { name: 'Teams', icon: TeamsIcon, color: 'ink', owner: 'Mkoba Labs' },
  { name: 'Goals', icon: GoalIcon, color: 'ink', owner: 'Mkoba Labs' },
  { name: 'Projects', icon: ReleaseIcon, color: 'ink', owner: 'Mkoba Labs' },
];

/** Home's side navigation: personal views first, then the apps, then a way to tailor the list. */
export function HomeNav() {
  return (
    <SideNav label="Home">
      <SideNavContent>
        <SideNavSection>
          <NavItem href="#for-you" icon={PersonIcon} isSelected>For you</NavItem>
          <NavItem href="#your-work" icon={ListIcon}>Your work</NavItem>
          <NavItem href="#discover" icon={CompassIcon}>Discover</NavItem>
          <NavItem href="#notifications" icon={NotificationIcon}>Notifications</NavItem>
          <NavItem href="#updates" icon={MegaphoneIcon}>Status updates</NavItem>
          <NavItem href="#tags" icon={HashtagIcon}>Tags</NavItem>
        </SideNavSection>
        <SideNavSection>
          {APPS.map((a) => (
            <NavItem key={a.name} href={`#${a.name.toLowerCase()}`} icon={<AppTile icon={a.icon} color={a.color} />}>
              {a.name}
            </NavItem>
          ))}
          <NavItem
            href="#roadmaps"
            icon={<AppTile icon={RoadmapIcon} color="purple" />}
            elemAfter={
              <span className="scr-row-after">
                <Lozenge appearance="discovery">Try</Lozenge>
                <IconButton appearance="subtle" spacing="compact" icon={MoreIcon} label="More for Roadmaps" />
              </span>
            }
          >
            Roadmaps
          </NavItem>
          <NavItem href="#apps" icon={AppsIcon}>View all apps</NavItem>
        </SideNavSection>
        <SideNavSection>
          <NavItem href="#customize" icon={CustomizeIcon}>Customize sidebar</NavItem>
        </SideNavSection>
      </SideNavContent>
    </SideNav>
  );
}
