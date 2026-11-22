// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ProgressBarProps } from './progress-bar';

export const progressBarDocs = docsFor<ProgressBarProps>({
  name: "Progress bar",
  package: '@interlink/react/progress-bar',
  exports: ["ProgressBar"],
  description: "A progress bar shows how far a task has got.",
  status: 'ga',
  category: "Loading",
  keywords: ["progress", "bar", "upload", "loading"],
  props: {
    value: {"type": "number", "description": "Progress from 0 to 1.", "default": "0"},
    isIndeterminate: {"type": "boolean", "description": "Unknown progress.", "default": "false"},
    appearance: {"type": "'default' | 'success' | 'inverse'", "description": "Success when done; inverse on bold backgrounds.", "default": "'default'"},
    ariaLabel: {"type": "string", "description": "Names what is progressing."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
