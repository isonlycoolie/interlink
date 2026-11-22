// @interlink-dont form.one-column
// SPDX-License-Identifier: Apache-2.0
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import { Heading, Inline, Stack } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="26rem">
      <Stack space="space.150">
        <Heading size="medium">Start a trial</Heading>
        <Inline space="space.200">
          <Stack space="space.050">
          <Label htmlFor="p">Product</Label>
          <TextField id="p" value="Team plan" isReadOnly elemAfterInput={<ChevronDownIcon label="" />} />
        </Stack>
          <Stack space="space.050">
          <Label htmlFor="l">License type</Label>
          <TextField id="l" value="Developer" isReadOnly elemAfterInput={<ChevronDownIcon label="" />} />
        </Stack>
        </Inline>
        <Stack space="space.050">
          <Label htmlFor="o">Organization</Label>
          <TextField id="o" width="small" />
        </Stack>
      </Stack>
    </Card>
  );
}
