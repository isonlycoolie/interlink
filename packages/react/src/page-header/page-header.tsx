// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';

export interface PageHeaderProps {
  /** The page title. Keep it to what the page is for, in a few words. */
  children: ReactNode;
  /** Breadcrumbs that show where the page sits. */
  breadcrumbs?: ReactNode;
  /** Page actions at the end of the title row, primary action last. */
  actions?: ReactNode;
  /** Controls under the title that act on the whole page, such as tabs, search and filters. */
  bottomBar?: ReactNode;
  /** Truncates a long title to one line instead of wrapping. */
  truncateTitle?: boolean;
  /** Id of the title, so other elements can refer to it. */
  id?: string;
  testId?: string;
}

/**
 * The top of a full page: where it sits, what it is, and what people can do with it. Use one per page, never inside
 * a dialog, drawer or popup.
 */
export function PageHeader({ children, breadcrumbs, actions, bottomBar, truncateTitle = false, id, testId }: PageHeaderProps) {
  return (
    <div className="il-page-header" data-testid={testId}>
      {breadcrumbs ? <div className="il-page-header-breadcrumbs">{breadcrumbs}</div> : null}
      <div className="il-page-header-main">
        <h1 id={id} className="il-page-header-title" data-truncate={truncateTitle || undefined}>
          {children}
        </h1>
        {actions ? <div className="il-page-header-actions">{actions}</div> : null}
      </div>
      {bottomBar ? <div className="il-page-header-bottom">{bottomBar}</div> : null}
    </div>
  );
}
