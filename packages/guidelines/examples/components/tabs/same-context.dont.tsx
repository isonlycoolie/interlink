// @interlink-dont tabs.same-context
// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      <Heading size="small">Your work</Heading>
      <Tabs id="your-work" defaultSelected={1}>
        <TabList>
          <Tab>All projects</Tab>
          <Tab>Completed projects</Tab>
          <Tab>Get involved</Tab>
        </TabList>
        <TabPanel><Text>All projects view</Text></TabPanel>
        <TabPanel><Text>Completed projects view</Text></TabPanel>
        <TabPanel><Text>Get involved view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
