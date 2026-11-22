// @interlink-dont badge.with-context
// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Badge } from '@interlink/react/badge';

export default function Example() {
  return (
    <Inline space="space.100">
      <Badge>13</Badge>
      <Badge appearance="primary">8</Badge>
      <Badge appearance="added">15</Badge>
    </Inline>
  );
}
