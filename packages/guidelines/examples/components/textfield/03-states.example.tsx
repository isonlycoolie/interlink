// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';

/** Title: States */
export default function Example() {
  return (
    <Stack space="space.100">
      <TextField aria-label="Invalid" isInvalid defaultValue="not-an-email" />
      <TextField aria-label="Disabled" isDisabled defaultValue="Locked" />
      <TextField aria-label="Read only" isReadOnly defaultValue="ABC-123" isMonospaced />
    </Stack>
  );
}
