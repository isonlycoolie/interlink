// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      
      <Tabs id="board" defaultSelected={1}>
        <TabList>
          <Tab>Attention</Tab>
          <Tab>Activity</Tab>
          <Tab>Scorecards</Tab>
        </TabList>
        <TabPanel><Text>Attention view</Text></TabPanel>
        <TabPanel><Text>Activity view</Text></TabPanel>
        <TabPanel><Text>Scorecards view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
