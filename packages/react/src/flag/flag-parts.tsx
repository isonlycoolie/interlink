// SPDX-License-Identifier: Apache-2.0
'use client';
import StatusErrorIcon from '@interlink/icons/core/status-error';
import StatusInformationIcon from '@interlink/icons/core/status-information';
import StatusSuccessIcon from '@interlink/icons/core/status-success';
import StatusWarningIcon from '@interlink/icons/core/status-warning';
import { createContext, type MouseEvent, type ReactNode } from 'react';

export type FlagAppearance = 'normal' | 'info' | 'success' | 'warning' | 'error';
export type FlagId = string | number;

export interface FlagAction {
  content: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  href?: string;
  target?: string;
  testId?: string;
}

/** Set by FlagGroup: only the newest flag can be dismissed or auto-dismissed. */
export const FlagGroupContext = createContext<{ onDismissed: (id: FlagId) => void; isDismissAllowed: boolean }>({ onDismissed: () => undefined, isDismissAllowed: false });

const ICONS = { normal: StatusInformationIcon, info: StatusInformationIcon, success: StatusSuccessIcon, warning: StatusWarningIcon, error: StatusErrorIcon };
const ICON_COLOR = { normal: 'color.icon.subtle', info: 'color.icon.inverse', success: 'color.icon.inverse', warning: 'color.icon.warning.inverse', error: 'color.icon.inverse' } as const;

/** The default status icon for an appearance, in the flag's icon color. */
export function DefaultFlagIcon({ appearance }: { appearance: FlagAppearance }) {
  const Icon = ICONS[appearance];
  return <Icon label={appearance === 'normal' ? '' : appearance} color={ICON_COLOR[appearance]} />;
}

export function FlagActions({ actions, appearance }: { actions: FlagAction[]; appearance: FlagAppearance }) {
  if (!actions.length) return null;
  return (
    <div className="il-flag-actions" data-appearance={appearance}>
      {actions.map((a, i) =>
        a.href ? (
          <a key={i} className="il-flag-action il-focusable" href={a.href} target={a.target} onClick={a.onClick} data-testid={a.testId}>
            {a.content}
          </a>
        ) : (
          <button key={i} type="button" className="il-flag-action il-focusable" onClick={a.onClick} data-testid={a.testId}>
            {a.content}
          </button>
        ),
      )}
    </div>
  );
}
