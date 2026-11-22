// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack, Text } from '@interlink/react/primitives';

export default function Example() {
  return (
    <Stack space="space.100">
      <Heading size="xlarge">Leadership</Heading>
      <Heading size="small" as="h2">The best of both worlds</Heading>
      <Text as="p" size="large" color="color.text.subtle">Meet your goals and inspire your team by leading with care.</Text>
    </Stack>
  );
}
