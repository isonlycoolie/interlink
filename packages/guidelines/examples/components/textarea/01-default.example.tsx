// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { TextArea } from '@interlink/react/textarea';
import { Label } from '@interlink/react/form';

/** Title: Default */
export default function Example() {
  return (
    <Stack space="space.050">
      <Label htmlFor="ta-1">Description</Label>
      <TextArea id="ta-1" placeholder="What is this project about?" />
    </Stack>
  );
}
