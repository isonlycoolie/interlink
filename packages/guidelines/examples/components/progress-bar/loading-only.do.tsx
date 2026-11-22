// SPDX-License-Identifier: Apache-2.0
import { Heading, Inline, Stack, Text } from '@interlink/react/primitives';
import { ProgressBar } from '@interlink/react/progress-bar';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="20rem">
      <Stack space="space.150">
        <Heading size="small">Attach files</Heading>
        <Stack space="space.050"><Inline spread="space-between"><Text size="small">screenshot.png</Text><Text size="small" color="color.text.subtle">53 KB</Text></Inline><ProgressBar value={1} appearance="success" ariaLabel="screenshot.png uploaded" /></Stack>
        <Stack space="space.050"><Inline spread="space-between"><Text size="small">import.csv</Text><Text size="small" color="color.text.subtle">688 of 834 KB</Text></Inline><ProgressBar value={0.82} ariaLabel="import.csv uploading" /></Stack>
      </Stack>
    </Card>
  );
}
