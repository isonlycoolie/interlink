// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { ObjectIcon } from '@interlink/react/object';

/** Title: Objects */
export default function Example() {
  return (
    <Inline space="space.150" shouldWrap>
      <ObjectIcon type="page" />
      <ObjectIcon type="task" />
      <ObjectIcon type="story" />
      <ObjectIcon type="bug" />
      <ObjectIcon type="epic" />
      <ObjectIcon type="subtask" />
      <ObjectIcon type="idea" />
      <ObjectIcon type="incident" />
      <ObjectIcon type="pull-request" />
      <ObjectIcon type="whiteboard" />
    </Inline>
  );
}
