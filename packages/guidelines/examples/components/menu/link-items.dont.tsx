// @interlink-dont menu.link-items
// SPDX-License-Identifier: Apache-2.0
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import { LinkItem, MenuGroup, Section } from '@interlink/react/menu';
import { MenuShape } from '../../../src/kit';

export default function Example() {
  return (
    <MenuShape width="16rem">
      <MenuGroup>
        <Section>
          <LinkItem href="#account">Account settings</LinkItem>
          <LinkItem href="#avatar" isSelected iconAfter={<ChevronRightIcon label="" />}>Choose avatar</LinkItem>
        </Section>
      </MenuGroup>
    </MenuShape>
  );
}
