// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Avatar } from '@interlink/react/avatar';

/** Title: Presence and status */
export default function Example() {
  return (
    <Inline space="space.200">
      <Avatar name="Kai Moto" presence="online" />
      <Avatar name="Lena Ruiz" presence="busy" />
      <Avatar name="Omar Haddad" status="approved" />
      <Avatar name="Design team" appearance="square" />
    </Inline>
  );
}
