// @interlink-dont tabs.shared-above
// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack, Text } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      <Heading size="small">What&apos;s on</Heading>
      <Tabs id="whats-on" defaultSelected={1}>
        <TabList>
          <Tab>Following</Tab>
          <Tab>Popular</Tab>
          <Tab>Welcome</Tab>
          <Tab>Farewell</Tab>
        </TabList>
        <TabPanel><Text>Discover what is happening across your organization.</Text></TabPanel>
        <TabPanel><Text>Discover what is happening across your organization.</Text></TabPanel>
        <TabPanel><Text>Discover what is happening across your organization.</Text></TabPanel>
        <TabPanel><Text>Discover what is happening across your organization.</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
