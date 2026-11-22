// SPDX-License-Identifier: Apache-2.0
'use client';
import type { MouseEvent, ReactNode } from 'react';

export interface BlanketProps {
  /** Tints the page behind; transparent blankets still catch clicks. */
  isTinted?: boolean;
  /** Let clicks pass through to the page. */
  shouldAllowClickThrough?: boolean;
  onBlanketClicked?: (event: MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode;
  testId?: string;
}

/** A layer over the page that focuses attention on what sits above it. Modal dialogs and drawers bring their own. */
export function Blanket({ isTinted = false, shouldAllowClickThrough = false, onBlanketClicked, children, testId }: BlanketProps) {
  return (
    <div
      className="il-blanket"
      data-tinted={isTinted || undefined}
      data-click-through={shouldAllowClickThrough || undefined}
      data-testid={testId}
      onClick={(e) => e.target === e.currentTarget && onBlanketClicked?.(e)}
      role="presentation"
    >
      {children}
    </div>
  );
}
