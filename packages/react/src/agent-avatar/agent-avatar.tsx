// SPDX-License-Identifier: Apache-2.0
import type { ComponentType, ReactNode } from 'react';
import type { IconProps } from '@interlink/icons';

export type AgentColor = 'blue' | 'purple' | 'saffron' | 'lime' | 'brand' | 'ink';
export type AgentAvatarSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface AgentAvatarProps {
  /** The agent's name, used for the accessible name. */
  name: string;
  /** A glyph drawn in white on the agent colour. */
  icon?: ComponentType<IconProps>;
  /** An image instead of a glyph, such as a logo. */
  src?: string;
  color?: AgentColor;
  size?: AgentAvatarSize;
  /** A small photo or initials of the person the agent works for, shown at the corner. */
  onBehalfOf?: ReactNode;
  /** Overrides the accessible name; use an empty string when the name is shown next to it. */
  label?: string;
  testId?: string;
}

/**
 * The hexagon avatar of an agent. The hexagon is reserved for agents, so people can always tell when an agent,
 * not a person, is at work.
 */
export function AgentAvatar({ name, icon: Icon, src, color = 'brand', size = 'medium', onBehalfOf, label, testId }: AgentAvatarProps) {
  const a11y = label ?? `${name} (agent)`;
  return (
    <span className="il-agent-avatar" data-size={size} data-color={color} role={a11y ? 'img' : undefined} aria-label={a11y || undefined} aria-hidden={a11y ? undefined : true} data-testid={testId}>
      <span className="il-agent-avatar-hex">
        {src ? <img src={src} alt="" /> : Icon ? <Icon label="" color="currentColor" shouldScale /> : <span className="il-agent-avatar-initial">{name.slice(0, 1)}</span>}
      </span>
      {onBehalfOf ? <span className="il-agent-avatar-delegate">{onBehalfOf}</span> : null}
    </span>
  );
}
