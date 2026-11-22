// @interlink-dont badge.bold-sparingly
// SPDX-License-Identifier: Apache-2.0
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { Badge } from '@interlink/react/badge';

export default function Example() {
  return (
    <Stack space="space.100">
      <Inline space="space.200"><Text>Sprint 4</Text><Badge appearance="informationBold">4</Badge><Badge appearance="successBold">0</Badge></Inline>
      <Inline space="space.200"><Text>Sprint 5</Text><Badge appearance="informationBold">5</Badge><Badge appearance="successBold">1</Badge></Inline>
    </Stack>
  );
}
