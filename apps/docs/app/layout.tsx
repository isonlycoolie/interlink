// SPDX-License-Identifier: Apache-2.0
import '@interlink/css/interlink.css';
import '@interlink/icons/styles.css';
import '@interlink/illustrations/styles.css';
import '@interlink/react/styles.css';
import '@interlink/guidelines/kit.css';
import '@interlink/guidelines/screens/shared/frame.css';
import '@interlink/guidelines/screens/shared/parts.css';
import '@interlink/guidelines/screens/home/home.css';
import '@interlink/guidelines/screens/goals/goals.css';
import '@interlink/guidelines/screens/project/project.css';
import '@interlink/guidelines/screens/updates/updates.css';
import '@interlink/guidelines/screens/profile/profile.css';
import '@interlink/guidelines/screens/video/video.css';
import '@interlink/guidelines/screens/board/board.css';
import '@interlink/guidelines/screens/admin/admin.css';
import './shell.css';
import './content.css';
import './specimens.css';
import './spec-border.css';
import './screens.css';
import './home-hero.css';
import './home-sections.css';
import './home-closing.css';
import './home-sell.css';
import './home-motion.css';
import './canvas.css';
import './mobile.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { screensTree } from '@/components/screens/screen-data';
import { SiteHeader } from '@/components/shell/site-header';
import type { NavNode } from '@/components/shell/side-nav';
import { source } from '@/lib/source';
import { themeScript } from '@/components/shell/theme-script';

const DESCRIPTION = 'An enterprise design system with guidance an AI can read and run.';

export const metadata: Metadata = {
  metadataBase: new URL('https://interlink.denisivalence.tech'),
  title: { default: 'Interlink Design', template: '%s · Interlink Design' },
  description: DESCRIPTION,
  applicationName: 'Interlink Design',
  openGraph: { type: 'website', siteName: 'Interlink Design', title: 'Interlink Design', description: DESCRIPTION, url: '/', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Interlink Design' }] },
  twitter: { card: 'summary_large_image', title: 'Interlink Design', description: DESCRIPTION, images: ['/og.png'] },
};

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#FFFFFF' }, { media: '(prefers-color-scheme: dark)', color: '#1F1F21' }],
};

/** The trees the phone menu shows: the docs navigation and the screens list. */
function menuTrees() {
  const status = Object.fromEntries(source.getPages().filter((p) => p.data.status).map((p) => [p.url, p.data.status as string]));
  return { docs: source.pageTree.children as unknown as NavNode[], screens: screensTree(), status };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteHeader menu={menuTrees()} />
        {children}
      </body>
    </html>
  );
}
