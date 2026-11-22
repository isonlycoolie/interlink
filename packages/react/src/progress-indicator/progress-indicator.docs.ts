// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ProgressIndicatorProps } from './progress-indicator';

export const progressIndicatorDocs = docsFor<ProgressIndicatorProps>({
  name: "Progress indicator",
  package: '@interlink/react/progress-indicator',
  exports: ["ProgressIndicator"],
  description: "Progress dots show which step of a short sequence people are on.",
  status: 'ga',
  category: "Navigation",
  keywords: ["progress", "dots", "steps", "carousel"],
  props: {
    values: {"type": "unknown[]", "description": "One entry per step."},
    selectedIndex: {"type": "number", "description": "The current step."},
    appearance: {"type": "'default' | 'help' | 'inverted' | 'primary'", "description": "Dot color.", "default": "'default'"},
    size: {"type": "'default' | 'large'", "description": "Dot size.", "default": "'default'"},
    spacing: {"type": "'comfortable' | 'cozy' | 'compact'", "description": "Gap between dots.", "default": "'comfortable'"},
    onSelect: {"type": "({ event, index }) => void", "description": "Makes the dots tabs that change step."},
    ariaControls: {"type": "string", "description": "Id prefix of the step panels, which get ids like panel-0."},
    ariaLabel: {"type": "string", "description": "Name of the dots.", "default": "'Steps'"},
    getAriaLabel: {"type": "(index) => string", "description": "Name of each dot."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
