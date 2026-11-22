// SPDX-License-Identifier: Apache-2.0
'use client';
import CrossIcon from '@interlink/icons/core/cross';
import EditIcon from '@interlink/icons/core/edit';
import PanelRightIcon from '@interlink/icons/core/panel-right';
import { Children, type ReactNode } from 'react';
import { IconButton } from '../button/icon-button';

export interface ChatPanelProps {
  children: ReactNode;
  /** Accessible name of the panel, such as "Chat with Planner". */
  label: string;
  /** Docked fills its column; floating is a card above the page. */
  variant?: 'docked' | 'floating';
  testId?: string;
}
/** The frame of a conversation with an agent: header, thread, then the prompt. */
export function ChatPanel({ children, label, variant = 'floating', testId }: ChatPanelProps) {
  return (
    <section className="il-chat" data-variant={variant} aria-label={label} data-testid={testId}>
      {children}
    </section>
  );
}

export interface ChatHeaderProps {
  /** The agent: an avatar or mark plus its name, often a menu to switch agents. */
  children: ReactNode;
  onNewChat?: () => void;
  onToggleDock?: () => void;
  onClose?: () => void;
  /** More actions, such as a DropdownMenu with history and settings. */
  actions?: ReactNode;
}
export function ChatHeader({ children, onNewChat, onToggleDock, onClose, actions }: ChatHeaderProps) {
  return (
    <header className="il-chat-header">
      <div className="il-chat-agent">{children}</div>
      <div className="il-chat-header-actions">
        {onNewChat ? <IconButton appearance="subtle" spacing="compact" icon={EditIcon} label="New chat" onClick={onNewChat} /> : null}
        {onToggleDock ? <IconButton appearance="subtle" spacing="compact" icon={PanelRightIcon} label="Dock to side" onClick={onToggleDock} /> : null}
        {actions}
        {onClose ? <IconButton appearance="subtle" spacing="compact" icon={CrossIcon} label="Close chat" onClick={onClose} /> : null}
      </div>
    </header>
  );
}

export interface ChatThreadProps {
  children: ReactNode;
  /** Shown before the first message, such as a greeting and suggestions. */
  emptyState?: ReactNode;
}
/** The scrolling list of messages. New messages are announced politely. */
export function ChatThread({ children, emptyState }: ChatThreadProps) {
  const empty = Children.toArray(children).length === 0;
  return (
    <div className="il-chat-thread" role="log" aria-live="polite" aria-relevant="additions">
      {empty ? emptyState : children}
    </div>
  );
}

export interface ChatFooterProps {
  /** Usually a PromptInput, then an AIDisclaimer. */
  children: ReactNode;
}
export function ChatFooter({ children }: ChatFooterProps) {
  return <footer className="il-chat-footer">{children}</footer>;
}
