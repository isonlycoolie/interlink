// SPDX-License-Identifier: Apache-2.0
import { Avatar } from '@interlink/react/avatar';
import { Inline } from '@interlink/react/primitives';
import { people } from '../../../src/people';

/** Title: Presence, status and the initials fallback */
export default function Example() {
  return (
    <Inline space="space.200" alignBlock="center">
      <Avatar name={people.kwame.name} src={people.kwame.photo} presence="online" size="large" />
      <Avatar name={people.zawadi.name} src={people.zawadi.photo} presence="busy" size="large" />
      <Avatar name={people.baraka.name} src={people.baraka.photo} status="approved" size="large" />
      <Avatar name="Design team" appearance="square" size="large" />
      <Avatar name="Lindiwe Dube" size="large" />
    </Inline>
  );
}
