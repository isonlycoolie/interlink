// SPDX-License-Identifier: Apache-2.0
import CheckCircleIcon from '@interlink/icons/core/check-circle';
import ChartPieIcon from '@interlink/icons/core/chart-pie';
import { Inline, MetricText, Stack, Text } from '@interlink/react/primitives';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.100">
      <Card width="20rem" padding="space.200">
        <Inline space="space.150" alignBlock="center">
          <CheckCircleIcon label="" color="color.icon.subtle" />
          <Stack><MetricText size="small">2 complete</MetricText><Text size="small" color="color.text.subtle">2 of 5 projects complete</Text></Stack>
        </Inline>
      </Card>
      <Card width="20rem" padding="space.200">
        <Inline space="space.150" alignBlock="center">
          <ChartPieIcon label="" color="color.icon.subtle" />
          <Stack><MetricText size="small">3 in review</MetricText><Text size="small" color="color.text.subtle">3 of 5 projects in review</Text></Stack>
        </Inline>
      </Card>
    </Stack>
  );
}
