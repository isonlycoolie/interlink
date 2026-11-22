// @interlink-dont date-label.not-inline
// SPDX-License-Identifier: Apache-2.0
import { Heading, Stack, Text } from '@interlink/react/primitives';
import { DateLabel } from '@interlink/react/date-label';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="20rem">
      <Stack space="space.100">
        <Heading size="small">Launch planning</Heading>
        <Text>
          Sprint 24, the week of <DateLabel label="12 Apr 2026" /> brings the first meal suggestions to everyone who opted in.
        </Text>
      </Stack>
    </Card>
  );
}
