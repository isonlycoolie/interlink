// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack } from '@interlink/react/primitives';
import { Button, ButtonGroup } from '@interlink/react/button';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Add instance</Heading>
        <Stack space="space.050">
          <Label htmlFor="o">Organization</Label>
          <TextField id="o" defaultValue="People team" />
        </Stack>
        <ButtonGroup label="Form actions">
          <Button appearance="primary" isLoading>Create</Button>
          <Button appearance="subtle">Cancel</Button>
        </ButtonGroup>
      </Stack>
    </Card>
  );
}
