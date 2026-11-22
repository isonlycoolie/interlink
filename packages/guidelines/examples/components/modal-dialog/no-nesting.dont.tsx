// @interlink-dont modal-dialog.no-nesting
// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '@interlink/react/modal-dialog';
import { ModalShape } from '../../../src/kit';

export default function Example() {
  return (
    <ModalShape width="24rem">
      <ModalHeader>
        <ModalTitle>Duplicate page</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Stack space="space.150">
          <Text>The copy will be added as a child page of Roadmap.</Text>
          <ModalShape width="18rem" blanket={false}>
            <ModalHeader>
              <ModalTitle>Select location</ModalTitle>
            </ModalHeader>
            <ModalBody><Text>Choose a space for the copy.</Text></ModalBody>
            <ModalFooter>
              <Button appearance="subtle">Cancel</Button>
              <Button appearance="primary">Confirm</Button>
            </ModalFooter>
          </ModalShape>
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button appearance="subtle">Cancel</Button>
        <Button appearance="primary">Confirm</Button>
      </ModalFooter>
    </ModalShape>
  );
}
