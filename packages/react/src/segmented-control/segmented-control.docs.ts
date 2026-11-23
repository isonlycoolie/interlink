// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { SegmentedControlProps } from './segmented-control';

export const segmentedControlDocs = docsFor<SegmentedControlProps>({
  name: 'Segmented control',
  package: '@interlink/react/segmented-control',
  exports: ['SegmentedControl'],
  description: 'One choice from a few views of the same content, shown side by side on a neutral track.',
  status: 'beta',
  category: 'Navigation',
  keywords: ['segmented', 'switch', 'views', 'filter', 'toggle group'],
  props: {
    label: { type: 'string', description: 'Names the group for assistive technology.' },
    options: { type: 'SegmentedOption[]', description: 'The views, each with a value and a label.' },
    value: { type: 'string', description: 'Controlled value.' },
    defaultValue: { type: 'string', description: 'The first view shown when uncontrolled.', default: 'first option' },
    onChange: { type: '(value: string) => void', description: 'Called with the chosen value.' },
    shape: { type: "'default' | 'pill'", description: 'Pill shape for marketing pages; default is the compact product shape.', default: "'default'" },
    testId: { type: 'string', description: 'Rendered as data-testid.' },
  },
});
