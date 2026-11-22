// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { PromptSuggestionsProps } from './prompt-suggestions';

export const promptSuggestionsDocs = docsFor<PromptSuggestionsProps>({
  name: "Prompt suggestions",
  package: '@interlink/react/prompt-suggestions',
  exports: ["PromptSuggestions", "PromptSuggestion"],
  description: "Starting points for a conversation, as cards or list rows.",
  status: 'beta',
  category: "Assist",
  keywords: ["suggestions", "prompts", "starters", "skills", "chat"],
  props: {
    children: {"type": "ReactNode", "description": "PromptSuggestion items."},
    label: {"type": "string", "description": "Names the group, such as \"Suggested prompts\"."},
    layout: {"type": "'cards' | 'list'", "description": "Cards with descriptions, or compact rows.", "default": "'cards'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
