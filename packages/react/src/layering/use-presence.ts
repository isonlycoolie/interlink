// SPDX-License-Identifier: Apache-2.0
'use client';
import { useEffect, useState } from 'react';

const reduced = () => typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Keeps a layer mounted for its exit animation. `exitMs` matches the exit motion token of the layer
 * (for example the 200ms in --il-modal-exit). Exits are instant under reduced motion.
 */
export function usePresence(isOpen: boolean, exitMs: number) {
  const [mounted, setMounted] = useState(isOpen);
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      return;
    }
    if (reduced()) {
      setMounted(false);
      return;
    }
    const t = setTimeout(() => setMounted(false), exitMs);
    return () => clearTimeout(t);
  }, [isOpen, exitMs]);
  return { isMounted: isOpen || mounted, isExiting: !isOpen && mounted };
}
