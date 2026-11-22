// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Tile } from '@interlink/react/tile';

/** Title: Sizes */
export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <Tile label="Rocket" size="xxsmall">🚀</Tile>
      <Tile label="Rocket" size="xsmall">🚀</Tile>
      <Tile label="Rocket" size="small">🚀</Tile>
      <Tile label="Rocket" size="medium">🚀</Tile>
      <Tile label="Rocket" size="large">🚀</Tile>
      <Tile label="Rocket" size="xlarge">🚀</Tile>
    </Inline>
  );
}
