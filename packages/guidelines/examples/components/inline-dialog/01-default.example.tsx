// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { Text } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { InlineDialog } from '@interlink/react/inline-dialog';

/** Title: Default */
export default function Example() {
  const [isOpen, setOpen] = useState(false);
  return (
    <InlineDialog isOpen={isOpen} onClose={() => setOpen(false)} content={<Text>Labels group pages so people can find related work.</Text>}>
      <Button appearance="subtle" isSelected={isOpen} onClick={() => setOpen(!isOpen)}>
        What are labels?
      </Button>
    </InlineDialog>
  );
}
