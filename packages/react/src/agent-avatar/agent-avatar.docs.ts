// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { AgentAvatarProps } from './agent-avatar';

export const agentAvatarDocs = docsFor<AgentAvatarProps>({
  name: "Agent avatar",
  package: '@interlink/react/agent-avatar',
  exports: ["AgentAvatar"],
  description: "The hexagon avatar of an agent, reserved for agents so people always know when one is at work.",
  status: 'beta',
  category: "Assist",
  keywords: ["agent", "avatar", "hexagon", "ai", "bot"],
  props: {
    name: {"type": "string", "description": "The agent's name; the accessible name becomes \"Name (agent)\"."},
    icon: {"type": "ComponentType<IconProps>", "description": "A glyph drawn on the agent colour."},
    src: {"type": "string", "description": "An image instead of a glyph."},
    color: {"type": "'blue' | 'purple' | 'saffron' | 'lime' | 'brand' | 'ink'", "description": "The agent colour.", "default": "'brand'"},
    size: {"type": "'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'", "description": "16px to 64px, the same steps as Avatar.", "default": "'medium'"},
    onBehalfOf: {"type": "ReactNode", "description": "A small photo of the person the agent acts for."},
    label: {"type": "string", "description": "Overrides the accessible name; empty when the name is next to it."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
