// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      
      <Tabs id="team">
        <TabList>
          <Tab>About</Tab>
          <Tab>Updates</Tab>
          <Tab>Projects</Tab>
          <Tab>Learnings</Tab>
        </TabList>
        <TabPanel><Text>About view</Text></TabPanel>
        <TabPanel><Text>Updates view</Text></TabPanel>
        <TabPanel><Text>Projects view</Text></TabPanel>
        <TabPanel><Text>Learnings view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
