// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Checkbox } from '@interlink/react/checkbox';

/** Title: Default */
export default function Example() {
  return (
    <Stack space="space.050">
      <Checkbox label="Email me updates" defaultChecked />
      <Checkbox label="Show completed work" />
    </Stack>
  );
}
