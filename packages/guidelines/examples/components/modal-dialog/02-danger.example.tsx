// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { Text } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, ModalTransition } from '@interlink/react/modal-dialog';

/** Title: Danger */
export default function Example() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button appearance="danger" onClick={() => setOpen(true)}>
        Delete project
      </Button>
      <ModalTransition>
        {isOpen ? (
          <ModalDialog onClose={() => setOpen(false)}>
            <ModalHeader hasCloseButton>
              <ModalTitle appearance="danger">Delete project</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Text>The project and all of its work items will be deleted. This cannot be undone.</Text>
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button appearance="danger" onClick={() => setOpen(false)}>
                Delete
              </Button>
            </ModalFooter>
          </ModalDialog>
        ) : null}
      </ModalTransition>
    </>
  );
}
