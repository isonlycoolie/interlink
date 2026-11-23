// SPDX-License-Identifier: Apache-2.0
'use client';
import AngleBracketsIcon from '@interlink/icons/core/angle-brackets';
import FullscreenIcon from '@interlink/icons/core/fullscreen-enter';
import { Button, LinkButton } from '@interlink/react/button';
import { SegmentedControl } from '@interlink/react/segmented-control';
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';
import { CodeDrawer, type ScreenFile } from './code-drawer';
import { Stage, type Viewport } from './stage';

export const VIEW_OPTIONS = [
  { value: 'desktop', label: 'Desktop' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'mobile', label: 'Mobile' },
];

export interface ScreenDocProps {
  slug: string;
  title: string;
  files: ScreenFile[];
  builtWith: string[];
  install: ReactNode;
  usage: ReactNode;
  children: ReactNode;
}

/** A screen as a docs page: a live, scaled preview with device widths in the middle, and how to use it on the right. */
export function ScreenDoc({ slug, title, files, builtWith, install, usage, children }: ScreenDocProps) {
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [file, setFile] = useState<number | null>(null);
  useEffect(() => {
    if (window.innerWidth < 720) setViewport('mobile');
    else if (window.innerWidth < 1100) setViewport('tablet');
  }, []);
  return (
    <div className="screen-doc">
      <div className="screen-doc-main">
        <div className="screen-toolbar">
          <SegmentedControl label="Preview width" options={VIEW_OPTIONS} value={viewport} onChange={(v) => setViewport(v as Viewport)} />
          <span className="screen-toolbar-end">
            <Button iconBefore={AngleBracketsIcon} onClick={() => setFile(0)}>View code</Button>
            <LinkButton appearance="primary" iconBefore={FullscreenIcon} href={`/screens/${slug}/full`}>Full screen</LinkButton>
          </span>
        </div>
        <Stage viewport={viewport}>{children}</Stage>
        <div className="screen-use">
          <section>
            <h2>Install</h2>
            <p>Add the packages the screen is built from.</p>
            {install}
          </section>
          <section>
            <h2>Use it</h2>
            <p>Import the styles once, then render the screen in any page.</p>
            {usage}
          </section>
        </div>
      </div>
      <aside className="screen-rail" aria-label="About this screen">
        <section>
          <h2>Built with</h2>
          <ul className="screen-chips">
            {builtWith.map((c) => (
              <li key={c}><Link href={`/components/${c}`}>{c.replace(/-/g, ' ')}</Link></li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Files</h2>
          <ul className="screen-files">
            {files.map((f, i) => (
              <li key={f.name}><button type="button" className="il-focusable" onClick={() => setFile(i)}>{f.name}</button></li>
            ))}
          </ul>
        </section>
      </aside>
      <CodeDrawer key={file ?? -1} title={title} files={files} file={file} onClose={() => setFile(null)} />
    </div>
  );
}
