// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ProgressTrackerProps } from './progress-tracker';

export const progressTrackerDocs = docsFor<ProgressTrackerProps>({
  name: "Progress tracker",
  package: '@interlink/react/progress-tracker',
  exports: ["ProgressTracker"],
  description: "A progress tracker shows the steps of a multi-page task and where people are.",
  status: 'ga',
  category: "Navigation",
  keywords: ["progress", "steps", "wizard", "stepper"],
  props: {
    items: {"type": "{ id, label, percentageComplete, status, href? }[]", "description": "The stages."},
    spacing: {"type": "'comfortable' | 'cozy' | 'compact'", "description": "Gap between stages.", "default": "'cozy'"},
    animated: {"type": "boolean", "description": "Animate changes.", "default": "true"},
    label: {"type": "string", "description": "Name of the list.", "default": "'Progress'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
