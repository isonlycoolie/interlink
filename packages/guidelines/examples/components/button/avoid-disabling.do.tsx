// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { Card, FieldShape } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="20rem">
      <Stack space="space.150">
        <Heading size="small">Create project</Heading>
        <Stack space="space.075">
          <Text size="small" weight="medium">Project name</Text>
          <FieldShape />
          <Text size="small" color="color.text.danger">Enter a project name to continue.</Text>
        </Stack>
        <Inline spread="space-between">
          <span />
          <Button appearance="primary">Create</Button>
        </Inline>
      </Stack>
    </Card>
  );
}
