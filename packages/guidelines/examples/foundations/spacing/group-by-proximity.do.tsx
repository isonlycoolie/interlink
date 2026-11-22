// SPDX-License-Identifier: Apache-2.0
import { Button } from '@interlink/react/button';
import { Heading, Stack } from '@interlink/react/primitives';
import { Card, Gap, Skeleton } from '../../../src/kit';

/** The action sits right under the text it belongs to. */
export default function Example() {
  return (
    <Card width="22rem" padding="space.400">
      <Stack alignInline="center">
        <Heading size="medium">Gather your shared files</Heading>
        <Gap space="space.150" />
        <Stack space="space.075" alignInline="center" grow="fill">
          <Skeleton size="body" />
          <Skeleton width="60%" size="body" />
        </Stack>
        <Gap space="space.100" verdict="good" />
        <Button appearance="primary">Add files</Button>
      </Stack>
    </Card>
  );
}
