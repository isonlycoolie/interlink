// @interlink-dont form.input-masks
// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Enter password</Heading>
        <Stack space="space.050">
          <Label htmlFor="pw">Password</Label>
          <TextField id="pw" type="text" defaultValue="correct-horse" />
        </Stack>
      </Stack>
    </Card>
  );
}
