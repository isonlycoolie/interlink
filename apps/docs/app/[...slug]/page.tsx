// SPDX-License-Identifier: Apache-2.0
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { mdxComponents } from '@/components/mdx';
import { PageHead, PageTabs, Toc, type TocItem } from '@/components/shell/page-parts';
import { PageTransition } from '@/components/shell/page-transition';
import { SideNav, type NavNode } from '@/components/shell/side-nav';
import { source } from '@/lib/source';

interface Props {
  params: Promise<{ slug: string[] }>;
}

const TABS = [
  { suffix: [] as string[], label: 'Examples' },
  { suffix: ['code'], label: 'Code' },
  { suffix: ['usage'], label: 'Usage' },
];

/** Component pages live at components/<name>/{index,code,usage}; other pages have no tabs. */
function componentBase(slug: string[]) {
  return slug[0] === 'components' && slug.length >= 2 ? slug.slice(0, 2) : null;
}

function tabsFor(slug: string[]) {
  const base = componentBase(slug);
  if (!base) return [];
  return TABS.map((t) => ({ page: source.getPage([...base, ...t.suffix]), label: t.label }))
    .filter((t) => t.page !== undefined)
    .map((t) => ({ url: t.page!.url, label: t.label }));
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  const MDX = page.data.body;
  const base = componentBase(slug);
  const head = (base && source.getPage(base)) || page;
  const status = Object.fromEntries(
    source.getPages().filter((p) => p.data.status).map((p) => [p.url, p.data.status as string]),
  );
  return (
    <div className="site-body">
      <SideNav tree={source.pageTree.children as unknown as NavNode[]} status={status} />
      <main id="main" className="site-main">
        <PageTransition>
          <PageHead title={head.data.title} description={head.data.description} notice={head.data.notice} />
          <PageTabs tabs={tabsFor(slug)} current={page.url} />
          <div className="site-page-body">
            <article className="doc-article">
              <MDX components={mdxComponents} />
            </article>
            <Toc items={page.data.toc as unknown as TocItem[]} />
          </div>
        </PageTransition>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return source.generateParams().filter((p) => p.slug.length > 0);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  return { title: page.data.title, description: page.data.description };
}
