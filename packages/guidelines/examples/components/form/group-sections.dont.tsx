// @interlink-dont form.group-sections
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
        <Heading size="medium">Create work type</Heading>
        <Stack space="space.050">
          <Label htmlFor="pr">Project</Label>
          <TextField id="pr" value="Design services" isReadOnly elemAfterInput={<ChevronDownIcon label="" />} />
        </Stack>
        <Stack space="space.050">
          <Label htmlFor="wt">Work type</Label>
          <TextField id="wt" value="Story" isReadOnly elemAfterInput={<ChevronDownIcon label="" />} />
        </Stack>
        <Stack space="space.050">
          <Label htmlFor="su">Summary</Label>
          <TextField id="su" />
        </Stack>
        <Stack space="space.050">
          <Label htmlFor="de">Description</Label>
          <TextField id="de" />
        </Stack>
      </Stack>
    </Card>
  );
}
