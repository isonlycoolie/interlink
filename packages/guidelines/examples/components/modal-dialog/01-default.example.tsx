// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { Text } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, ModalTransition } from '@interlink/react/modal-dialog';

/** Title: Default */
export default function Example() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Duplicate page
      </Button>
      <ModalTransition>
        {isOpen ? (
          <ModalDialog onClose={() => setOpen(false)}>
            <ModalHeader hasCloseButton>
              <ModalTitle>Duplicate page</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Text>A copy of this page will be added to the same space, with its comments left out.</Text>
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button appearance="primary" onClick={() => setOpen(false)}>
                Duplicate
              </Button>
            </ModalFooter>
          </ModalDialog>
        ) : null}
      </ModalTransition>
    </>
  );
}
