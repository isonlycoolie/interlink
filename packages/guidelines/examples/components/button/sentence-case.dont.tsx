// @interlink-dont button.sentence-case
// SPDX-License-Identifier: Apache-2.0
import { Inline } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';

export default function Example() {
  return (
    <Inline space="space.200">
      <Button appearance="primary">Create Work Item</Button>
      <Button appearance="primary">CREATE WORK ITEM</Button>
    </Inline>
  );
}
