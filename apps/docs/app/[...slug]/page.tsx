// SPDX-License-Identifier: Apache-2.0
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { mdxComponents } from '@/components/mdx';
import { PageHead, PageTabs, Toc, type TocItem } from '@/components/shell/page-parts';
import { SideNav, type NavNode } from '@/components/shell/side-nav';
import { source } from '@/lib/source';

interface Props {
  params: Promise<{ slug: string[] }>;
}

const TAB_ORDER = ['examples', 'code', 'usage', 'changelog'];

/** Sibling tab pages (examples, code, usage, changelog) for a component page. */
function tabsFor(slug: string[]) {
  const last = slug.at(-1) ?? '';
  const base = TAB_ORDER.includes(last) ? slug.slice(0, -1) : slug;
  return TAB_ORDER.map((t) => source.getPage([...base, t]))
    .filter((p) => p !== undefined)
    .map((p) => ({ url: p.url, label: p.data.title }));
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  const MDX = page.data.body;
  const status = Object.fromEntries(
    source.getPages().filter((p) => p.data.status).map((p) => [p.url, p.data.status as string]),
  );
  return (
    <div className="site-body">
      <SideNav tree={source.pageTree.children as unknown as NavNode[]} status={status} />
      <main id="main" className="site-main">
        <PageHead title={page.data.title} description={page.data.description} notice={page.data.notice} />
        <PageTabs tabs={tabsFor(slug)} current={page.url} />
        <div className="site-page-body">
          <article className="doc-article">
            <MDX components={mdxComponents} />
          </article>
          <Toc items={page.data.toc as unknown as TocItem[]} />
        </div>
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
