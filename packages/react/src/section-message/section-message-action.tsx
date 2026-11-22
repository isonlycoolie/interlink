// SPDX-License-Identifier: Apache-2.0
import type { MouseEvent, ReactNode } from 'react';

export interface SectionMessageActionProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  testId?: string;
}

/** A link or button inside a section message. */
export function SectionMessageAction({ children, href, onClick, testId }: SectionMessageActionProps) {
  return href ? (
    <a className="il-section-message-action" href={href} onClick={onClick} data-testid={testId}>
      {children}
    </a>
  ) : onClick ? (
    <button type="button" className="il-section-message-action il-pressable il-focusable" onClick={onClick} data-testid={testId}>
      {children}
    </button>
  ) : (
    <span data-testid={testId}>{children}</span>
  );
}
