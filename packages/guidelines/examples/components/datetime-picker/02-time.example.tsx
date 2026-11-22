// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Label } from '@interlink/react/form';
import { TimePicker } from '@interlink/react/datetime-picker';

/** Title: Time picker */
export default function Example() {
  return (
    <div style={{ width: '12rem' }}>
      <Stack space="space.050">
        <Label htmlFor="start">Start time</Label>
        <TimePicker id="start" timeIsEditable />
      </Stack>
    </div>
  );
}
