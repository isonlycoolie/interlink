// @interlink-dont typography.metric-for-chart-totals
// SPDX-License-Identifier: Apache-2.0
import { Inline, MetricText, Stack, Text } from '@interlink/react/primitives';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="24rem" padding="space.300">
      <Inline space="space.300">
        <Stack space="space.050"><Text size="small" color="color.text.subtle">Billing cycle</Text><MetricText size="small">Monthly</MetricText></Stack>
        <Stack space="space.050"><Text size="small" color="color.text.subtle">Next bill</Text><MetricText size="small">Jul 12</MetricText></Stack>
        <Stack space="space.050"><Text size="small" color="color.text.subtle">Estimate</Text><MetricText size="small">USD 500.00</MetricText></Stack>
      </Inline>
    </Card>
  );
}
