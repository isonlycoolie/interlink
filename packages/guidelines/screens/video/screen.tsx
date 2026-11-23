// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import VideoIcon from '@interlink/icons/core/video';
import { Button } from '@interlink/react/button';
import { Checkbox } from '@interlink/react/checkbox';
import { Tab, TabList, TabPanel, Tabs } from '@interlink/react/tabs';
import { useState } from 'react';
import { AppFrame } from '../shared/frame';
import { CLIPS, VideoCard } from './cards';
import { VideoNav } from './side-nav';

const FILTERS = ['Video type', 'Access', 'Activity', 'Upload date', 'Newest to oldest'];

/** The video library: recordings as cards behind filters, with select-all for bulk actions. */
export default function VideoScreen() {
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const all = picked.size === CLIPS.length;
  const toggle = (id: string) => setPicked((s) => {
    const next = new Set(s);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  });
  return (
    <AppFrame app={{ name: 'Video', icon: VideoIcon, color: 'blue' }} sideNav={<VideoNav />}>
      <div className="scr-library">
        <header className="scr-library-head">
          <div>
            <p className="scr-eyebrow">Library</p>
            <h1 className="scr-display">Videos</h1>
          </div>
          <div className="scr-row">
            <Button>New folder</Button>
            <Button appearance="primary" iconAfter={ChevronDownIcon}>New video</Button>
          </div>
        </header>
        <Tabs id="library-tabs">
          <div className="scr-library-tabs">
            <TabList aria-label="Library">
              <Tab>Videos</Tab>
              <Tab>Screenshots</Tab>
              <Tab>Archive</Tab>
            </TabList>
            <span className="scr-muted-body">{CLIPS.length} videos</span>
          </div>
          <TabPanel>
            <div className="scr-library-body">
              <div className="scr-library-bar">
                <Checkbox label={picked.size ? `${picked.size} selected` : 'Select all videos'} isChecked={all} isIndeterminate={picked.size > 0 && !all} onChange={() => setPicked(all ? new Set() : new Set(CLIPS.map((c) => c.id)))} />
                <div className="scr-row">
                  {FILTERS.map((f) => <Button key={f} iconAfter={ChevronDownIcon}>{f}</Button>)}
                </div>
              </div>
              <div className="scr-clips">
                {CLIPS.map((c) => <VideoCard key={c.id} clip={c} selected={picked.has(c.id)} onSelect={() => toggle(c.id)} />)}
              </div>
            </div>
          </TabPanel>
          <TabPanel><p className="scr-muted-body scr-project-empty">Screenshots will appear here.</p></TabPanel>
          <TabPanel><p className="scr-muted-body scr-project-empty">Archived videos will appear here.</p></TabPanel>
        </Tabs>
      </div>
    </AppFrame>
  );
}
