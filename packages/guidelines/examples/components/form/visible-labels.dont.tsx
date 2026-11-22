// @interlink-dont form.visible-labels
// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { TextField } from '@interlink/react/textfield';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Create new password</Heading>
        <TextField aria-label="Current password" placeholder="Enter your current password" />
        <TextField aria-label="New password" placeholder="Enter new password" />
        <Inline><Button appearance="primary">Create</Button></Inline>
      </Stack>
    </Card>
  );
}
