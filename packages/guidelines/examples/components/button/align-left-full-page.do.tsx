// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack } from '@interlink/react/primitives';
import { Button, ButtonGroup } from '@interlink/react/button';
import { Card, Skeleton } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="26rem">
      <Stack space="space.200">
        <Heading size="medium">Workspace settings</Heading>
        <Stack space="space.100">
          <Skeleton width="90%" />
          <Skeleton width="80%" />
          <Skeleton width="60%" />
        </Stack>
        <ButtonGroup label="Form actions">
          <Button appearance="primary">Save changes</Button>
          <Button appearance="subtle">Cancel</Button>
        </ButtonGroup>
      </Stack>
    </Card>
  );
}
