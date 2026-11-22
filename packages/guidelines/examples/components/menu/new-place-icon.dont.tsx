// @interlink-dont menu.new-place-icon
// SPDX-License-Identifier: Apache-2.0
import { LinkItem, MenuGroup, Section } from '@interlink/react/menu';
import { MenuShape } from '../../../src/kit';

export default function Example() {
  return (
    <MenuShape width="16rem">
      <MenuGroup>
        <Section>
          <LinkItem href="#word">Export to Word</LinkItem>
          <LinkItem href="#pdf">Export to PDF</LinkItem>
        </Section>
      </MenuGroup>
    </MenuShape>
  );
}
