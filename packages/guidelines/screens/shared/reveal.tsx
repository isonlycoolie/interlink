// SPDX-License-Identifier: Apache-2.0
'use client';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

/** The place of a child in a Reveal, so children arrive one after another. */
export const stagger = (n: number) => ({ '--i': n }) as CSSProperties;

/**
 * Fades and lifts its children in once they scroll into view; children with `--i` follow one after another.
 * Without IntersectionObserver, or with reduced motion, content shows at once.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, { rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`lnd-reveal${className ? ` ${className}` : ''}`} data-shown={shown || undefined}>
      {children}
    </div>
  );
}

/** A hand-drawn marker arrow that joins two parts of a picture. */
export function MarkerArrow({ flip = false, className }: { flip?: boolean; className?: string }) {
  return (
    <svg className={`lnd-arrow${className ? ` ${className}` : ''}`} viewBox="0 0 120 60" aria-hidden="true" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <path d="M6 44 C 30 8, 70 6, 104 26" />
      <path d="M92 14 L 106 27 L 88 32" />
    </svg>
  );
}
