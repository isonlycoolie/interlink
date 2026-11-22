// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { TooltipProps } from './tooltip';

export const tooltipDocs = docsFor<TooltipProps>({
  name: "Tooltip",
  package: '@interlink/react/tooltip',
  exports: ["Tooltip"],
  description: "A tooltip is a short label that appears on hover or focus.",
  status: 'ga',
  category: "Overlays and layering",
  keywords: ["tooltip", "hint", "hover", "label"],
  props: {
    content: {"type": "ReactNode", "description": "Short plain text. Never critical or interactive content."},
    children: {"type": "ReactElement | (props) => ReactNode", "description": "The trigger element, or a render function."},
    position: {"type": "'top' | 'bottom' | 'left' | 'right'", "description": "Preferred side; flips when there is no room.", "default": "'top'"},
    delay: {"type": "number", "description": "Hover delay in milliseconds.", "default": "300"},
    hideTooltipOnClick: {"type": "boolean", "description": "Hide when the trigger is clicked.", "default": "false"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
