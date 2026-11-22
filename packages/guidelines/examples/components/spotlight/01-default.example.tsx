// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { Button } from '@interlink/react/button';
import { PopoverContent, PopoverProvider, PopoverTarget, SpotlightActions, SpotlightBody, SpotlightCard, SpotlightControls, SpotlightDismissControl, SpotlightFooter, SpotlightHeader, SpotlightHeadline, SpotlightPrimaryAction } from '@interlink/react/spotlight';

/** Title: Default */
export default function Example() {
  const [isOpen, setOpen] = useState(false);
  return (
    <PopoverProvider>
      <PopoverTarget>
        <Button appearance="primary" onClick={() => setOpen(true)}>
          Create
        </Button>
      </PopoverTarget>
      <PopoverContent placement="bottom-start" isVisible={isOpen} dismiss={() => setOpen(false)} done={() => setOpen(false)}>
        <SpotlightCard>
          <SpotlightHeader>
            <SpotlightHeadline>Create work here</SpotlightHeadline>
            <SpotlightControls>
              <SpotlightDismissControl />
            </SpotlightControls>
          </SpotlightHeader>
          <SpotlightBody>Add tasks, bugs and stories for your team from one place.</SpotlightBody>
          <SpotlightFooter>
            <SpotlightActions>
              <SpotlightPrimaryAction>Got it</SpotlightPrimaryAction>
            </SpotlightActions>
          </SpotlightFooter>
        </SpotlightCard>
      </PopoverContent>
    </PopoverProvider>
  );
}
