// @interlink-dont typography.metric-for-chart-figures
// SPDX-License-Identifier: Apache-2.0
import { MetricText } from '@interlink/react/primitives';
import { Donut } from '../../../src/kit';

export default function Example() {
  return (
    <Donut segments={[{ value: 90, token: 'color.chart.categorical.1' }, { value: 10, token: 'color.chart.categorical.4' }]}>
      <MetricText size="large">10%</MetricText>
      <MetricText size="large">capacity</MetricText>
    </Donut>
  );
}
