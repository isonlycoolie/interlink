// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      <Heading size="small">What&apos;s on</Heading>
      <Text>Discover what is happening across your organization.</Text>
      <Tabs id="whats-on" defaultSelected={1}>
        <TabList>
          <Tab>Following</Tab>
          <Tab>Popular</Tab>
          <Tab>Welcome</Tab>
          <Tab>Farewell</Tab>
        </TabList>
        <TabPanel><Text>Following view</Text></TabPanel>
        <TabPanel><Text>Popular view</Text></TabPanel>
        <TabPanel><Text>Welcome view</Text></TabPanel>
        <TabPanel><Text>Farewell view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
