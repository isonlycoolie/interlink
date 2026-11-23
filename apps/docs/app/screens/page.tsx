// SPDX-License-Identifier: Apache-2.0
import ArrowRightIcon from '@interlink/icons/core/arrow-right';
import { screens, type ScreenInfo } from '@interlink/guidelines/screens';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHead } from '@/components/shell/page-parts';
import { ScreenPreview } from '@/components/shell/screen-preview';

export const metadata: Metadata = {
  title: 'Screens',
  description: 'Full screens built only from Interlink: dashboards, settings and landing pages.',
};

const GROUPS = [
  { title: 'Product screens', text: 'Apps in the shared frame: top bar, side navigation, page and panel.', match: (s: ScreenInfo) => !s.slug.startsWith('landing-') },
  { title: 'Landing pages', text: 'Marketing sites made from the same tokens and components.', match: (s: ScreenInfo) => s.slug.startsWith('landing-') },
];

/** Index of the showcase screens, grouped, each with a live preview of the real screen. */
export default function ScreensPage() {
  return (
    <main id="main" className="site-main">
      <PageHead title="Screens" description="Full screens built only from Interlink components and tokens. Open one to use it, or view its code." />
      <div className="site-screens">
        {GROUPS.map((g) => (
          <section key={g.title} className="site-screens-group" aria-labelledby={`group-${g.title}`}>
            <h2 id={`group-${g.title}`}>{g.title}</h2>
            <p>{g.text}</p>
            <ul className="site-screens-grid">
              {screens.filter(g.match).map(({ slug, title, description, files, Component }) => (
                <li key={slug} className="site-screen-card">
                  <ScreenPreview>
                    <Component />
                  </ScreenPreview>
                  <div className="site-screen-card-body">
                    <h3 className="site-screen-card-title">
                      <Link href={`/screens/${slug}`} className="site-screen-card-link il-focusable">
                        {title}
                      </Link>
                    </h3>
                    <p className="site-screen-card-text">{description}</p>
                    <p className="site-screen-card-foot">
                      {files.length} files
                      <ArrowRightIcon label="" size="small" />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
