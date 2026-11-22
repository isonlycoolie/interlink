// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Label } from '@interlink/react/form';
import { DatePicker } from '@interlink/react/datetime-picker';

/** Title: Date picker */
export default function Example() {
  return (
    <div style={{ width: '16rem' }}>
      <Stack space="space.050">
        <Label htmlFor="due">Due date</Label>
        <DatePicker id="due" defaultValue="2026-05-28" isClearable />
      </Stack>
    </div>
  );
}
