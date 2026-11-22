// @interlink-dont form.matching-action
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
        <Heading size="medium">Log in</Heading>
        <Stack space="space.050">
          <Label htmlFor="u">Username</Label>
          <TextField id="u" />
        </Stack>
        <Stack space="space.050">
          <Label htmlFor="p">Password</Label>
          <TextField id="p" type="password" />
        </Stack>
        <Inline><Button appearance="primary">Submit</Button></Inline>
      </Stack>
    </Card>
  );
}
