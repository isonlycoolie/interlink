// SPDX-License-Identifier: Apache-2.0
import type { IconProps } from '@interlink/icons';
import { docsFor } from './types';

export const iconDocs = docsFor<IconProps>({
  name: 'Icon',
  package: '@interlink/icons/core/<name>',
  exports: ['AddIcon', 'SearchIcon'],
  description: 'Icons are small symbols that stand for an action, an object or a status.',
  status: 'ga',
  category: 'Images and icons',
  keywords: ['icon', 'glyph', 'symbol', 'svg'],
  props: {
    label: { type: 'string', description: 'What the icon means. Use an empty string when text beside it says the same.' },
    color: { type: 'IconColor', default: "'currentColor'", description: 'An icon or text color token.' },
    size: { type: "'small' | 'medium'", default: "'medium'", description: '16px medium or 12px small.' },
    spacing: { type: "'none' | 'compact' | 'spacious'", default: "'none'", description: 'Padding so the icon lines up with 24px or 16px controls.' },
    shouldScale: { type: 'boolean', default: 'false', description: 'Fill the parent instead of a fixed size.' },
    testId: { type: 'string', description: 'Rendered as data-testid.' },
  },
});
