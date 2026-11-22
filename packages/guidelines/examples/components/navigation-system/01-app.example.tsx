// SPDX-License-Identifier: Apache-2.0
import BoardIcon from '@interlink/icons/core/board';
import ClockIcon from '@interlink/icons/core/clock';
import HomeIcon from '@interlink/icons/core/home';
import NotificationIcon from '@interlink/icons/core/notification';
import PageIcon from '@interlink/icons/core/page';
import ProjectIcon from '@interlink/icons/core/project';
import QuestionIcon from '@interlink/icons/core/question-circle';
import StarIcon from '@interlink/icons/core/star-unstarred';
import { Avatar } from '@interlink/react/avatar';
import { Badge } from '@interlink/react/badge';
import { IconButton } from '@interlink/react/button';
import {
  AppLogo, AppSwitcher, CreateButton, ExpandableNavItem, Main, NavItem, NavSearch, Root, SideNav, SideNavContent, SideNavHeader, SideNavSection, SideNavToggle, TopNav, TopNavEnd, TopNavMiddle, TopNavStart,
} from '@interlink/react/navigation-system';
import { Tile } from '@interlink/react/tile';
import { PageLines } from '../../../src/kit';
import { people } from '../../../src/people';

/** Title: App frame */
export default function Example() {
  return (
    <div style={{ height: 440, border: '1px solid var(--il-border)', borderRadius: 12, overflow: 'hidden' }}>
      <Root>
        <TopNav label="Example app">
          <TopNavStart>
            <SideNavToggle />
            <AppSwitcher />
            <AppLogo name="Lumen" icon={ProjectIcon} href="#home" />
          </TopNavStart>
          <TopNavMiddle>
            <NavSearch shortcut="/" />
            <CreateButton />
          </TopNavMiddle>
          <TopNavEnd>
            <IconButton appearance="subtle" icon={NotificationIcon} label="Notifications" />
            <IconButton appearance="subtle" icon={QuestionIcon} label="Help" />
            <Avatar src={people.amara.photo} name={people.amara.name} size="small" />
          </TopNavEnd>
        </TopNav>
        <SideNav label="Payments space">
          <SideNavHeader icon={<Tile label="" size="small" backgroundColor="color.background.accent.orange.subtler">💳</Tile>} title="Payments" subtitle="Software space" />
          <SideNavContent>
            <SideNavSection>
              <NavItem href="#for-you" icon={HomeIcon}>For you</NavItem>
              <NavItem href="#recent" icon={ClockIcon}>Recent</NavItem>
              <NavItem href="#starred" icon={StarIcon}>Starred</NavItem>
            </SideNavSection>
            <SideNavSection title="Payments" hasSeparator>
              <NavItem href="#board" icon={BoardIcon} isSelected elemAfter={<Badge>12</Badge>}>Board</NavItem>
              <ExpandableNavItem label="Launch plan" icon={PageIcon} isDefaultExpanded>
                <NavItem href="#risks">Risks</NavItem>
                <NavItem href="#timeline">Timeline</NavItem>
              </ExpandableNavItem>
            </SideNavSection>
          </SideNavContent>
        </SideNav>
        <Main>
          <PageLines rows={6} />
        </Main>
      </Root>
    </div>
  );
}
