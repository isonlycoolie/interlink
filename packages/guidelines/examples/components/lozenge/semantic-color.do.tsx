// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';
import { TokenTag } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.100" alignInline="center">
      <Lozenge appearance="discovery">New</Lozenge>
      <TokenTag token="color.background.discovery.subtler" />
    </Stack>
  );
}
