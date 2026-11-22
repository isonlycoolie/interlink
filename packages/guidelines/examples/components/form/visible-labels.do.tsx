// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Create new password</Heading>
        <Stack space="space.050">
          <Label htmlFor="cp">Current password</Label>
          <TextField id="cp" type="password" />
        </Stack>
        <Stack space="space.050">
          <Label htmlFor="np">New password</Label>
          <TextField id="np" type="password" />
        </Stack>
        <Inline><Button appearance="primary">Create</Button></Inline>
      </Stack>
    </Card>
  );
}
