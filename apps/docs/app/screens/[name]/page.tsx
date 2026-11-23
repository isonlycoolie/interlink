// SPDX-License-Identifier: Apache-2.0
import { screens } from '@interlink/guidelines/screens';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { findScreen } from '@/components/screens/screen-data';
import { ScreenLayout } from '@/components/screens/screen-layout';

interface Props {
  params: Promise<{ name: string }>;
}

export default async function ScreenPage({ params }: Props) {
  const screen = findScreen((await params).name);
  if (!screen) notFound();
  return <ScreenLayout screen={screen} />;
}

export function generateStaticParams() {
  return screens.map((s) => ({ name: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const screen = findScreen((await params).name);
  if (!screen) notFound();
  return { title: `${screen.title} screen`, description: screen.description };
}
