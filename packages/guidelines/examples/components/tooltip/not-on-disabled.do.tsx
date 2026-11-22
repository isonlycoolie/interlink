// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Create a task</Heading>
        <Stack space="space.050">
          <Label htmlFor="s">Summary</Label>
          <TextField id="s" isRequired isInvalid />
        </Stack>
        <Text size="small" color="color.text.danger">Enter a summary for the task.</Text>
        <Inline><Button appearance="primary">Create</Button></Inline>
      </Stack>
    </Card>
  );
}
