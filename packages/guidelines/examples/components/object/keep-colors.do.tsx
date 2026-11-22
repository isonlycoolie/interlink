// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { ObjectIcon } from '@interlink/react/object';

export default function Example() {
  return (
    <Inline space="space.100" alignBlock="center">
      <ObjectIcon type="blog" />
      <ObjectIcon type="bug" />
      <ObjectIcon type="changes" />
      <ObjectIcon type="new-feature" />
      <ObjectIcon type="story" />
      <ObjectIcon type="code" />
    </Inline>
  );
}
