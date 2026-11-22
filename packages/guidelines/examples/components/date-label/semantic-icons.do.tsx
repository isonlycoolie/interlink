// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { DateLabel } from '@interlink/react/date-label';

export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <DateLabel label="January" />
      <DateLabel label="January" appearance="warning" />
      <DateLabel label="January" appearance="danger" />
    </Inline>
  );
}
