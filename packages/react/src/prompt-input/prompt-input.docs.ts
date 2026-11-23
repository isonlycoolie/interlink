// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { PromptInputProps } from './prompt-input';

export const promptInputDocs = docsFor<PromptInputProps>({
  name: "Prompt input",
  package: '@interlink/react/prompt-input',
  exports: ["PromptInput"],
  description: "Where people write to an agent: a growing text box with add, context, tools and send.",
  status: 'beta',
  category: "Assist",
  keywords: ["prompt", "chat", "input", "ask", "message"],
  props: {
    label: {"type": "string", "description": "Accessible name, such as \"Message Planner\"."},
    placeholder: {"type": "string", "description": "A hint of what to ask.", "default": "'Ask anything, or type / for skills'"},
    value: {"type": "string", "description": "Controlled text."},
    defaultValue: {"type": "string", "description": "Initial text.", "default": "''"},
    onChange: {"type": "(value) => void", "description": "Called as people type."},
    onSubmit: {"type": "(value) => void", "description": "Enter or the send button. Shift+Enter adds a line."},
    onAdd: {"type": "() => void", "description": "Shows the add button, for attachments and mentions."},
    onVoice: {"type": "() => void", "description": "Shows the microphone button."},
    context: {"type": "ReactNode", "description": "Chips for attached pages or people, shown next to the add button."},
    tools: {"type": "ReactNode", "description": "Controls before send, such as a mode menu."},
    isDisabled: {"type": "boolean", "description": "Prevents typing and sending.", "default": "false"},
    isGenerating: {"type": "boolean", "description": "Disables send while an answer is written.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
