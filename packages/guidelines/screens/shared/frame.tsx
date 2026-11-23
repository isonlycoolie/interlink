// SPDX-License-Identifier: Apache-2.0
'use client';
import NotificationIcon from '@interlink/icons/core/notification';
import QuestionIcon from '@interlink/icons/core/question-circle';
import SettingsIcon from '@interlink/icons/core/settings';
import type { ComponentType, ReactNode } from 'react';
import type { IconProps } from '@interlink/icons';
import { Avatar } from '@interlink/react/avatar';
import { IconButton } from '@interlink/react/button';
import { AppLogo, AppSwitcher, CreateButton, Main, NavSearch, Root, SideNavToggle, TopNav, TopNavEnd, TopNavMiddle, TopNavStart } from '@interlink/react/navigation-system';
import { people } from '../../src/people';

export type TileColor = 'ink' | 'blue' | 'purple' | 'saffron' | 'lime';

export interface App {
  name: string;
  icon: ComponentType<IconProps>;
  color: TileColor;
}

export interface AppFrameProps {
  app: App;
  /** A SideNav. */
  sideNav: ReactNode;
  children: ReactNode;
  /** A Panel or overlay beside the page. */
  panel?: ReactNode;
  /** A faint line grid behind the page, as on the home of the platform. */
  canvas?: 'plain' | 'grid';
  /** Which top-bar tool is open, drawn with the selected outline. */
  openTool?: 'help' | 'settings' | 'profile';
  /** Extra controls before the people tools, such as an upgrade button. */
  endExtra?: ReactNode;
}

/** The frame every product screen shares: one top bar with the same places for app, search, create and people tools. */
export function AppFrame({ app, sideNav, children, panel, canvas = 'plain', openTool, endExtra }: AppFrameProps) {
  const me = people.amara;
  return (
    <div className="scr-frame" data-canvas={canvas}>
      <Root>
        <TopNav>
          <TopNavStart>
            <SideNavToggle />
            <AppSwitcher />
            <AppLogo name={app.name} icon={app.icon} href="#home" color={app.color} />
          </TopNavStart>
          <TopNavMiddle>
            <NavSearch placeholder="Search" />
            <CreateButton />
          </TopNavMiddle>
          <TopNavEnd>
            {endExtra}
            <IconButton appearance="subtle" icon={NotificationIcon} label="Notifications" />
            <span className="scr-tool" data-open={openTool === 'help' || undefined}>
              <IconButton appearance="subtle" icon={QuestionIcon} label="Help" isSelected={openTool === 'help'} />
            </span>
            <span className="scr-tool" data-open={openTool === 'settings' || undefined}>
              <IconButton appearance="subtle" icon={SettingsIcon} label="Settings" isSelected={openTool === 'settings'} />
            </span>
            <span className="scr-me" data-open={openTool === 'profile' || undefined}>
              <Avatar name={me.name} src={me.photo} size="small" label={`${me.name}, your profile`} onClick={() => {}} />
            </span>
          </TopNavEnd>
        </TopNav>
        {sideNav}
        <Main>{children}</Main>
        {panel}
      </Root>
    </div>
  );
}

/** A product tile: a solid colour square with the product glyph in the colour that reads on it. */
export function AppTile({ icon: Icon, color, size = 'small' }: { icon: ComponentType<IconProps>; color: TileColor; size?: 'small' | 'medium' | 'large' }) {
  return (
    <span className="scr-tile" data-color={color} data-size={size} aria-hidden="true">
      <Icon label="" color="currentColor" size={size === 'large' ? 'medium' : 'small'} />
    </span>
  );
}
