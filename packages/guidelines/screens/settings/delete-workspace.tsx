// SPDX-License-Identifier: Apache-2.0
'use client';
import { Button } from '@interlink/react/button';
import { Label } from '@interlink/react/form';
import { ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, ModalTransition } from '@interlink/react/modal-dialog';
import { Stack, Text } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';
import { useState } from 'react';

/** A destructive action behind a confirm dialog that asks people to type the name. */
export function DeleteWorkspace({ name }: { name: string }) {
  const [isOpen, setOpen] = useState(false);
  const [typed, setTyped] = useState('');
  const close = () => {
    setOpen(false);
    setTyped('');
  };
  return (
    <>
      <Button appearance="danger" onClick={() => setOpen(true)}>
        Delete workspace
      </Button>
      <ModalTransition>
        {isOpen ? (
          <ModalDialog onClose={close} width="small">
            <ModalHeader>
              <ModalTitle appearance="danger">Delete {name}?</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Stack space="space.150">
                <Text>Every project, page and file in this workspace will be deleted. You can&apos;t undo this.</Text>
                <Stack space="space.050">
                  <Label htmlFor="confirm-name">Type the workspace name to confirm</Label>
                  <TextField id="confirm-name" value={typed} onChange={(e) => setTyped(e.target.value)} autoComplete="off" />
                </Stack>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={close}>
                Cancel
              </Button>
              <Button appearance="danger" isDisabled={typed !== name} onClick={close}>
                Delete
              </Button>
            </ModalFooter>
          </ModalDialog>
        ) : null}
      </ModalTransition>
    </>
  );
}
