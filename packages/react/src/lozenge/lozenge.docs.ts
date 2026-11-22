// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { LozengeProps } from './lozenge';

export const lozengeDocs = docsFor<LozengeProps>({
  name: 'Lozenge',
  package: '@interlink/react/lozenge',
  exports: ['Lozenge', 'LozengeDropdownTrigger'],
  description: 'A lozenge shows the status of an item so people can recognise it at a glance.',
  status: 'ga',
  category: 'Labels',
  keywords: ['lozenge', 'status', 'label', 'pill', 'state'],
  props: {
    appearance: { type: "'neutral' | 'success' | 'warning' | 'danger' | 'information' | 'discovery' | 'accent-<hue>'", default: "'neutral'", description: 'Semantic colors for statuses with meaning; accents only for categories without meaning.' },
    children: { type: 'ReactNode', description: 'One or two words in sentence case.' },
    spacing: { type: "'default' | 'spacious'", default: "'default'", description: 'Spacious lozenges sit beside 32px controls.' },
    iconBefore: { type: 'ComponentType<IconProps>', description: 'Optional status icon shown before the text.' },
    maxWidth: { type: 'number | string', default: '200', description: 'Width after which the text truncates.' },
    trailingMetric: { type: 'string', description: 'A short number at the end, such as a score.' },
    testId: { type: 'string', description: 'Rendered as data-testid.' },
  },
});
