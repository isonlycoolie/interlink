// @interlink-dont menu.button-items
// SPDX-License-Identifier: Apache-2.0
import { ButtonItem, MenuGroup, Section } from '@interlink/react/menu';
import { MenuShape } from '../../../src/kit';

export default function Example() {
  return (
    <MenuShape width="16rem">
      <MenuGroup>
        <Section>
          <ButtonItem>Personal settings</ButtonItem>
          <ButtonItem>Personal space</ButtonItem>
        </Section>
      </MenuGroup>
    </MenuShape>
  );
}
