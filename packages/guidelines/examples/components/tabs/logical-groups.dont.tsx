// @interlink-dont tabs.logical-groups
// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      
      <Tabs id="home" defaultSelected={1}>
        <TabList>
          <Tab>Worked on</Tab>
          <Tab>Paired</Tab>
          <Tab>Get involved</Tab>
        </TabList>
        <TabPanel><Text>Worked on view</Text></TabPanel>
        <TabPanel><Text>Paired view</Text></TabPanel>
        <TabPanel><Text>Get involved view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
