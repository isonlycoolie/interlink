// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { SpinnerProps } from './spinner';

export const spinnerDocs = docsFor<SpinnerProps>({
  name: 'Spinner',
  package: '@interlink/react/spinner',
  exports: ['Spinner'],
  description: 'A spinner shows that something is loading when the wait is short and its length unknown.',
  status: 'ga',
  category: 'Loading',
  keywords: ['spinner', 'loading', 'progress', 'busy', 'wait'],
  props: {
    appearance: { type: "'inherit' | 'invert'", default: "'inherit'", description: 'Use invert on bold backgrounds.' },
    delay: { type: 'number', default: '0', description: 'Milliseconds before showing, so fast work never flashes a spinner.' },
    label: { type: 'string', description: 'Announced to assistive tech; leave empty when nearby text says what is loading.' },
    size: { type: "'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number", default: "'medium'", description: 'Preset size or pixel size.' },
    testId: { type: 'string', description: 'Rendered as data-testid.' },
    ref: { type: 'Ref<SVGSVGElement>', description: 'Ref to the svg element.' },
  },
});
