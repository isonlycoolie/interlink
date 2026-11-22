// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { DateLabel } from '@interlink/react/date-label';

export default function Example() {
  return (
    <Stack space="space.100" alignInline="center">
      <DateLabel label="29 August" appearance="warning" />
      <DateLabel label="28 May 2026" />
      <DateLabel label="4 July 2025" appearance="danger" />
    </Stack>
  );
}
