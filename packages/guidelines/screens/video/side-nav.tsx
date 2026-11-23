// SPDX-License-Identifier: Apache-2.0
'use client';
import BookIcon from '@interlink/icons/core/book-with-bookmark';
import CalendarIcon from '@interlink/icons/core/calendar';
import CameraIcon from '@interlink/icons/core/camera';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import ClockIcon from '@interlink/icons/core/clock';
import CrossIcon from '@interlink/icons/core/cross';
import InfoIcon from '@interlink/icons/core/information-circle';
import OfficeIcon from '@interlink/icons/core/office-building';
import PersonAddIcon from '@interlink/icons/core/person-add';
import PersonIcon from '@interlink/icons/core/person-avatar';
import SettingsIcon from '@interlink/icons/core/settings';
import VideoIcon from '@interlink/icons/core/video';
import InviteTeam from '@interlink/illustrations/art/invite-team';
import { Button, IconButton } from '@interlink/react/button';
import { Lozenge } from '@interlink/react/lozenge';
import { NavItem, SideNav, SideNavContent, SideNavFooter, SideNavSection } from '@interlink/react/navigation-system';
import { useState } from 'react';

/** The video app's navigation: the workspace, personal views, admin tools, an invite nudge and the record action. */
export function VideoNav() {
  const [invite, setInvite] = useState(true);
  return (
    <SideNav label="Video">
      <SideNavContent>
        <div className="scr-workspace">
          <button type="button" className="scr-workspace-switch">
            <span>
              <strong>Mkoba Labs</strong>
              <span className="scr-row"><Lozenge>Default</Lozenge><InfoIcon label="Workspace info" color="color.icon.subtle" size="small" /><span className="scr-muted">12 members</span></span>
            </span>
            <ChevronDownIcon label="" color="currentColor" />
          </button>
          <a className="scr-workspace-invite" href="#invite"><PersonAddIcon label="" color="currentColor" size="small" />Invite teammates</a>
        </div>
        <SideNavSection>
          <NavItem href="#for-you" icon={PersonIcon}>For you</NavItem>
          <NavItem href="#library" icon={VideoIcon} isSelected>Library</NavItem>
          <NavItem href="#meetings" icon={CalendarIcon}>Meetings</NavItem>
          <NavItem href="#later" icon={BookIcon}>Watch later</NavItem>
          <NavItem href="#recent" icon={ClockIcon}>Recent</NavItem>
          <NavItem href="#settings" icon={SettingsIcon}>Personal settings</NavItem>
        </SideNavSection>
        <SideNavSection title="Admin tools" hasSeparator>
          <NavItem href="#manage" icon={OfficeIcon}>Manage</NavItem>
          <NavItem href="#workspace" icon={SettingsIcon}>Workspace</NavItem>
        </SideNavSection>
        {invite ? (
          <div className="scr-invite-card">
            <IconButton appearance="subtle" spacing="compact" icon={CrossIcon} label="Dismiss" onClick={() => setInvite(false)} />
            <InviteTeam size={72} />
            <strong>Invite your team to share and work together</strong>
            <Button appearance="primary" shouldFitContainer>Invite teammates</Button>
          </div>
        ) : null}
      </SideNavContent>
      <SideNavFooter>
        <span className="scr-record"><Button appearance="primary" iconBefore={CameraIcon}>Record a video</Button></span>
      </SideNavFooter>
    </SideNav>
  );
}
