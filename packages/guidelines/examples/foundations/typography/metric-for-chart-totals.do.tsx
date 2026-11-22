// SPDX-License-Identifier: Apache-2.0
import { MetricText, Text } from '@interlink/react/primitives';
import { Donut } from '../../../src/kit';

export default function Example() {
  return (
    <Donut segments={[{ value: 75, token: 'color.chart.categorical.1' }, { value: 25, token: 'color.chart.neutral' }]}>
      <MetricText size="medium">$100.00</MetricText>
      <Text size="small" color="color.text.subtle">costs saved</Text>
    </Donut>
  );
}
