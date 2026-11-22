// @interlink-dont typography.chart-titles-heading
// SPDX-License-Identifier: Apache-2.0
import { MetricText, Stack } from '@interlink/react/primitives';
import { Bars, Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.200">
        <MetricText size="large" as="div">Work completed over time</MetricText>
        <Bars values={[320, 180, 360, 260]} />
      </Stack>
    </Card>
  );
}
