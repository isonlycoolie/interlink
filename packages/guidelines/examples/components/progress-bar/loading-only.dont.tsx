// @interlink-dont progress-bar.loading-only
// SPDX-License-Identifier: Apache-2.0
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { ProgressBar } from '@interlink/react/progress-bar';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="22rem">
      <Stack space="space.150">
        <Text size="small" weight="bold">Work in flight by assignee</Text>
        <Inline space="space.150" alignBlock="center"><Text size="small">Unassigned</Text><ProgressBar value={0.49} ariaLabel="Unassigned" /><Text size="small">49%</Text></Inline>
        <Inline space="space.150" alignBlock="center"><Text size="small">Amir</Text><ProgressBar value={0.67} ariaLabel="Amir" /><Text size="small">67%</Text></Inline>
        <Inline space="space.150" alignBlock="center"><Text size="small">Eva</Text><ProgressBar value={0.09} ariaLabel="Eva" /><Text size="small">9%</Text></Inline>
      </Stack>
    </Card>
  );
}
