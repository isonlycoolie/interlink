// SPDX-License-Identifier: Apache-2.0
'use client';
import { PresenceCursor } from '@interlink/react/presence-cursor';
import { useEffect, useRef } from 'react';

/** A "You" presence tag that follows the mouse across the home canvas, as if you were in the file with the team. */
export function YouCursor() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    const home = el?.closest('.home');
    if (!el || !home || !matchMedia('(pointer: fine)').matches) return;
    let frame = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        el.dataset.on = 'true';
        const over = (e.target as Element | null)?.closest('[data-c]');
        el.dataset.tone = over?.getAttribute('data-c') ?? '';
      });
    };
    const leave = () => delete el.dataset.on;
    home.addEventListener('pointermove', move as EventListener);
    home.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(frame);
      home.removeEventListener('pointermove', move as EventListener);
      home.removeEventListener('pointerleave', leave);
    };
  }, []);
  return (
    <span ref={ref} className="home-you" aria-hidden="true">
      <PresenceCursor name="You" color="agent" />
    </span>
  );
}
