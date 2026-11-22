// @interlink-dont typography.body-for-paragraphs
// SPDX-License-Identifier: Apache-2.0
import { SectionMessage } from '@interlink/react/section-message';
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Text>Your projects</Text>
        <Inline spread="space-between"><Text>Green Growth</Text><Text color="color.text.subtle">19 followers</Text></Inline>
        <Inline spread="space-between"><Text>Weekly Kitchen</Text><Text color="color.text.subtle">36 followers</Text></Inline>
        <Inline spread="space-between"><Text>Global Beats</Text><Text color="color.text.subtle">420 followers</Text></Inline>
      </Stack>
    </Card>
  );
}
