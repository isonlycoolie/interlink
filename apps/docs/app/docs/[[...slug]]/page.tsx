// SPDX-License-Identifier: Apache-2.0
import { Box, Heading, Stack, Text, xcss } from '@interlink/react/primitives';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { source } from '@/lib/source';

const article = xcss({ maxWidth: '48rem', paddingBlock: 'space.800', paddingInline: 'space.400' });

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  const MDX = page.data.body;
  return (
    <Box as="main" xcss={article}>
      <Stack space="space.200">
        <Heading size="xlarge" as="h1">
          {page.data.title}
        </Heading>
        {page.data.description ? (
          <Text size="large" color="color.text.subtle">
            {page.data.description}
          </Text>
        ) : null}
        <div>
          <MDX />
        </div>
      </Stack>
    </Box>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  return { title: page.data.title, description: page.data.description };
}
