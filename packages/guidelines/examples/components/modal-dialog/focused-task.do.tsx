// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { TextField } from '@interlink/react/textfield';
import { Label } from '@interlink/react/form';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '@interlink/react/modal-dialog';
import { ModalShape } from '../../../src/kit';

export default function Example() {
  return (
    <ModalShape width="22rem">
      <ModalHeader>
        <ModalTitle>Share</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Stack space="space.050">
          <Label htmlFor="share-with">Share with</Label>
          <TextField id="share-with" placeholder="Names or teams" />
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button appearance="subtle">Cancel</Button>
        <Button appearance="primary">Share</Button>
      </ModalFooter>
    </ModalShape>
  );
}
