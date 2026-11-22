// SPDX-License-Identifier: Apache-2.0
import { ButtonItem, MenuGroup, Section } from '@interlink/react/menu';
import { MenuShape } from '../../../src/kit';

export default function Example() {
  return (
    <MenuShape width="16rem">
      <MenuGroup>
        <Section>
          <ButtonItem>Create a space</ButtonItem>
          <ButtonItem>Duplicate this space</ButtonItem>
        </Section>
      </MenuGroup>
    </MenuShape>
  );
}
