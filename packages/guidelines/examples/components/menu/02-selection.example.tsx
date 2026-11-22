// SPDX-License-Identifier: Apache-2.0
import { ButtonItem, MenuGroup, Section } from '@interlink/react/menu';
import { MenuShape } from '../../../src/kit';

/** Title: Selected items and descriptions */
export default function Example() {
  return (
    <MenuShape width="18rem">
      <MenuGroup>
        <Section title="Views">
          <ButtonItem isSelected description="Everything in this project">All work</ButtonItem>
          <ButtonItem description="Only what is assigned to you">My work</ButtonItem>
          <ButtonItem isDisabled description="Turn on dates to use">Timeline</ButtonItem>
        </Section>
      </MenuGroup>
    </MenuShape>
  );
}
