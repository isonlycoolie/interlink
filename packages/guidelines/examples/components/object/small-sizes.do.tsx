// SPDX-License-Identifier: Apache-2.0
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { ObjectIcon } from '@interlink/react/object';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.100">
        <Inline space="space.100" alignBlock="center"><ObjectIcon type="task" label="" /><Text>Fix button alignment</Text></Inline>
        <Inline space="space.100" alignBlock="center"><ObjectIcon type="story" label="" /><Text>Publish new metrics</Text></Inline>
        <Inline space="space.100" alignBlock="center"><ObjectIcon type="bug" label="" /><Text>Dismiss button misaligned</Text></Inline>
      </Stack>
    </Card>
  );
}
