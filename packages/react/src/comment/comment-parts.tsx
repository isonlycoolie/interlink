// SPDX-License-Identifier: Apache-2.0
'use client';
import type { MouseEventHandler, ReactNode } from 'react';

export interface CommentLayoutProps {
  avatar?: ReactNode;
  content?: ReactNode;
  /** Replies, indented under the content. */
  children?: ReactNode;
  highlighted?: boolean;
  id?: string;
  testId?: string;
}
/** The avatar column and the content column, with replies nested underneath. */
export function CommentLayout({ avatar, content, children, highlighted, id, testId }: CommentLayoutProps) {
  return (
    <div className="il-comment" id={id} data-highlighted={highlighted || undefined} data-testid={testId}>
      {highlighted ? <span className="il-comment-highlight" aria-hidden="true" /> : null}
      {avatar ? <div className="il-comment-avatar">{avatar}</div> : null}
      <div className="il-comment-main">{content}</div>
      {children ? <div className="il-comment-replies">{children}</div> : null}
    </div>
  );
}

export interface CommentAuthorProps {
  children?: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}
export function CommentAuthor({ children, href, onClick }: CommentAuthorProps) {
  return href || onClick ? (
    <a className="il-comment-author il-focusable" href={href} onClick={onClick}>
      {children}
    </a>
  ) : (
    <span className="il-comment-author">{children}</span>
  );
}

export interface CommentTimeProps {
  children?: ReactNode;
  /** Link to the comment itself. */
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}
export function CommentTime({ children, href, onClick }: CommentTimeProps) {
  return href || onClick ? (
    <a className="il-comment-time il-focusable" href={href} onClick={onClick}>
      {children}
    </a>
  ) : (
    <span className="il-comment-time">{children}</span>
  );
}

export interface CommentEditedProps {
  children?: ReactNode;
}
export function CommentEdited({ children = 'Edited' }: CommentEditedProps) {
  return <span className="il-comment-edited">{children}</span>;
}

export interface CommentActionProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}
/** A small text action under a comment, such as Reply. */
export function CommentAction({ children, onClick, isDisabled = false }: CommentActionProps) {
  return (
    <button type="button" className="il-comment-action il-focusable" onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}
