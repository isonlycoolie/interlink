// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import PersonAvatarIcon from '@interlink/icons/core/person-avatar';
import { Card, Gap, Skeleton } from '../../../src/kit';

/** Supporting context is small and close; the title leads. */
export default function Example() {
  return (
    <Card width="26rem" padding="space.300">
      <Text size="medium" color="color.text.subtle">Projects / Northwind</Text>
      <Gap space="space.050" verdict="good" />
      <Heading size="xlarge">Design review 101</Heading>
      <Gap space="space.300" />
      <Inline space="space.100" alignBlock="center">
        <PersonAvatarIcon label="" color="color.icon.subtle" />
        <Stack space="space.075" grow="fill">
          <Skeleton width="20%" size="small" />
          <Skeleton width="55%" size="small" />
        </Stack>
      </Inline>
      <Gap space="space.300" />
      <Stack space="space.100">
        <Skeleton size="body" />
        <Skeleton size="body" />
        <Skeleton width="70%" size="body" />
      </Stack>
    </Card>
  );
}
