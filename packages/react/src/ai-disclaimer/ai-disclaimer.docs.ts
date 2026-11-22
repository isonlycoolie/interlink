// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { AIDisclaimerProps } from './ai-disclaimer';

export const aiDisclaimerDocs = docsFor<AIDisclaimerProps>({
  name: "AI disclaimer",
  package: '@interlink/react/ai-disclaimer',
  exports: ["AIDisclaimer"],
  description: "A quiet reminder that answers come from AI, with optional feedback buttons.",
  status: 'beta',
  category: "Assist",
  keywords: ["disclaimer", "feedback", "ai", "verify", "rating"],
  props: {
    children: {"type": "string", "description": "The reminder.", "default": "'Uses AI. Verify results.'"},
    onFeedback: {"type": "(rating: 'up' | 'down' | null) => void", "description": "Shows thumbs up and down."},
    onComment: {"type": "() => void", "description": "Shows a button for written feedback."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
