// @interlink-dont tabs.short-labels
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
          <Tab>Recently viewed pages in this space</Tab>
          <Tab>Starred files from other people</Tab>
        </TabList>
        <TabPanel><Text>Recently viewed pages in this space view</Text></TabPanel>
        <TabPanel><Text>Starred files from other people view</Text></TabPanel>
      </Tabs>
    </Stack>
  );
}
