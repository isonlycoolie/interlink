// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack } from '@interlink/react/primitives';
import { Bars, Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.200">
        <Heading size="small">Work completed over time</Heading>
        <Bars values={[320, 180, 360, 260]} />
      </Stack>
    </Card>
  );
}
