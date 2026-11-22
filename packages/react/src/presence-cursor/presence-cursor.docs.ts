// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { PresenceCursorProps } from './presence-cursor';

export const presenceCursorDocs = docsFor<PresenceCursorProps>({
  name: "Presence cursor",
  package: '@interlink/react/presence-cursor',
  exports: ["PresenceCursor"],
  description: "A pointer with a name that shows where a person or agent is working on the same thing.",
  status: 'beta',
  category: "Assist",
  keywords: ["cursor", "presence", "collaboration", "live", "pointer"],
  props: {
    name: {"type": "string", "description": "The person's first name or the agent's name."},
    color: {"type": "'blue' | 'purple' | 'saffron' | 'lime' | 'brand' | 'agent'", "description": "A colour per person; agent is the ink pill with a hexagon.", "default": "'blue'"},
    agentIcon: {"type": "ComponentType<IconProps>", "description": "The agent's glyph in the hexagon."},
    pointer: {"type": "'top-left' | 'top-right'", "description": "Which way the arrow points.", "default": "'top-left'"},
    size: {"type": "'small' | 'large'", "description": "Large for marketing pictures.", "default": "'small'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
