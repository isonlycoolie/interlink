// SPDX-License-Identifier: Apache-2.0
'use client';
import CommentIcon from '@interlink/icons/core/comment';
import InformationIcon from '@interlink/icons/core/information-circle';
import ThumbsDownIcon from '@interlink/icons/core/thumbs-down';
import ThumbsUpIcon from '@interlink/icons/core/thumbs-up';
import { useState } from 'react';
import { IconButton } from '../button/icon-button';

export type AIFeedback = 'up' | 'down';

export interface AIDisclaimerProps {
  /** The reminder to check answers. Keep it short. */
  children?: string;
  /** Shows thumbs up and down. Called with the rating; picking the same one again clears it. */
  onFeedback?: (rating: AIFeedback | null) => void;
  /** Shows a comment button, for example to open a form for written feedback. */
  onComment?: () => void;
  testId?: string;
}

/** A quiet line that reminds people answers come from AI, with optional feedback. */
export function AIDisclaimer({ children = 'Uses AI. Verify results.', onFeedback, onComment, testId }: AIDisclaimerProps) {
  const [rating, setRating] = useState<AIFeedback | null>(null);
  const rate = (r: AIFeedback) => {
    const next = rating === r ? null : r;
    setRating(next);
    onFeedback?.(next);
  };
  return (
    <div className="il-ai-disclaimer" data-testid={testId}>
      <span className="il-ai-disclaimer-text">
        <InformationIcon label="" size="small" />
        {children}
      </span>
      {onFeedback || onComment ? (
        <span className="il-ai-disclaimer-actions">
          {onFeedback ? (
            <>
              <IconButton appearance="subtle" spacing="compact" icon={ThumbsUpIcon} label="Helpful" isSelected={rating === 'up'} onClick={() => rate('up')} />
              <IconButton appearance="subtle" spacing="compact" icon={ThumbsDownIcon} label="Not helpful" isSelected={rating === 'down'} onClick={() => rate('down')} />
            </>
          ) : null}
          {onComment ? <IconButton appearance="subtle" spacing="compact" icon={CommentIcon} label="Give feedback" onClick={onComment} /> : null}
        </span>
      ) : null}
    </div>
  );
}
