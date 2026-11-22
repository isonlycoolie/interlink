// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import FilterIcon from '@interlink/icons/core/filter';
import ProjectIcon from '@interlink/icons/core/project';
import SearchIcon from '@interlink/icons/core/search';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import { AvatarGroup } from '@interlink/react/avatar';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button, IconButton } from '@interlink/react/button';
import { PageHeader } from '@interlink/react/page-header';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import { TextField } from '@interlink/react/textfield';
import { useState } from 'react';
import { AppChrome, avatars } from '../shared/chrome';
import { Board } from './board';
import type { Item } from './data';
import { ItemPanel } from './item-panel';
import { BoardNav } from './side-nav';
import { ViewPlaceholder } from './views';

const product = { name: 'Lumen Projects', icon: ProjectIcon, color: 'brand' as const };
const VIEWS = ['Summary', 'Timeline', 'Backlog', 'Board', 'List'];

/** A sprint board in the app frame: views as tabs, a toolbar, four balanced columns, and details in a side panel. */
export default function ProjectBoardScreen() {
  const [open, setOpen] = useState<Item | null>(null);
  const [query, setQuery] = useState('');
  return (
    <AppChrome product={product} sideNav={<BoardNav />} panel={open ? <ItemPanel item={open} onMove={setOpen} onClose={() => setOpen(null)} /> : undefined}>
      <Tabs id="board-views" defaultSelected={3}>
        <PageHeader
          breadcrumbs={
            <Breadcrumbs>
              <BreadcrumbsItem text="Spaces" href="#spaces" />
              <BreadcrumbsItem text="Payments" href="#payments" />
            </Breadcrumbs>
          }
          actions={
            <>
              <Button>Share</Button>
              <Button appearance="primary">Complete sprint</Button>
              <IconButton icon={MoreIcon} label="More board actions" />
            </>
          }
          bottomBar={
            <TabList aria-label="Views">
              {VIEWS.map((v) => (
                <Tab key={v}>{v}</Tab>
              ))}
            </TabList>
          }
        >
          Payments sprint 14
        </PageHeader>
        {VIEWS.map((v) => (
          <TabPanel key={v}>
            {v === 'Board' ? (
              <>
                <div className="scr-toolbar">
                  <div className="scr-row">
                    <div className="scr-toolbar-search">
                      <TextField aria-label="Search board" placeholder="Search board" value={query} onChange={(e) => setQuery(e.target.value)} elemBeforeInput={<SearchIcon label="" color="color.icon.subtle" />} />
                    </div>
                    <AvatarGroup data={avatars()} size="small" maxCount={5} label="Filter by assignee" />
                    <Button iconBefore={FilterIcon}>Filter</Button>
                  </div>
                  <div className="scr-row">
                    <span className="scr-muted">6 days left</span>
                    <Button appearance="subtle" iconAfter={ChevronDownIcon}>Group: Status</Button>
                  </div>
                </div>
                <Board query={query} openKey={open?.key} onOpen={setOpen} />
              </>
            ) : (
              <ViewPlaceholder name={v} />
            )}
          </TabPanel>
        ))}
      </Tabs>
    </AppChrome>
  );
}
