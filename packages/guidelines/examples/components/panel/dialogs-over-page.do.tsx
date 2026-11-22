// SPDX-License-Identifier: Apache-2.0
import { AppShape, Cover, ModalShape, PageArea, PageLines } from '../../../src/kit';
import { Button } from '@interlink/react/button';
import { ModalFooter, ModalHeader, ModalTitle } from '@interlink/react/modal-dialog';
import { Panel } from '@interlink/react/navigation-system';

export default function Example() {
  return (
    <AppShape row height="17rem">
      <PageArea>
        <PageLines rows={5} />
      </PageArea>
      <Panel title="Fields">
        <PageLines rows={3} />
      </Panel>
      <Cover>
        <ModalShape width="15rem">
          <ModalHeader>
            <ModalTitle>Remove field?</ModalTitle>
          </ModalHeader>
          <ModalFooter>
            <Button appearance="subtle">Cancel</Button>
            <Button appearance="danger">Remove</Button>
          </ModalFooter>
        </ModalShape>
      </Cover>
    </AppShape>
  );
}
