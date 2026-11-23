// SPDX-License-Identifier: Apache-2.0
'use client';
import AngleBracketsIcon from '@interlink/icons/core/angle-brackets';
import FullscreenIcon from '@interlink/icons/core/fullscreen-enter';
import { Button, LinkButton } from '@interlink/react/button';
import { SegmentedControl } from '@interlink/react/segmented-control';
import { useState, type ReactNode } from 'react';
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
  description: string;
  files: ScreenFile[];
  install: ReactNode;
  usage: ReactNode;
  children: ReactNode;
}

/** A screen as a docs page: a live, scaled preview with device widths in the middle, and how to use it on the right. */
export function ScreenDoc({ slug, title, description, files, install, usage, children }: ScreenDocProps) {
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [file, setFile] = useState<number | null>(null);
  return (
    <div className="screen-doc">
      <div className="screen-doc-main">
        <header className="screen-doc-head">
          <p className="canvas-eyebrow">Screens · {slug}.tsx</p>
          <h1 className="canvas-title">
            {title}
            <i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" />
          </h1>
          <p>{description}</p>
        </header>
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
      <CodeDrawer key={file ?? -1} title={title} files={files} file={file} onClose={() => setFile(null)} />
    </div>
  );
}
