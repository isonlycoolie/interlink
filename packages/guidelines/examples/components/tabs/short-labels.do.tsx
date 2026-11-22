// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { TextField } from '@interlink/react/textfield';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';

export default function Example() {
  return (
    <Stack space="space.150">
      <TextField aria-label="Search" placeholder="Search" />
      <Tabs id="search">
        <TabList>
          <Tab>Pages</Tab>
          <Tab>Spaces</Tab>
          <Tab>People</Tab>
          <Tab>Files</Tab>
        </TabList>
        <TabPanel><Text>Pages view</Text></TabPanel>
        <TabPanel><Text>Spaces view</Text></TabPanel>
        <TabPanel><Text>People view</Text></TabPanel>
        <TabPanel><Text>Files view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
