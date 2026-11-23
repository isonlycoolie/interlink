// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';

export type AgentSessionStatus = 'working' | 'needs-input' | 'finished' | 'idle';

const LABEL: Record<AgentSessionStatus, string> = { working: 'Working', 'needs-input': 'Needs input', finished: 'Finished', idle: 'Waiting' };

export interface AgentSessionProps {
  /** An AgentAvatar, usually with the person it works for. */
  avatar: ReactNode;
  status: AgentSessionStatus;
  /** What the session is about, in the row layout; the inline layout shows the status instead. */
  title?: ReactNode;
  /** A short line under the title, such as the linked change and when it last moved. */
  meta?: ReactNode;
  /** Overrides the status words, such as "Gathering context". */
  statusLabel?: string;
  /** `inline` sits at the foot of a work item card; `row` stands alone in a list of sessions. */
  layout?: 'inline' | 'row';
  /** Makes the session a link to its thread. */
  href?: string;
  testId?: string;
}

/** One agent's run on a piece of work: who is running it, what state it is in, and whether it needs a person. */
export function AgentSession({ avatar, status, title, meta, statusLabel, layout = 'inline', href, testId }: AgentSessionProps) {
  const words = statusLabel ?? LABEL[status];
  const body = (
    <>
      <span className="il-session-avatar">{avatar}</span>
      <span className="il-session-text">
        <span className="il-session-title">{layout === 'row' && title ? title : words}</span>
        {layout === 'row' && meta ? <span className="il-session-meta">{meta}</span> : null}
      </span>
      <span className="il-session-state" data-status={status} role="img" aria-label={words}>
        {status === 'finished' ? (
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" /><path d="M4.5 8.2 7 10.5 11.5 5.8" /></svg>
        ) : null}
      </span>
    </>
  );
  return href ? (
    <a className="il-session" data-layout={layout} data-status={status} href={href} data-testid={testId}>{body}</a>
  ) : (
    <div className="il-session" data-layout={layout} data-status={status} data-testid={testId}>{body}</div>
  );
}
