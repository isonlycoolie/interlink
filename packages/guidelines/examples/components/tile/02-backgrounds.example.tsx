// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Tile } from '@interlink/react/tile';

/** Title: Backgrounds and borders */
export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <Tile label="Design" backgroundColor="color.background.accent.purple.subtler">🎨</Tile>
      <Tile label="Launch" backgroundColor="color.background.accent.orange.subtler">🚀</Tile>
      <Tile label="Notes" backgroundColor="color.background.accent.green.subtler">📝</Tile>
      <Tile label="Archive" hasBorder backgroundColor="transparent">📦</Tile>
    </Inline>
  );
}
