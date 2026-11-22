// SPDX-License-Identifier: Apache-2.0
'use client';
import NotificationIcon from '@interlink/icons/core/notification';
import QuestionIcon from '@interlink/icons/core/question-circle';
import SettingsIcon from '@interlink/icons/core/settings';
import type { ComponentType, ReactNode } from 'react';
import type { IconProps } from '@interlink/icons';
import { AssistButton } from '@interlink/react/assist-button';
import { Avatar } from '@interlink/react/avatar';
import { IconButton } from '@interlink/react/button';
import { AppLogo, AppSwitcher, CreateButton, Main, NavSearch, Root, SideNavToggle, TopNav, TopNavEnd, TopNavMiddle, TopNavStart, type AppLogoProps } from '@interlink/react/navigation-system';
import { people } from '../../src/people';

export interface Product {
  name: string;
  icon: ComponentType<IconProps>;
  color: AppLogoProps['color'];
}

export interface AppChromeProps {
  product: Product;
  /** A SideNav. */
  sideNav: ReactNode;
  children: ReactNode;
  /** A Panel beside the page. */
  panel?: ReactNode;
  mainWidth?: 'full' | 'fixed';
  /** Label of the create button. */
  createLabel?: string;
  /** Hide the assistant button, for example on the assistant itself. */
  hideAsk?: boolean;
  onAsk?: () => void;
}

/** The frame every product screen shares: one top bar, the same places for logo, search, create and people tools. */
export function AppChrome({ product, sideNav, children, panel, mainWidth = 'full', createLabel, hideAsk = false, onAsk }: AppChromeProps) {
  const me = people.amara;
  return (
    <div className="scr-shell">
      <Root>
        <TopNav label={`${product.name} top bar`}>
          <TopNavStart>
            <SideNavToggle />
            <AppSwitcher />
            <AppLogo name={product.name} icon={product.icon} color={product.color} href="#home" />
          </TopNavStart>
          <TopNavMiddle>
            <NavSearch placeholder={`Search ${product.name}`} shortcut="/" />
            <CreateButton>{createLabel}</CreateButton>
          </TopNavMiddle>
          <TopNavEnd>
            {hideAsk ? null : (
              <AssistButton appearance="subtle" onClick={onAsk}>
                Ask
              </AssistButton>
            )}
            <IconButton appearance="subtle" icon={NotificationIcon} label="Notifications" />
            <IconButton appearance="subtle" icon={QuestionIcon} label="Help" />
            <IconButton appearance="subtle" icon={SettingsIcon} label="Settings" />
            <Avatar src={me.photo} name={me.name} size="small" label={`Your profile, ${me.name}`} onClick={() => {}} />
          </TopNavEnd>
        </TopNav>
        {sideNav}
        <Main width={mainWidth}>{children}</Main>
        {panel}
      </Root>
    </div>
  );
}

/** Pieces of fake data shared by the screens. */
export const team = [people.amara, people.kwame, people.zawadi, people.tunde, people.neema, people.imani];
export const avatars = (list = team) => list.map((p) => ({ key: p.name, name: p.name, src: p.photo }));
