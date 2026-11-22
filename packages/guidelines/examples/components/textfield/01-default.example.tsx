// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';

/** Title: Default */
export default function Example() {
  return (
    <Stack space="space.050">
      <Label htmlFor="tf-1">Project name</Label>
      <TextField id="tf-1" placeholder="e.g. Website refresh" />
    </Stack>
  );
}
