// SPDX-License-Identifier: Apache-2.0
import { DateTimePicker } from '@interlink/react/datetime-picker';

/** Title: Date and time */
export default function Example() {
  return (
    <div style={{ width: '22rem' }}>
      <DateTimePicker defaultValue="2026-05-28T09:30" datePickerProps={{ label: 'Meeting date' }} timePickerProps={{ label: 'Meeting time' }} />
    </div>
  );
}
