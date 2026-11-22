// SPDX-License-Identifier: Apache-2.0
'use client';
import CrossIcon from '@interlink/icons/core/cross';
import type { ReactNode } from 'react';
import { AssistMark } from '../assist-button/assist-mark';
import { Button } from '../button/button';
import { IconButton } from '../button/icon-button';

export interface SuggestionCardProps {
  /** What the agent recommends, as an action: "Move PAY-112 to In review". */
  title: string;
  /** Why it recommends it, in one or two sentences. */
  reason?: ReactNode;
  /** Pages, people or items the suggestion is based on, such as links or tags. */
  context?: ReactNode;
  /** Label of the main action. */
  acceptLabel?: string;
  onAccept?: () => void;
  /** A second action, such as "Edit first". */
  secondaryLabel?: string;
  onSecondary?: () => void;
  /** Shows a close button that dismisses the suggestion. */
  onDismiss?: () => void;
  /** The suggestion was accepted: actions are replaced by this text. */
  acceptedText?: string;
  testId?: string;
}

/** A recommendation from an agent that people accept, change or dismiss. Nothing happens until they choose. */
export function SuggestionCard({ title, reason, context, acceptLabel = 'Accept', onAccept, secondaryLabel, onSecondary, onDismiss, acceptedText, testId }: SuggestionCardProps) {
  return (
    <section className="il-suggestion-card" aria-label={`Suggestion: ${title}`} data-testid={testId}>
      <header className="il-suggestion-card-head">
        <span className="il-suggestion-card-eyebrow">
          <AssistMark label="" />
          Suggestion
        </span>
        {onDismiss ? <IconButton appearance="subtle" spacing="compact" icon={CrossIcon} label="Dismiss suggestion" onClick={onDismiss} /> : null}
      </header>
      <p className="il-suggestion-card-title">{title}</p>
      {reason ? <div className="il-suggestion-card-reason">{reason}</div> : null}
      {context ? (
        <div className="il-suggestion-card-context">
          <span className="il-suggestion-card-context-label">Context:</span>
          {context}
        </div>
      ) : null}
      <footer className="il-suggestion-card-actions">
        {acceptedText ? (
          <span className="il-suggestion-card-done" role="status">
            {acceptedText}
          </span>
        ) : (
          <>
            {secondaryLabel ? (
              <Button appearance="subtle" onClick={onSecondary}>
                {secondaryLabel}
              </Button>
            ) : null}
            <Button appearance="primary" onClick={onAccept}>
              {acceptLabel}
            </Button>
          </>
        )}
      </footer>
    </section>
  );
}
