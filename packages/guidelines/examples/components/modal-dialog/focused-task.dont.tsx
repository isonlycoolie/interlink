// @interlink-dont modal-dialog.focused-task
// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { Checkbox } from '@interlink/react/checkbox';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '@interlink/react/modal-dialog';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import { ModalShape } from '../../../src/kit';

export default function Example() {
  return (
    <ModalShape width="24rem">
      <ModalHeader>
        <ModalTitle>Share</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Tabs id="share-tabs">
          <TabList>
            <Tab>Permissions</Tab>
            <Tab>Admins</Tab>
            <Tab>Public</Tab>
          </TabList>
          <TabPanel>
            <Stack space="space.100">
              <Checkbox label="Anyone in the space can view" defaultChecked />
              <Checkbox label="Anyone in the space can edit" />
              <Checkbox label="Notify watchers of changes" />
              <Checkbox label="Allow comments" defaultChecked />
              <Checkbox label="Allow exports" />
            </Stack>
          </TabPanel>
          <TabPanel>
            <Text>Admins</Text>
          </TabPanel>
          <TabPanel>
            <Text>Public link</Text>
          </TabPanel>
        </Tabs>
      </ModalBody>
      <ModalFooter>
        <Button appearance="subtle">Cancel</Button>
        <Button appearance="primary">Share</Button>
      </ModalFooter>
    </ModalShape>
  );
}
