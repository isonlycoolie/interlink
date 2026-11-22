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
      <ModalBody><Text>A copy of this page will be added to the same space.</Text></ModalBody>
      <ModalFooter>
        <Button appearance="subtle">Cancel</Button>
        <Button appearance="primary">Duplicate</Button>
      </ModalFooter>
    </ModalShape>
  );
}
