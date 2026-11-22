// SPDX-License-Identifier: Apache-2.0
import '@interlink/css/interlink.css';
import '@interlink/react/styles.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: { default: 'Interlink', template: '%s · Interlink' },
  description: 'An enterprise design system with guidance an AI can read and run.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
