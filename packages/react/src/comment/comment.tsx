// SPDX-License-Identifier: Apache-2.0
import { createElement, type ReactNode } from 'react';
import { CommentLayout } from './comment-parts';

export interface CommentProps {
  /** Usually an Avatar of the author. */
  avatar: ReactNode;
  /** CommentAuthor with a name, and an optional link to the profile. */
  author?: ReactNode;
  /** CommentTime, such as "2 hours ago". */
  time?: ReactNode;
  /** CommentEdited, when the comment changed after posting. */
  edited?: ReactNode;
  /** A label such as "Author" or "Admin". */
  type?: ReactNode;
  /** Who can see the comment, when it is restricted. */
  restrictedTo?: ReactNode;
  content?: ReactNode;
  /** CommentAction elements, such as Reply and Like. */
  actions?: ReactNode[];
  /** Nested replies. */
  children?: ReactNode;
  isSaving?: boolean;
  savingText?: string;
  isError?: boolean;
  /** Actions that resolve an error, such as Retry. */
  errorActions?: ReactNode[];
  /** Briefly marks a comment people jumped to. */
  highlighted?: boolean;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
  testId?: string;
}

/** A message in a discussion: who wrote it, when, what it says and what people can do with it. */
export function Comment({ avatar, author, time, edited, type, restrictedTo, content, actions = [], children, isSaving = false, savingText = 'Sending…', isError = false, errorActions = [], highlighted, headingLevel = 3, id, testId }: CommentProps) {
  const footer = isError ? errorActions : isSaving ? [] : actions;
  const body = (
    <div className="il-comment-body" data-testid={testId}>
      {createElement(
        `h${headingLevel}`,
        { className: 'il-comment-header' },
        author,
        type ? <span className="il-comment-type">{type}</span> : null,
        isSaving ? <span className="il-comment-time">{savingText}</span> : time,
        edited,
        restrictedTo ? <span className="il-comment-restricted">{restrictedTo}</span> : null,
      )}
      <div className="il-comment-content" data-disabled={isSaving || isError || undefined}>
        {content}
      </div>
      {footer.length ? (
        <div className="il-comment-actions" data-error={isError || undefined}>
          {footer.map((action, i) => (
            <span key={i}>{action}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
  return <CommentLayout id={id} avatar={avatar} content={body} highlighted={highlighted}>{children}</CommentLayout>;
}
