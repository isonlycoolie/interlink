// SPDX-License-Identifier: Apache-2.0
import { Avatar } from '@interlink/react/avatar';
import { LinkItem, MenuGroup, Section } from '@interlink/react/menu';
import { MenuShape } from '../../../src/kit';

export default function Example() {
  return (
    <MenuShape width="16rem">
      <MenuGroup>
        <Section title="Recent">
          <LinkItem href="#moonbeam" iconBefore={<Avatar appearance="square" size="small" name="Moonbeam" label="" />}>Moonbeam</LinkItem>
          <LinkItem href="#astro" iconBefore={<Avatar appearance="square" size="small" name="Astro projects" label="" />}>Astro projects</LinkItem>
        </Section>
      </MenuGroup>
    </MenuShape>
  );
}
