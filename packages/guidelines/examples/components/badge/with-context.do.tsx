// SPDX-License-Identifier: Apache-2.0
import { Inline, Text } from '@interlink/react/primitives';
import { Badge } from '@interlink/react/badge';

export default function Example() {
  return (
    <Inline space="space.300" alignBlock="center">
      <Text color="color.link" weight="medium">About</Text>
      <Inline space="space.075" alignBlock="center"><Text weight="medium">Updates</Text><Badge>13</Badge></Inline>
    </Inline>
  );
}
