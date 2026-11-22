// @interlink-dont lozenge.semantic-color
// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';
import { TokenTag } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.100" alignInline="center">
      <Lozenge appearance="accent-teal">In progress</Lozenge>
      <TokenTag token="color.background.accent.teal.subtler" />
    </Stack>
  );
}
