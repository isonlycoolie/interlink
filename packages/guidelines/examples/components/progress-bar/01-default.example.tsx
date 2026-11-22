// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { ProgressBar } from '@interlink/react/progress-bar';

/** Title: Default */
export default function Example() {
  return (
    <Stack space="space.200">
      <ProgressBar value={0.4} ariaLabel="Import" />
      <ProgressBar value={1} appearance="success" ariaLabel="Done" />
      <ProgressBar isIndeterminate ariaLabel="Preparing" />
    </Stack>
  );
}
