// @interlink-dont typography.clear-heading-steps
// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack, Text } from '@interlink/react/primitives';

export default function Example() {
  return (
    <Stack space="space.100">
      <Heading size="large">Leadership</Heading>
      <Heading size="medium" as="h3">The best of both worlds</Heading>
      <Text as="p" size="large" color="color.text.subtle">Meet your goals and inspire your team by leading with care.</Text>
    </Stack>
  );
}
