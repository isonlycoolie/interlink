// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { SuggestionCardProps } from './suggestion-card';

export const suggestionCardDocs = docsFor<SuggestionCardProps>({
  name: "Suggestion card",
  package: '@interlink/react/suggestion-card',
  exports: ["SuggestionCard"],
  description: "A recommendation from an agent that people accept, change or dismiss.",
  status: 'beta',
  category: "Assist",
  keywords: ["suggestion", "recommendation", "accept", "agent", "action"],
  props: {
    title: {"type": "string", "description": "The recommended action."},
    reason: {"type": "ReactNode", "description": "Why the agent recommends it."},
    context: {"type": "ReactNode", "description": "Links or tags it is based on."},
    acceptLabel: {"type": "string", "description": "Main action.", "default": "'Accept'"},
    onAccept: {"type": "() => void", "description": "Called on accept."},
    secondaryLabel: {"type": "string", "description": "A second action, such as \"Edit first\"."},
    onSecondary: {"type": "() => void", "description": "Called by the second action."},
    onDismiss: {"type": "() => void", "description": "Shows a dismiss button."},
    acceptedText: {"type": "string", "description": "Replaces the actions after accepting."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
