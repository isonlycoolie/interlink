// SPDX-License-Identifier: Apache-2.0
import type { ComponentType } from 'react';
import type { IconProps } from '@interlink/icons';

export type CursorColor = 'blue' | 'purple' | 'saffron' | 'lime' | 'brand' | 'agent';

export interface PresenceCursorProps {
  /** Who is here: a person's first name or an agent's name. */
  name: string;
  /** Agents use the ink pill with their hexagon; people use a colour of their own. */
  color?: CursorColor;
  /** An agent's glyph, shown in a small hexagon inside the pill. */
  agentIcon?: ComponentType<IconProps>;
  /** Which way the pointer faces. */
  pointer?: 'top-left' | 'top-right';
  size?: 'small' | 'large';
  testId?: string;
}

/** A live pointer with a name: shows where another person or an agent is working on the same thing. */
export function PresenceCursor({ name, color = 'blue', agentIcon: Icon, pointer = 'top-left', size = 'small', testId }: PresenceCursorProps) {
  return (
    <span className="il-cursor" data-color={color} data-pointer={pointer} data-size={size} role="img" aria-label={`${name}${color === 'agent' ? ' (agent)' : ''} is here`} data-testid={testId}>
      <svg className="il-cursor-arrow" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M1.5 1.5 L14 6.2 L8.2 8.2 L6.2 14 Z" />
      </svg>
      <span className="il-cursor-pill">
        {color === 'agent' ? (
          <span className="il-cursor-hex">{Icon ? <Icon label="" color="currentColor" shouldScale /> : null}</span>
        ) : null}
        {name}
      </span>
    </span>
  );
}
