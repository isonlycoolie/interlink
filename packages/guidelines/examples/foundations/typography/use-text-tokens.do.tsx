// SPDX-License-Identifier: Apache-2.0
import { Lozenge } from '@interlink/react/lozenge';
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { AvatarShape } from '../../../src/kit';

export default function Example() {
  return (
    <Inline space="space.150" alignBlock="start">
      <AvatarShape initials="NP" size="medium" background="color.background.accent.blue.subtler" />
      <Stack space="space.050">
        <Inline space="space.100" alignBlock="center">
          <Text weight="medium">Nia Park</Text>
          <Lozenge>Author</Lozenge>
          <Text size="small" color="color.text.subtlest">1 day ago</Text>
        </Inline>
        <Text as="p">Quick update: I shared the draft with the review group and folded in their notes on rollout timing.</Text>
      </Stack>
    </Inline>
  );
}
