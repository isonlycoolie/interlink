// SPDX-License-Identifier: Apache-2.0
import { screens } from '@interlink/guidelines/screens';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ScreenLayout } from '@/components/screens/screen-layout';

export const metadata: Metadata = {
  title: 'Screens',
  description: 'Full screens built only from Interlink: dashboards and landing pages you can preview, read and install.',
};

/** Screens open on the first one, with every screen in the side navigation. */
export default function ScreensPage() {
  const first = screens[0];
  if (!first) notFound();
  return <ScreenLayout screen={first} />;
}
