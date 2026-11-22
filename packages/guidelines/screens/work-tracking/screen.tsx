// SPDX-License-Identifier: Apache-2.0
'use client';
import SearchIcon from '@interlink/icons/core/search';
import ShowMoreHorizontalIcon from '@interlink/icons/core/show-more-horizontal';
import { AvatarGroup } from '@interlink/react/avatar';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button, IconButton } from '@interlink/react/button';
import { DropdownItem, DropdownItemGroup, DropdownMenu } from '@interlink/react/dropdown-menu';
import { DynamicTable } from '@interlink/react/dynamic-table';
import { FlagsProvider, useFlags } from '@interlink/react/flag';
import { Lozenge } from '@interlink/react/lozenge';
import { Heading, Inline, Stack } from '@interlink/react/primitives';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import { TextField } from '@interlink/react/textfield';
import { useState } from 'react';
import { Board } from './board';
import { ITEMS, PEOPLE, STATUS_APPEARANCE, type Status, type WorkItem } from './data';
import { ItemDrawer } from './item-drawer';
import { SideNav } from './side-nav';

function Project() {
  const { showFlag } = useFlags();
  const [items, setItems] = useState(ITEMS);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<WorkItem | null>(null);
  const shown = items.filter((i) => i.title.toLowerCase().includes(query.toLowerCase()));
  const setStatus = (item: WorkItem, status: Status) => {
    setItems((all) => all.map((i) => (i.key === item.key ? { ...i, status } : i)));
    setOpen({ ...item, status });
    showFlag({ title: `${item.key} moved to ${status}`, appearance: 'success', isAutoDismiss: true });
  };
  const rows = shown.map((i) => ({
    key: i.key,
    cells: [{ key: i.key, content: i.key }, { key: i.title, content: i.title }, { key: i.status, content: <Lozenge appearance={STATUS_APPEARANCE[i.status]}>{i.status}</Lozenge> }, { key: i.assignee, content: i.assignee }],
  }));
  return (
    <div className="scr-app">
      <SideNav />
      <main className="scr-main">
        <Stack space="space.200">
          <Breadcrumbs>
            <BreadcrumbsItem text="Projects" href="#projects" />
            <BreadcrumbsItem text="Website refresh" href="#project" />
          </Breadcrumbs>
          <Inline spread="space-between" alignBlock="center">
            <Heading size="large" as="h1">
              Board
            </Heading>
            <Inline space="space.100">
              <Button>Share</Button>
              <DropdownMenu label="More actions" trigger={({ testId, ...p }) => <IconButton {...p} icon={ShowMoreHorizontalIcon} label="More actions" />}>
                <DropdownItemGroup>
                  <DropdownItem>Configure board</DropdownItem>
                  <DropdownItem>Archive done items</DropdownItem>
                </DropdownItemGroup>
              </DropdownMenu>
            </Inline>
          </Inline>
          <Inline space="space.200" alignBlock="center">
            <div className="scr-search">
              <TextField aria-label="Search this board" placeholder="Search this board" value={query} onChange={(e) => setQuery(e.target.value)} elemBeforeInput={<SearchIcon label="" />} />
            </div>
            <AvatarGroup size="small" data={PEOPLE.map((name) => ({ name }))} label="Team members" />
          </Inline>
          <Tabs id="views">
            <TabList>
              <Tab>Board</Tab>
              <Tab>List</Tab>
            </TabList>
            <TabPanel>
              <Board items={shown} onOpen={setOpen} />
            </TabPanel>
            <TabPanel>
              <DynamicTable label="Work items" head={{ cells: [{ key: 'key', content: 'Key', isSortable: true }, { key: 'title', content: 'Summary', isSortable: true }, { key: 'status', content: 'Status', isSortable: true }, { key: 'assignee', content: 'Assignee', isSortable: true }] }} rows={rows} rowsPerPage={6} />
            </TabPanel>
          </Tabs>
        </Stack>
      </main>
      <ItemDrawer item={open} onClose={() => setOpen(null)} onStatus={setStatus} />
    </div>
  );
}

/** A team's project board: side navigation, filters, board and list views, item details and save flags. */
export default function WorkTrackingScreen() {
  return (
    <FlagsProvider>
      <Project />
    </FlagsProvider>
  );
}
