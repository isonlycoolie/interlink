// @interlink-dont tabs.short-list
// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <div style={{ width: '24rem', overflow: 'hidden' }}>
      <Stack space="space.150">
      
      <Tabs id="profile" defaultSelected={1}>
        <TabList>
          <Tab>Profile photo</Tab>
          <Tab>Header image</Tab>
          <Tab>Personal information</Tab>
          <Tab>Pipelines</Tab>
          <Tab>Notifications</Tab>
          <Tab>Security</Tab>
          <Tab>Connected apps</Tab>
        </TabList>
        <TabPanel><Text>Profile photo view</Text></TabPanel>
        <TabPanel><Text>Header image view</Text></TabPanel>
        <TabPanel><Text>Personal information view</Text></TabPanel>
        <TabPanel><Text>Pipelines view</Text></TabPanel>
        <TabPanel><Text>Notifications view</Text></TabPanel>
        <TabPanel><Text>Security view</Text></TabPanel>
        <TabPanel><Text>Connected apps view</Text></TabPanel>
      </Tabs>
    </Stack>
    </div>
  );
}
