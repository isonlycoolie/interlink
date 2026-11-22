// SPDX-License-Identifier: Apache-2.0
'use client';
import CrossIcon from '@interlink/icons/core/cross';
import { useId, type ReactNode } from 'react';
import { IconButton } from '../button/icon-button';

export interface PanelProps {
  /** The task or app, such as "Add fields" or "Details". */
  title: string;
  /** The object it works on, such as "Default field scheme". */
  subtitle?: string;
  children: ReactNode;
  /** Up to three icon buttons; with close that makes four, the most a header holds. */
  actions?: ReactNode;
  /** Shows the close button. */
  onClose?: () => void;
  /** Content pinned under the scrolling body, such as Save and Cancel. */
  footer?: ReactNode;
  width?: 'default' | 'wide';
  testId?: string;
}

/**
 * Detail or a short task beside the page, opposite the side navigation, so people keep their place. It opens from an
 * action and closes with its close button.
 */
export function Panel({ title, subtitle, children, actions, onClose, footer, width = 'default', testId }: PanelProps) {
  const id = useId();
  return (
    <aside className="il-ns-panel" data-width={width} aria-labelledby={id} data-testid={testId}>
      <header className="il-ns-panel-header">
        <span className="il-ns-panel-titles">
          <h2 id={id} className="il-ns-panel-title">
            {title}
          </h2>
          {subtitle ? <span className="il-ns-panel-subtitle">{subtitle}</span> : null}
        </span>
        <span className="il-ns-panel-actions">
          {actions}
          {onClose ? <IconButton appearance="subtle" icon={CrossIcon} label={`Close ${title}`} onClick={onClose} /> : null}
        </span>
      </header>
      <div className="il-ns-panel-body">{children}</div>
      {footer ? <footer className="il-ns-panel-footer">{footer}</footer> : null}
    </aside>
  );
}
