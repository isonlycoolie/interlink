// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      
      <Tabs id="home" defaultSelected={1}>
        <TabList>
          <Tab>Worked on</Tab>
          <Tab>Viewed</Tab>
          <Tab>Assigned to me</Tab>
          <Tab>Starred</Tab>
        </TabList>
        <TabPanel><Text>Worked on view</Text></TabPanel>
        <TabPanel><Text>Viewed view</Text></TabPanel>
        <TabPanel><Text>Assigned to me view</Text></TabPanel>
        <TabPanel><Text>Starred view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
