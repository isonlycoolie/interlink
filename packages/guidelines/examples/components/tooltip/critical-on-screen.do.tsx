// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack, Text } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Set password</Heading>
        <Stack space="space.050">
          <Label htmlFor="np">New password</Label>
          <TextField id="np" type="password" aria-describedby="np-h" />
          <Text size="small" color="color.text.subtlest" id="np-h">At least 8 characters, including a number or symbol.</Text>
        </Stack>
      </Stack>
    </Card>
  );
}
