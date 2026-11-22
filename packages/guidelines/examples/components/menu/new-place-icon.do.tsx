// SPDX-License-Identifier: Apache-2.0
import LinkExternalIcon from '@interlink/icons/core/link-external';
import { ButtonItem, LinkItem, MenuGroup, Section } from '@interlink/react/menu';
import { MenuShape } from '../../../src/kit';

export default function Example() {
  return (
    <MenuShape width="16rem">
      <MenuGroup>
        <Section>
          <ButtonItem>Switch account</ButtonItem>
          <LinkItem href="#settings" target="_blank" iconAfter={<LinkExternalIcon label="Opens in a new window" />}>Account settings</LinkItem>
          <ButtonItem>Log out</ButtonItem>
        </Section>
      </MenuGroup>
    </MenuShape>
  );
}
