// @interlink-dont typography.weights
// SPDX-License-Identifier: Apache-2.0
import BacklogIcon from '@interlink/icons/core/backlog';
import BoardIcon from '@interlink/icons/core/board';
import ChartTrendIcon from '@interlink/icons/core/chart-trend';
import { Inline, Stack, Text } from '@interlink/react/primitives';

export default function Example() {
  return (
    <Stack space="space.200">
      <Inline space="space.150" alignBlock="center"><BacklogIcon label="" /><Text weight="bold">Backlog</Text></Inline>
      <Inline space="space.150" alignBlock="center"><BoardIcon label="" /><Text weight="bold">Board</Text></Inline>
      <Inline space="space.150" alignBlock="center"><ChartTrendIcon label="" /><Text weight="bold">Reports</Text></Inline>
    </Stack>
  );
}
