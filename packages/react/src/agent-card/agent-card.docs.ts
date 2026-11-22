// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { AgentCardProps } from './agent-card';

export const agentCardDocs = docsFor<AgentCardProps>({
  name: "Agent card",
  package: '@interlink/react/agent-card',
  exports: ["AgentCard"],
  description: "An agent in a directory: its hexagon on a colour tile, what it does and a way to chat.",
  status: 'beta',
  category: "Assist",
  keywords: ["agent", "card", "directory", "gallery", "bot"],
  props: {
    name: {"type": "string", "description": "The agent's name."},
    description: {"type": "string", "description": "What it is good at."},
    icon: {"type": "ComponentType<IconProps>", "description": "Glyph in the hexagon."},
    color: {"type": "'blue' | 'purple' | 'saffron' | 'lime' | 'brand' | 'ink'", "description": "Hexagon and tile colour.", "default": "'brand'"},
    createdBy: {"type": "string", "description": "Who made it."},
    onChat: {"type": "() => void", "description": "Shows a Chat button."},
    href: {"type": "string", "description": "Makes the name a link to its details."},
    actions: {"type": "ReactNode", "description": "More actions beside Chat."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
