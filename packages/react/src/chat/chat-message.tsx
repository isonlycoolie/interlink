// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';

export interface ChatMessageProps {
  /** People's messages sit on the right in a bubble; the agent's answers sit on the left with its name. */
  from: 'user' | 'agent';
  children: ReactNode;
  /** The agent's name, or the person's in a shared conversation. */
  author?: string;
  /** An AgentAvatar for agents, or an Avatar in shared conversations. */
  avatar?: ReactNode;
  /** When it was sent, such as "2 min ago". */
  time?: string;
  /** Follow-up content under an answer: sources, suggestion cards or feedback. */
  footer?: ReactNode;
  testId?: string;
}

/** One message in a chat thread. */
export function ChatMessage({ from, children, author, avatar, time, footer, testId }: ChatMessageProps) {
  return (
    <article className="il-chat-message" data-from={from} aria-label={`${author ?? (from === 'user' ? 'You' : 'Agent')}${time ? `, ${time}` : ''}`} data-testid={testId}>
      {from === 'agent' && (avatar || author) ? (
        <div className="il-chat-byline">
          {avatar}
          {author ? <span className="il-chat-author">{author}</span> : null}
          {time ? <span className="il-chat-time">{time}</span> : null}
        </div>
      ) : null}
      <div className="il-chat-body">{children}</div>
      {footer ? <div className="il-chat-message-footer">{footer}</div> : null}
    </article>
  );
}
