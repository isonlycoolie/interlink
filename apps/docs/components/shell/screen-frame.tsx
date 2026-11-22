// SPDX-License-Identifier: Apache-2.0
'use client';
import AngleBracketsIcon from '@interlink/icons/core/angle-brackets';
import ArrowLeftIcon from '@interlink/icons/core/arrow-left';
import { Button } from '@interlink/react/button';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerSidebar } from '@interlink/react/drawer';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import Link from 'next/link';
import { useState, type ReactNode } from 'react';

/** Thin bar above a live screen with a way back and its source code in a drawer, one tab per file. */
export function ScreenFrame({ title, files, children }: { title: string; files: { name: string; code: ReactNode }[]; children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="site-screen">
      <div className="site-screen-bar">
        <Link href="/screens" className="site-screen-back il-focusable">
          <ArrowLeftIcon label="" size="small" />
          All screens
        </Link>
        <h1 className="site-screen-title">{title}</h1>
        <Button iconBefore={AngleBracketsIcon} onClick={() => setOpen(true)}>
          View code
        </Button>
      </div>
      <div className="site-screen-stage">{children}</div>
      <Drawer isOpen={isOpen} onClose={() => setOpen(false)} width="extended" enterFrom="right" label={`${title} source code`}>
        <DrawerSidebar>
          <DrawerCloseButton />
        </DrawerSidebar>
        <DrawerContent>
          <Tabs id="screen-files">
            <TabList aria-label="Files">
              {files.map((f) => (
                <Tab key={f.name}>{f.name}</Tab>
              ))}
            </TabList>
            {files.map((f) => (
              <TabPanel key={f.name}>
                <div className="site-screen-code">{f.code}</div>
              </TabPanel>
            ))}
          </Tabs>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
