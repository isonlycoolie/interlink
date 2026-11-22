// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { Tooltip } from '@interlink/react/tooltip';

/** Title: Position */
export default function Example() {
  return (
    <Inline space="space.100">
      <Tooltip content="Above" position="top"><Button>Top</Button></Tooltip>
      <Tooltip content="Below" position="bottom"><Button>Bottom</Button></Tooltip>
      <Tooltip content="To the right" position="right"><Button>Right</Button></Tooltip>
    </Inline>
  );
}
