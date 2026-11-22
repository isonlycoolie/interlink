// SPDX-License-Identifier: Apache-2.0
import { Text } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '@interlink/react/modal-dialog';
import { ModalShape } from '../../../src/kit';

export default function Example() {
  return (
    <ModalShape width="22rem">
      <ModalHeader>
        <ModalTitle>Duplicate page</ModalTitle>
      </ModalHeader>
      <ModalBody><Text>The copy will be added as a child page of Roadmap.</Text></ModalBody>
      <ModalFooter>
        <Button appearance="subtle">Cancel</Button>
        <Button appearance="primary">Confirm</Button>
      </ModalFooter>
    </ModalShape>
  );
}
