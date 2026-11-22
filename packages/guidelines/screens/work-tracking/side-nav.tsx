// SPDX-License-Identifier: Apache-2.0
'use client';
import BoardIcon from '@interlink/icons/core/board';
import ListBulletedIcon from '@interlink/icons/core/list-bulleted';
import PagesIcon from '@interlink/icons/core/pages';
import ReleaseIcon from '@interlink/icons/core/release';
import SettingsIcon from '@interlink/icons/core/settings';
import TimelineIcon from '@interlink/icons/core/timeline';
import { LinkItem, MenuGroup, Section } from '@interlink/react/menu';
import { ObjectTile } from '@interlink/react/object';
import { Inline, Stack, Text } from '@interlink/react/primitives';

/** The project's side navigation: the project, its views and its tools. */
export function SideNav() {
  return (
    <nav className="scr-side-nav" aria-label="Project">
      <Inline space="space.100" alignBlock="center">
        <ObjectTile type="page" size="medium" isBold label="" />
        <Stack space="space.0">
          <Text weight="semibold">Website refresh</Text>
          <Text size="small" color="color.text.subtle">Software project</Text>
        </Stack>
      </Inline>
      <MenuGroup spacing="compact">
        <Section title="Planning">
          <LinkItem href="#timeline" iconBefore={<TimelineIcon label="" />}>
            Timeline
          </LinkItem>
          <LinkItem href="#board" iconBefore={<BoardIcon label="" />} isSelected>
            Board
          </LinkItem>
          <LinkItem href="#list" iconBefore={<ListBulletedIcon label="" />}>
            List
          </LinkItem>
        </Section>
        <Section title="Development" hasSeparator>
          <LinkItem href="#releases" iconBefore={<ReleaseIcon label="" />}>
            Releases
          </LinkItem>
          <LinkItem href="#pages" iconBefore={<PagesIcon label="" />}>
            Project pages
          </LinkItem>
          <LinkItem href="#settings" iconBefore={<SettingsIcon label="" />}>
            Project settings
          </LinkItem>
        </Section>
      </MenuGroup>
    </nav>
  );
}
