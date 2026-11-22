// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Badge } from '@interlink/react/badge';
import { TokenTag } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.100" alignInline="center">
      <Badge appearance="danger">-10</Badge>
      <TokenTag token="color.background.danger.subtler" />
    </Stack>
  );
}
