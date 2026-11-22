// SPDX-License-Identifier: Apache-2.0
'use client';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/**
 * Plays a short enter motion on the page content each time the route changes, while the header and side
 * navigation stay still. Motion tokens set the timing; reduced motion turns it off.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="site-transition">
      {children}
    </div>
  );
}
