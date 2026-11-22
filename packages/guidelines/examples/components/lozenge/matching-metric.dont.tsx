// @interlink-dont lozenge.matching-metric
// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';

export default function Example() {
  return (
    <Stack space="space.100" alignInline="center">
      <Lozenge appearance="accent-lime" trailingMetric="0.9">Completed</Lozenge>
      <Lozenge appearance="accent-magenta" trailingMetric="0.3">At risk</Lozenge>
    </Stack>
  );
}
