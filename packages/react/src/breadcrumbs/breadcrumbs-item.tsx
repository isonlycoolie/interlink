// SPDX-License-Identifier: Apache-2.0
'use client';
import type { MouseEvent, ReactNode } from 'react';
import { Tooltip } from '../tooltip/tooltip';

export interface BreadcrumbsItemProps {
  /** Page or section name. */
  text: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  target?: '_blank' | '_self' | '_top' | '_parent';
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  /** Truncate the text at this width in pixels; the full text shows in a tooltip. */
  truncationWidth?: number;
  /** Set by Breadcrumbs on the last item. */
  'aria-current'?: 'page';
  testId?: string;
}

/** One level in a breadcrumb trail. */
export function BreadcrumbsItem({ text, href, onClick, target, iconBefore, iconAfter, truncationWidth, 'aria-current': current, testId }: BreadcrumbsItemProps) {
  const content = (
    <>
      {iconBefore ? <span className="il-breadcrumbs-icon">{iconBefore}</span> : null}
      <span className="il-breadcrumbs-text" style={truncationWidth ? { maxWidth: truncationWidth } : undefined}>
        {text}
      </span>
      {iconAfter ? <span className="il-breadcrumbs-icon">{iconAfter}</span> : null}
    </>
  );
  const props = { className: 'il-breadcrumbs-link il-focusable', 'aria-current': current, onClick, 'data-testid': testId };
  const link = href ? (
    <a {...props} href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
      {content}
    </a>
  ) : (
    <button type="button" {...props}>
      {content}
    </button>
  );
  return <li className="il-breadcrumbs-item">{truncationWidth ? <Tooltip content={text}>{link}</Tooltip> : link}</li>;
}
