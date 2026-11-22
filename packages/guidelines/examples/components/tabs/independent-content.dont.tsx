// @interlink-dont tabs.independent-content
// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      
      <Tabs id="quotes">
        <TabList>
          <Tab>Quote number</Tab>
          <Tab>Status</Tab>
          <Tab>Quote total</Tab>
          <Tab>Customer</Tab>
        </TabList>
        <TabPanel><Text>Quote number view</Text></TabPanel>
        <TabPanel><Text>Status view</Text></TabPanel>
        <TabPanel><Text>Quote total view</Text></TabPanel>
        <TabPanel><Text>Customer view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
