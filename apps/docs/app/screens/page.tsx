// SPDX-License-Identifier: Apache-2.0
import { screens } from '@interlink/guidelines/screens';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHead } from '@/components/shell/page-parts';

export const metadata: Metadata = {
  title: 'Screens',
  description: 'Full screens built only from Interlink: dashboards, settings and landing pages.',
};

/** Index of the showcase screens. */
export default function ScreensPage() {
  return (
    <main id="main" className="site-main">
      <PageHead title="Screens" description="Full screens built only from Interlink components and tokens. Open one to use it, or view its code." />
      <div className="site-screens-grid">
        {screens.map((s) => (
          <Link key={s.slug} href={`/screens/${s.slug}`} className="site-screen-card il-focusable">
            <span className="site-screen-card-title">{s.title}</span>
            <span className="site-screen-card-text">{s.description}</span>
            <span className="site-screen-card-files">{s.files.length} files</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
