// SPDX-License-Identifier: Apache-2.0
import LinkExternalIcon from '@interlink/icons/core/link-external';
import { ButtonItem, LinkItem, MenuGroup, Section } from '@interlink/react/menu';
import { MenuShape } from '../../../src/kit';

/** Title: Default */
export default function Example() {
  return (
    <MenuShape>
      <MenuGroup>
        <Section title="Spaces">
          <ButtonItem>Create a space</ButtonItem>
          <LinkItem href="#all-spaces">View all spaces</LinkItem>
        </Section>
        <Section hasSeparator>
          <LinkItem href="#settings" iconAfter={<LinkExternalIcon label="Opens in a new window" />} target="_blank">
            Account settings
          </LinkItem>
        </Section>
      </MenuGroup>
    </MenuShape>
  );
}
