// SPDX-License-Identifier: Apache-2.0
'use client';
import { useEffect, useRef, type ReactNode } from 'react';

export const VIEWPORTS = { desktop: 1440, tablet: 834, mobile: 390 } as const;
export type Viewport = keyof typeof VIEWPORTS;

/**
 * A live screen drawn at a real device width and scaled down to fit its box, so a 1440 wide dashboard can be used in
 * the middle of a docs page. It stays interactive; the frame's height follows the box.
 */
export function Stage({ viewport, children }: { viewport: Viewport; children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const width = VIEWPORTS[viewport];
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => {
      const scale = Math.min(1, el.clientWidth / width);
      el.style.setProperty('--stage-scale', String(scale));
      el.style.setProperty('--stage-h', `${el.clientHeight / scale}px`);
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);
  return (
    <div ref={box} className="screen-stage" data-viewport={viewport}>
      <div className="screen-stage-inner" style={{ width }}>
        {children}
      </div>
    </div>
  );
}
