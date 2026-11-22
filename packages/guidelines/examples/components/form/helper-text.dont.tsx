// @interlink-dont form.helper-text
// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Change password</Heading>
        <Stack space="space.050">
          <Label htmlFor="pw">New password</Label>
          <TextField id="pw" type="password" placeholder="At least 12 characters" />
        </Stack>
      </Stack>
    </Card>
  );
}
