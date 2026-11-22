// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { DateLabel } from '@interlink/react/date-label';

/** Title: Appearances */
export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <DateLabel label="28 May 2026" />
      <DateLabel label="Tomorrow" appearance="warning" />
      <DateLabel label="4 July 2025" appearance="danger" />
      <DateLabel label="28 May 2026" isSpacious />
    </Inline>
  );
}
