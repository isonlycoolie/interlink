// SPDX-License-Identifier: Apache-2.0
import { screens } from '@interlink/guidelines/screens';
import { Anchor, Box, Heading, Stack, Text, xcss } from '@interlink/react/primitives';
import Link from 'next/link';

const page = xcss({ maxWidth: '72rem', paddingBlock: 'space.1000', paddingInline: 'space.400' });
const cta = xcss({
  backgroundColor: 'color.background.brand.bold',
  color: 'color.text.inverse',
  paddingBlock: 'space.100',
  paddingInline: 'space.200',
  borderRadius: 'radius.small',
  textDecorationLine: 'none',
  ':hover': { backgroundColor: 'color.background.brand.bold.hovered' },
});

export default function Home() {
  return (
    <Box as="main" xcss={page}>
      <Stack space="space.300" alignInline="start">
        <Heading size="xxlarge" as="h1">
          Interlink
        </Heading>
        <Text size="large" color="color.text.subtle">
          An enterprise design system. Every Do and Don&apos;t is live code an AI can read and run.
        </Text>
        <Anchor href="/get-started" xcss={cta}>
          Get started
        </Anchor>
        <Stack space="space.200">
          <Heading size="large" as="h2">
            Screens
          </Heading>
          <Text color="color.text.subtle">Full dashboards, settings and landing pages built only from Interlink.</Text>
          <div className="site-landing-strip">
            {screens.map((s) => (
              <Link key={s.slug} href={`/screens/${s.slug}`} className="site-screen-card il-focusable">
                <span className="site-screen-card-title">{s.title}</span>
                <span className="site-screen-card-text">{s.description}</span>
              </Link>
            ))}
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
