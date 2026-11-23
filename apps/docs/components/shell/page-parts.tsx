// SPDX-License-Identifier: Apache-2.0
import { SectionMessage } from '@interlink/react/section-message';
import Link from 'next/link';
import type { ReactNode } from 'react';

/** The page head on the canvas: an eyebrow, the title held in a selection box, its description and an optional notice. */
export function PageHead({ title, description, notice, eyebrow }: { title: ReactNode; description?: ReactNode; notice?: string; eyebrow?: string }) {
  return (
    <div className="site-page-head">
      <div className="site-page-head-inner">
        {eyebrow ? <p className="canvas-eyebrow">{eyebrow}</p> : null}
        <h1 className="site-page-title canvas-title">
          {title}
          <i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" />
        </h1>
        {description ? <p className="site-page-description">{description}</p> : null}
        {notice ? (
          <div className="site-page-notice">
            <SectionMessage appearance="information">{notice}</SectionMessage>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/** Tabs that link to the sibling pages of a component (Examples, Code, Usage, Changelog). */
export function PageTabs({ tabs, current }: { tabs: { url: string; label: string }[]; current: string }) {
  if (tabs.length < 2) return null;
  return (
    <nav className="site-tabs" aria-label="Page sections">
      {tabs.map((t) => (
        <Link key={t.url} href={t.url} className="site-tab il-focusable" aria-current={t.url === current ? 'page' : undefined}>
          {t.label}
        </Link>
      ))}
    </nav>
  );
}

export interface TocItem {
  title: ReactNode;
  url: string;
  depth: number;
}

/** "Contents" list of the page's headings. */
export function Toc({ items }: { items: TocItem[] }) {
  const list = items.filter((i) => i.depth >= 2 && i.depth <= 3);
  if (!list.length) return null;
  return (
    <aside className="site-toc" aria-label="Contents">
      <p className="site-toc-title">Contents</p>
      <ul>
        {list.map((i) => (
          <li key={i.url} data-depth={i.depth}>
            <a href={i.url} className="site-toc-link il-focusable">
              {i.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
