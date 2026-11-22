// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Badge } from '@interlink/react/badge';

/** Title: Appearance */
export default function Example() {
  return (
    <Inline space="space.100">
      <Badge>8</Badge>
      <Badge appearance="primary">5</Badge>
      <Badge appearance="important">25</Badge>
      <Badge appearance="added">+3</Badge>
      <Badge appearance="removed">-2</Badge>
    </Inline>
  );
}
