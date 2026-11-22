// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ThinkingIndicatorProps } from './thinking-indicator';

export const thinkingIndicatorDocs = docsFor<ThinkingIndicatorProps>({
  name: "Thinking indicator",
  package: '@interlink/react/thinking-indicator',
  exports: ["ThinkingIndicator"],
  description: "Three coloured squares that pulse while an agent works, with what it is doing.",
  status: 'beta',
  category: "Assist",
  keywords: ["thinking", "loading", "ai", "working", "progress"],
  props: {
    label: {"type": "string", "description": "What the agent is doing.", "default": "'Thinking…'"},
    isLabelHidden: {"type": "boolean", "description": "Keeps the text for screen readers only.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
