// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import { Button, ButtonGroup } from '@interlink/react/button';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.200">
        <Heading size="small">Delete this project?</Heading>
        <Text as="p">Its boards and work items are removed for everyone.</Text>
        <Inline spread="space-between">
          <span />
          <ButtonGroup label="Dialog actions">
            <Button appearance="subtle">Keep project</Button>
            <Button appearance="danger">Delete project</Button>
          </ButtonGroup>
        </Inline>
      </Stack>
    </Card>
  );
}
