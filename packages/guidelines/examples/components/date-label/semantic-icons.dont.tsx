// @interlink-dont date-label.semantic-icons
// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { DateLabel } from '@interlink/react/date-label';

export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <DateLabel label="January" appearance="warning" hasIconBefore={false} />
      <DateLabel label="February" appearance="warning" />
      <DateLabel label="December" appearance="danger" hasIconBefore={false} />
    </Inline>
  );
}
