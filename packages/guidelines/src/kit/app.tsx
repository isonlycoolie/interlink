// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';
import { Skeleton } from './kit';

/**
 * A small app window for guideline pictures. Real page parts (PageHeader, Panel) render inside it without the
 * landmarks of a full app, so a docs page can show many of them side by side.
 */
export function AppShape({ children, height = '18rem', row = false }: { children: ReactNode; height?: string; row?: boolean }) {
  return (
    <div className="ilk-app" data-row={row || undefined} style={{ height }}>
      {children}
    </div>
  );
}

/** The page area of an AppShape, padded like Main. */
export function PageArea({ children }: { children: ReactNode }) {
  return <div className="ilk-app-page">{children}</div>;
}

/** Lines of placeholder content for the body of a page. */
export function PageLines({ rows = 4 }: { rows?: number }) {
  const widths = ['100%', '92%', '96%', '70%', '88%', '60%'];
  return (
    <div className="ilk-app-lines">
      {Array.from({ length: rows }, (_, i) => (
        <Skeleton key={i} width={widths[i % widths.length]} />
      ))}
    </div>
  );
}

/** Covers the window, or only the element it sits in, with a blanket and a centred dialog. */
export function Cover({ children }: { children: ReactNode }) {
  return <div className="ilk-cover">{children}</div>;
}
