// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { ObjectTile } from '@interlink/react/object';

/** Title: Object tiles */
export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <ObjectTile type="page" size="small" />
      <ObjectTile type="task" />
      <ObjectTile type="bug" size="large" />
      <ObjectTile type="story" size="large" isBold />
    </Inline>
  );
}
