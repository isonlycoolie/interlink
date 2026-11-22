// @interlink-dont tooltip.not-on-disabled
// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { Card, TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Create a task</Heading>
        <Stack space="space.050">
          <Label htmlFor="s">Summary</Label>
          <TextField id="s" isRequired isInvalid />
        </Stack>
        <Stack space="space.075" alignInline="center">
      <Button appearance="primary" isDisabled>Create</Button>
      <TooltipShape>You must enter a task summary</TooltipShape>
    </Stack>
      </Stack>
    </Card>
  );
}
