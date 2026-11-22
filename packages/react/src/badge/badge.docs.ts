// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { BadgeProps } from './badge';

export const badgeDocs = docsFor<BadgeProps>({
  name: "Badge",
  package: '@interlink/react/badge',
  exports: ["Badge"],
  description: "A badge shows a count or short value next to a label.",
  status: 'ga',
  category: "Labels",
  keywords: ["badge", "count", "number", "indicator"],
  props: {
    children: {"type": "number | string", "description": "The value. Numbers above max show as max+."},
    appearance: {"type": "'default' | 'primary' | 'important' | 'added' | 'removed' | semantic", "description": "Color by meaning.", "default": "'default'"},
    max: {"type": "number | false", "description": "Highest number before showing max+.", "default": "99"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
