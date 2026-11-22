// SPDX-License-Identifier: Apache-2.0
import { Button } from '@interlink/react/button';
import { GenerativeBorder } from '@interlink/react/generative-border';
import { Inline, Stack } from '@interlink/react/primitives';
import { ThinkingIndicator } from '@interlink/react/thinking-indicator';
import { useState } from 'react';

/** Title: Around a prompt while generating */
export default function Example() {
  const [on, setOn] = useState(true);
  return (
    <Stack space="space.200">
      <GenerativeBorder isGenerating={on} radius="xlarge">
        <div style={{ padding: 16, minHeight: 56 }}>{on ? <ThinkingIndicator label="Writing a summary…" /> : 'Summary ready.'}</div>
      </GenerativeBorder>
      <Inline space="space.100">
        <Button onClick={() => setOn(!on)}>{on ? 'Stop' : 'Generate again'}</Button>
      </Inline>
    </Stack>
  );
}
