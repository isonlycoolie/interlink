// SPDX-License-Identifier: Apache-2.0
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import { Heading, Stack } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Heading size="medium">Preferences</Heading>
        <Stack space="space.050">
          <Label htmlFor="la">Language</Label>
          <TextField id="la" value="English (UK)" isReadOnly elemAfterInput={<ChevronDownIcon label="" />} />
        </Stack>
        <Stack space="space.050">
          <Label htmlFor="tz">Time zone</Label>
          <TextField id="tz" value="Africa/Nairobi (your location)" isReadOnly elemAfterInput={<ChevronDownIcon label="" />} />
        </Stack>
      </Stack>
    </Card>
  );
}
