// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Checkbox } from '@interlink/react/checkbox';

/** Title: States */
export default function Example() {
  return (
    <Stack space="space.050">
      <Checkbox label="Some selected" isIndeterminate />
      <Checkbox label="Invalid" isInvalid />
      <Checkbox label="Disabled" isDisabled />
      <Checkbox label="I accept the terms" isRequired />
    </Stack>
  );
}
