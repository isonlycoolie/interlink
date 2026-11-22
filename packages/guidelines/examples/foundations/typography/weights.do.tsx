// SPDX-License-Identifier: Apache-2.0
import BacklogIcon from '@interlink/icons/core/backlog';
import BoardIcon from '@interlink/icons/core/board';
import ChartTrendIcon from '@interlink/icons/core/chart-trend';
import { Heading, Stack, Text } from '@interlink/react/primitives';

export default function Example() {
  return (
    <Stack space="space.050">
      <Text color="color.text.subtle">Projects / North Coffee</Text>
      <Heading size="large">Backlog</Heading>
    </Stack>
  );
}
