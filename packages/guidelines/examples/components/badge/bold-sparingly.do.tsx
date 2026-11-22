// SPDX-License-Identifier: Apache-2.0
import { Inline, Text } from '@interlink/react/primitives';
import { Badge } from '@interlink/react/badge';

export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <Text>Notifications</Text>
      <Badge appearance="dangerBold">3</Badge>
    </Inline>
  );
}
