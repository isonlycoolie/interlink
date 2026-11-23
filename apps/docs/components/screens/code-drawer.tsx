// SPDX-License-Identifier: Apache-2.0
'use client';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerSidebar } from '@interlink/react/drawer';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import type { ReactNode } from 'react';

export interface ScreenFile {
  name: string;
  code: ReactNode;
}

/** The screen's source in a side drawer, one tab per file, opened at the file asked for. */
export function CodeDrawer({ title, files, file, onClose }: { title: string; files: ScreenFile[]; file: number | null; onClose: () => void }) {
  return (
    <Drawer isOpen={file !== null} onClose={onClose} width="extended" enterFrom="right" label={`${title} source code`}>
      <DrawerSidebar>
        <DrawerCloseButton />
      </DrawerSidebar>
      <DrawerContent>
        <Tabs id="screen-files" defaultSelected={file ?? 0}>
          <TabList aria-label="Files">
            {files.map((f) => (
              <Tab key={f.name}>{f.name}</Tab>
            ))}
          </TabList>
          {files.map((f) => (
            <TabPanel key={f.name}>
              <div className="screen-code">{f.code}</div>
            </TabPanel>
          ))}
        </Tabs>
      </DrawerContent>
    </Drawer>
  );
}
