// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import { Button, ButtonGroup } from '@interlink/react/button';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.200">
        <Heading size="small">Archive this board?</Heading>
        <Text as="p">People can still find it in search, but it leaves the sidebar.</Text>
        <Inline space="space.100" spread="space-between">
          <span />
          <ButtonGroup label="Dialog actions">
            <Button appearance="subtle">Cancel</Button>
            <Button appearance="primary">Archive</Button>
          </ButtonGroup>
        </Inline>
      </Stack>
    </Card>
  );
}
