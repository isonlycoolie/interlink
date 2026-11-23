// SPDX-License-Identifier: Apache-2.0
import { Button } from '@interlink/react/button';
import { GenerativeBorder } from '@interlink/react/generative-border';
import { Inline, Text, xcss } from '@interlink/react/primitives';
import { ThinkingIndicator } from '@interlink/react/thinking-indicator';
import { useState } from 'react';

const row = xcss({ padding: 'space.200', minHeight: '3.5rem' });

/** Title: Around a prompt while generating */
export default function Example() {
  const [on, setOn] = useState(true);
  return (
    <GenerativeBorder isGenerating={on} radius="xlarge">
      <Inline space="space.200" spread="space-between" alignBlock="center" xcss={row}>
        {on ? <ThinkingIndicator label="Writing a summary…" /> : <Text>Summary ready.</Text>}
        <Button appearance={on ? 'default' : 'primary'} onClick={() => setOn(!on)}>
          {on ? 'Stop' : 'Generate again'}
        </Button>
      </Inline>
    </GenerativeBorder>
  );
}
