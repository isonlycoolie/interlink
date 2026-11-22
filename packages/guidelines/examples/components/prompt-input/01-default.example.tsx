// SPDX-License-Identifier: Apache-2.0
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import { Button } from '@interlink/react/button';
import { PromptInput } from '@interlink/react/prompt-input';
import { Tag } from '@interlink/react/tag';

/** Title: With context and tools */
export default function Example() {
  return (
    <div style={{ maxWidth: '36rem' }}>
      <PromptInput
        label="Message Planner"
        onAdd={() => {}}
        onVoice={() => {}}
        onSubmit={() => {}}
        context={<Tag text="Q3 roadmap" appearance="rounded" />}
        tools={<Button appearance="subtle" spacing="compact" iconAfter={ChevronDownIcon}>Auto</Button>}
      />
    </div>
  );
}
