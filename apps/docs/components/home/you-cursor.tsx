// SPDX-License-Identifier: Apache-2.0
'use client';
import { PresenceCursor } from '@interlink/react/presence-cursor';
import { useEffect, useRef } from 'react';

/** Places where the tag would get in the way: live screens, code and anything you type into. */
const QUIET = '.screen-stage, .screen-full-canvas, .site-screen-preview, pre, input, textarea, select, [contenteditable], [role="dialog"]';

/** A "You" presence tag that rides beside the pointer on every page, as if you were in the file with the team. */
export function YouCursor() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !matchMedia('(pointer: fine)').matches) return;
    let frame = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = e.target as Element | null;
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        if (target?.closest(QUIET)) delete el.dataset.on;
        else el.dataset.on = 'true';
        el.dataset.tone = target?.closest('[data-c]')?.getAttribute('data-c') ?? '';
      });
    };
    const leave = () => delete el.dataset.on;
    document.addEventListener('pointermove', move);
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
    };
  }, []);
  return (
    <span ref={ref} className="home-you" aria-hidden="true">
      <PresenceCursor name="You" color="agent" />
    </span>
  );
}
