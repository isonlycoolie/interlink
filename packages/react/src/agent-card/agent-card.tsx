// SPDX-License-Identifier: Apache-2.0
'use client';
import type { ComponentType, ReactNode } from 'react';
import type { IconProps } from '@interlink/icons';
import { AgentAvatar, type AgentColor } from '../agent-avatar/agent-avatar';
import { Button } from '../button/button';

export interface AgentCardProps {
  name: string;
  /** What the agent is good at, in one or two sentences. */
  description: string;
  icon?: ComponentType<IconProps>;
  color?: AgentColor;
  /** Who made it, such as "By Interlink" or a person's name. */
  createdBy?: string;
  /** Opens a chat with the agent. */
  onChat?: () => void;
  /** Opens the agent's details. The name becomes a link when set. */
  href?: string;
  /** Extra actions beside Chat, such as a star or more menu. */
  actions?: ReactNode;
  testId?: string;
}

/** An agent in a directory: its hexagon on a colour tile, what it does, who made it, and a way to start a chat. */
export function AgentCard({ name, description, icon, color = 'brand', createdBy, onChat, href, actions, testId }: AgentCardProps) {
  return (
    <article className="il-agent-card" data-color={color} data-testid={testId}>
      <div className="il-agent-card-tile" aria-hidden="true">
        <AgentAvatar name={name} icon={icon} color={color} size="xlarge" label="" />
      </div>
      <div className="il-agent-card-body">
        <h3 className="il-agent-card-name">{href ? <a href={href}>{name}</a> : name}</h3>
        {createdBy ? <p className="il-agent-card-by">{createdBy}</p> : null}
        <p className="il-agent-card-description">{description}</p>
      </div>
      {onChat || actions ? (
        <div className="il-agent-card-actions">
          {onChat ? (
            <Button onClick={onChat} aria-label={`Chat with ${name}`}>
              Chat
            </Button>
          ) : null}
          {actions}
        </div>
      ) : null}
    </article>
  );
}
