// @interlink-dont tabs.order-by-importance
// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      
      <Tabs id="team">
        <TabList>
          <Tab>Learnings</Tab>
          <Tab>Projects</Tab>
          <Tab>Updates</Tab>
          <Tab>About</Tab>
        </TabList>
        <TabPanel><Text>Learnings view</Text></TabPanel>
        <TabPanel><Text>Projects view</Text></TabPanel>
        <TabPanel><Text>Updates view</Text></TabPanel>
        <TabPanel><Text>About view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
