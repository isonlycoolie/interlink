// SPDX-License-Identifier: Apache-2.0
'use client';
import StatusDiscoveryIcon from '@interlink/icons/core/status-discovery';
import StatusErrorIcon from '@interlink/icons/core/status-error';
import StatusInformationIcon from '@interlink/icons/core/status-information';
import StatusSuccessIcon from '@interlink/icons/core/status-success';
import StatusWarningIcon from '@interlink/icons/core/status-warning';
import { useState, type ReactNode } from 'react';
import { InlineDialog } from '../inline-dialog/inline-dialog';
import type { Placement } from '../layering/place';

export type InlineMessageAppearance = 'connectivity' | 'confirmation' | 'info' | 'warning' | 'error';

const ICONS = {
  connectivity: { Icon: StatusInformationIcon, color: 'color.icon.brand', label: 'Connectivity' },
  confirmation: { Icon: StatusSuccessIcon, color: 'color.icon.success', label: 'Confirmation' },
  info: { Icon: StatusDiscoveryIcon, color: 'color.icon.discovery', label: 'Information' },
  warning: { Icon: StatusWarningIcon, color: 'color.icon.warning', label: 'Warning' },
  error: { Icon: StatusErrorIcon, color: 'color.icon.danger', label: 'Error' },
} as const;

export interface InlineMessageProps {
  appearance?: InlineMessageAppearance;
  /** Short text next to the icon. */
  title?: ReactNode;
  /** Quieter text after the title. */
  secondaryText?: ReactNode;
  /** The detail shown in a dialog when people open the message. */
  children?: ReactNode;
  placement?: Placement;
  /** Accessible name of the icon; defaults to the appearance. */
  iconLabel?: string;
  spacing?: 'spacious' | 'compact';
  testId?: string;
}

/** A status icon with optional text that opens a small dialog with more detail, for messages tied to one spot on the page. */
export function InlineMessage({ appearance = 'connectivity', title, secondaryText, children, placement = 'bottom-start', iconLabel, spacing = 'spacious', testId }: InlineMessageProps) {
  const [isOpen, setOpen] = useState(false);
  const { Icon, color, label } = ICONS[appearance];
  return (
    <div className="il-inline-message" data-appearance={appearance} data-testid={testId}>
      <InlineDialog isOpen={isOpen} onClose={() => setOpen(false)} placement={placement} content={<div className="il-inline-message-content">{children}</div>} testId={testId && `${testId}--inline-dialog`}>
        <button type="button" className="il-inline-message-button il-focusable" aria-expanded={isOpen} onClick={() => setOpen((o) => !o)} data-testid={testId && `${testId}--button`}>
          <span className="il-inline-message-icon" data-spacing={spacing}>
            <Icon label={iconLabel ?? label} color={color} spacing={spacing === 'spacious' ? 'spacious' : 'none'} />
          </span>
          {title ? <span className="il-inline-message-title">{title}</span> : null}
          {secondaryText ? <span className="il-inline-message-secondary">{secondaryText}</span> : null}
        </button>
      </InlineDialog>
    </div>
  );
}
