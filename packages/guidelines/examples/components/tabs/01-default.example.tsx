// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

/** Title: Default */
export default function Example() {
  return (
    <Stack space="space.150">
      
      <Tabs id="overview">
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Board</Tab>
          <Tab>List</Tab>
          <Tab>Timeline</Tab>
        </TabList>
        <TabPanel><Text>Summary view</Text></TabPanel>
        <TabPanel><Text>Board view</Text></TabPanel>
        <TabPanel><Text>List view</Text></TabPanel>
        <TabPanel><Text>Timeline view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
