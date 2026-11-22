// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { Heading, Stack, Text } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerSidebar } from '@interlink/react/drawer';

/** Title: Default */
export default function Example() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open drawer</Button>
      <Drawer isOpen={isOpen} onClose={() => setOpen(false)} label="Project details">
        <DrawerSidebar>
          <DrawerCloseButton />
        </DrawerSidebar>
        <DrawerContent>
          <Stack space="space.100">
            <Heading size="medium">Project details</Heading>
            <Text>Owners, dates and links for this project.</Text>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
}
