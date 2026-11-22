// @interlink-dont typography.metric-for-short-stats
// SPDX-License-Identifier: Apache-2.0
import CheckCircleIcon from '@interlink/icons/core/check-circle';
import ChartPieIcon from '@interlink/icons/core/chart-pie';
import { Inline, MetricText, Stack, Text } from '@interlink/react/primitives';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem" padding="space.200">
      <Inline space="space.150" alignBlock="start">
        <ChartPieIcon label="" color="color.icon.subtle" />
        <Stack space="space.050">
          <MetricText size="small" as="div">5% of teams have a cycle time under or over seven days</MetricText>
          <Text size="small" color="color.text.subtle">Up 7% since last month</Text>
        </Stack>
      </Inline>
    </Card>
  );
}
