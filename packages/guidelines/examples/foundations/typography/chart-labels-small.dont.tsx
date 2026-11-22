// @interlink-dont typography.chart-labels-small
// SPDX-License-Identifier: Apache-2.0
import { Inline, MetricText, Text } from '@interlink/react/primitives';
import { Donut, Legend } from '../../../src/kit';

export default function Example() {
  return (
    <Inline space="space.300" alignBlock="center">
      <Donut segments={[{ value: 55, token: 'color.chart.categorical.1' }, { value: 30, token: 'color.chart.categorical.4' }, { value: 15, token: 'color.chart.categorical.3' }]}>
        <MetricText size="large">55%</MetricText>
        <Text size="small" color="color.text.subtle">complete</Text>
      </Donut>
      <Legend items={[{ label: 'On track', token: 'color.chart.categorical.1', count: 12 }, { label: 'Off track', token: 'color.chart.categorical.4', count: 6 }, { label: 'At risk', token: 'color.chart.categorical.3', count: 4 }]}>
        {(i) => (
          <Inline space="space.100" alignBlock="center">
            <MetricText size="small">{i.label}</MetricText>
            <MetricText size="small">{i.count}</MetricText>
          </Inline>
        )}
      </Legend>
    </Inline>
  );
}
