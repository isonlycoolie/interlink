// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      
      <Tabs id="dms" defaultSelected={1}>
        <TabList>
          <Tab>Direct</Tab>
          <Tab>Watching</Tab>
        </TabList>
        <TabPanel><Text>Direct view</Text></TabPanel>
        <TabPanel><Text>Watching view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
