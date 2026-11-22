// SPDX-License-Identifier: Apache-2.0
import { Anchor, Box, Heading, Stack, Text, xcss } from '@interlink/react/primitives';

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
      </Stack>
    </Box>
  );
}
