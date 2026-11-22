// @interlink-dont tile.match-height
// SPDX-License-Identifier: Apache-2.0
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { Tile } from '@interlink/react/tile';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Inline space="space.150" alignBlock="center">
          <Tile label="" size="xsmall" backgroundColor="color.background.accent.teal.subtler">🏛️</Tile>
          <Stack space="space.0">
            <Text weight="medium">Inventory portal relaunch</Text>
            <Text size="small" color="color.text.subtle">12 contributors · 56 followers</Text>
          </Stack>
        </Inline>
      </Stack>
    </Card>
  );
}
