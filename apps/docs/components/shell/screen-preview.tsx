// SPDX-License-Identifier: Apache-2.0
'use client';
import { useEffect, useRef, type ReactNode } from 'react';

/** A real screen drawn at 1280 wide and scaled to fit its card. It cannot be focused or clicked, and is hidden from assistive tech. */
export function ScreenPreview({ children }: { children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => el.style.setProperty('--preview-scale', String(el.clientWidth / 1280));
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={box} className="site-screen-preview" aria-hidden="true">
      <div className="site-screen-preview-stage" inert>
        {children}
      </div>
    </div>
  );
}
