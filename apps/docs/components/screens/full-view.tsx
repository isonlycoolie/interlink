// SPDX-License-Identifier: Apache-2.0
'use client';
import AngleBracketsIcon from '@interlink/icons/core/angle-brackets';
import ArrowLeftIcon from '@interlink/icons/core/arrow-left';
import CheckMarkIcon from '@interlink/icons/core/check-mark';
import CopyIcon from '@interlink/icons/core/copy';
import { Button } from '@interlink/react/button';
import { SegmentedControl } from '@interlink/react/segmented-control';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import { CodeDrawer, type ScreenFile } from './code-drawer';
import { VIEW_OPTIONS } from './screen-doc';
import { VIEWPORTS, type Viewport } from './stage';

export interface FullViewProps {
  slug: string;
  title: string;
  others: { slug: string; title: string }[];
  files: ScreenFile[];
  install: string;
  children: ReactNode;
}

/** The screen on its own: one slim bar to go back, switch screen, pick a width, read the code or copy the install. */
export function FullView({ slug, title, others, files, install, children }: FullViewProps) {
  const router = useRouter();
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [file, setFile] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(install);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  return (
    <div className="screen-full" data-viewport={viewport}>
      <div className="screen-full-bar">
        <Link href={`/screens/${slug}`} className="screen-full-back il-focusable" aria-label="Back to the screen page">
          <ArrowLeftIcon label="" color="currentColor" size="small" />
        </Link>
        <label className="screen-full-pick">
          <span className="il-visually-hidden">Screen</span>
          <select value={slug} onChange={(e) => router.push(`/screens/${e.target.value}/full`)}>
            {others.map((o) => <option key={o.slug} value={o.slug}>{o.title}</option>)}
          </select>
        </label>
        <span className="screen-full-width">{VIEWPORTS[viewport]}px</span>
        <SegmentedControl label="Preview width" options={VIEW_OPTIONS} value={viewport} onChange={(v) => setViewport(v as Viewport)} />
        <Button spacing="compact" iconBefore={AngleBracketsIcon} onClick={() => setFile(0)}>View code</Button>
        <Button spacing="compact" appearance="primary" iconBefore={copied ? CheckMarkIcon : CopyIcon} onClick={copy}>{copied ? 'Copied' : 'Copy install'}</Button>
      </div>
      <div className="screen-full-stage">
        <div className="screen-full-canvas" style={{ width: viewport === 'desktop' ? '100%' : VIEWPORTS[viewport] }}>
          {children}
        </div>
      </div>
      <CodeDrawer key={file ?? -1} title={title} files={files} file={file} onClose={() => setFile(null)} />
    </div>
  );
}
