// @interlink-dont form.required-legend
// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack, Text } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';
import { RadioGroup } from '@interlink/react/radio';
import { Label, RequiredAsterisk } from '@interlink/react/form';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Account permissions</Heading>
        <Stack space="space.050">
          <Label htmlFor="n">Name</Label>
          <TextField id="n" isRequired />
        </Stack>
        <Text size="small" weight="bold" color="color.text.subtle" id="ua">User access <RequiredAsterisk /></Text>
        <RadioGroup aria-labelledby="ua" options={[{ label: 'Admin', value: 'admin' }, { label: 'Editor', value: 'editor' }]} defaultValue="admin" />
      </Stack>
    </Card>
  );
}
