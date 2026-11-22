// SPDX-License-Identifier: Apache-2.0
import { MetricText, Text } from '@interlink/react/primitives';
import { Donut } from '../../../src/kit';

export default function Example() {
  return (
    <Donut segments={[{ value: 90, token: 'color.chart.categorical.1' }, { value: 10, token: 'color.chart.categorical.4' }]}>
      <MetricText size="large">10%</MetricText>
      <Text size="small" color="color.text.subtle">capacity</Text>
    </Donut>
  );
}
