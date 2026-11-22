// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Avatar } from '@interlink/react/avatar';

/** Title: Sizes */
export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <Avatar name="Nia Park" size="small" />
      <Avatar name="Nia Park" size="medium" />
      <Avatar name="Nia Park" size="large" />
      <Avatar name="Nia Park" size="xlarge" />
    </Inline>
  );
}
