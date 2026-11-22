// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { ThinkingIndicator } from '@interlink/react/thinking-indicator';

/** Title: Labels */
export default function Example() {
  return (
    <Stack space="space.150">
      <ThinkingIndicator />
      <ThinkingIndicator label="Searching 24 pages…" />
      <ThinkingIndicator label="Thinking…" isLabelHidden />
    </Stack>
  );
}
