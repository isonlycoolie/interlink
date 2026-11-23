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
import './screens.css';
import './home-hero.css';
import './home-sections.css';
import './home-closing.css';
import './home-motion.css';
import './canvas.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { YouCursor } from '@/components/home/you-cursor';
import { Ruler } from '@/components/shell/ruler';
import { SiteHeader } from '@/components/shell/site-header';
import { themeScript } from '@/components/shell/theme-script';

export const metadata: Metadata = {
  title: { default: 'Interlink Design', template: '%s · Interlink Design' },
  description: 'An enterprise design system with guidance an AI can read and run.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteHeader />
        <Ruler />
        {children}
        <YouCursor />
      </body>
    </html>
  );
}
