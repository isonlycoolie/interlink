// SPDX-License-Identifier: Apache-2.0
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { screens } from '@interlink/guidelines/screens';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CodeBlock } from '@/components/mdx/code-block';
import { ScreenFrame } from '@/components/shell/screen-frame';

interface Props {
  params: Promise<{ name: string }>;
}

/** Screen sources live in the guidelines package; they are read at build time for "View code". */
const SOURCE = path.join(process.cwd(), '..', '..', 'packages', 'guidelines', 'screens');

export default async function ScreenPage({ params }: Props) {
  const { name } = await params;
  const screen = screens.find((s) => s.slug === name);
  if (!screen) notFound();
  const files = await Promise.all(
    screen.files.map(async (file) => ({
      name: file,
      code: <CodeBlock code={await readFile(path.join(SOURCE, screen.slug, file), 'utf8')} lang={file.endsWith('.ts') ? 'ts' : 'tsx'} />,
    })),
  );
  const Screen = screen.Component;
  return (
    <ScreenFrame title={screen.title} files={files}>
      <Screen />
    </ScreenFrame>
  );
}

export function generateStaticParams() {
  return screens.map((s) => ({ name: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const screen = screens.find((s) => s.slug === name);
  if (!screen) notFound();
  return { title: `${screen.title} screen`, description: screen.description };
}
