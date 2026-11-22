// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import { AIDisclaimer } from '@interlink/react/ai-disclaimer';
import { Button } from '@interlink/react/button';
import { GenerativeBorder } from '@interlink/react/generative-border';
import { PromptInput } from '@interlink/react/prompt-input';
import { Tag } from '@interlink/react/tag';

/** The prompt with its context and mode, framed by the generative border while an answer is written. */
export function Prompt({ onSend, isGenerating }: { onSend: (text: string) => void; isGenerating: boolean }) {
  return (
    <div className="scr-prompt">
      <GenerativeBorder isGenerating={isGenerating} radius="xlarge">
        <PromptInput
          label="Message the assistant"
          placeholder="Ask anything, or type / for skills"
          onSubmit={onSend}
          isGenerating={isGenerating}
          onAdd={() => {}}
          onVoice={() => {}}
          context={<Tag text="Payments space" appearance="rounded" />}
          tools={
            <Button appearance="subtle" spacing="compact" iconAfter={ChevronDownIcon}>
              Auto
            </Button>
          }
        />
      </GenerativeBorder>
      <AIDisclaimer />
    </div>
  );
}
