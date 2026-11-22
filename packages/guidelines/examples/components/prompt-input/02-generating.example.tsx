// SPDX-License-Identifier: Apache-2.0
import { GenerativeBorder } from '@interlink/react/generative-border';
import { PromptInput } from '@interlink/react/prompt-input';

/** Title: While an answer is written */
export default function Example() {
  return (
    <div style={{ maxWidth: '36rem' }}>
      <GenerativeBorder isGenerating radius="xlarge">
        <PromptInput label="Message Planner" defaultValue="Plan the Q3 launch" isGenerating />
      </GenerativeBorder>
    </div>
  );
}
