// @interlink-dont tile.one-variant
// SPDX-License-Identifier: Apache-2.0
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { Tile } from '@interlink/react/tile';
import { ObjectIcon } from '@interlink/react/object';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Inline space="space.150" alignBlock="center">
          <Tile label="" size="small" isInset={false} backgroundColor="color.background.accent.purple.bolder"><span>🎨</span></Tile>
          <Stack space="space.0">
            <Text weight="medium">Design: social media assets</Text>
            <Text size="small" color="color.text.subtle">Marketing</Text>
          </Stack>
        </Inline>
        <Inline space="space.150" alignBlock="center">
          <Tile label="" size="small" backgroundColor="color.background.accent.blue.subtler"><ObjectIcon type="task" label="" /></Tile>
          <Stack space="space.0">
            <Text weight="medium">Adopt the new web portal</Text>
            <Text size="small" color="color.text.subtle">Goals</Text>
          </Stack>
        </Inline>
        <Inline space="space.150" alignBlock="center">
          <Tile label="" size="small" backgroundColor="color.background.accent.blue.subtler"><ObjectIcon type="story" label="" /></Tile>
          <Stack space="space.0">
            <Text weight="medium">Customer survey design</Text>
            <Text size="small" color="color.text.subtle">Research</Text>
          </Stack>
        </Inline>
      </Stack>
    </Card>
  );
}
