// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { Card, Skeleton } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.200">
        <Heading size="small">Share this dashboard</Heading>
        <Skeleton width="80%" />
        <Inline spread="space-between">
          <span />
          <Button appearance="primary">Share</Button>
        </Inline>
      </Stack>
    </Card>
  );
}
