// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';

/** Title: Appearance */
export default function Example() {
  return (
    <Stack space="space.100">
      <TextField aria-label="Standard" placeholder="Standard" />
      <TextField aria-label="Subtle" appearance="subtle" placeholder="Subtle" />
    </Stack>
  );
}
