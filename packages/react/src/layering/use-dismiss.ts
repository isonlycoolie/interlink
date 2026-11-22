// SPDX-License-Identifier: Apache-2.0
'use client';
import { useEffect, useRef, type RefObject } from 'react';

/** Open layers, oldest first. Escape and outside clicks only reach the newest one. */
const stack: symbol[] = [];
export const isTopLayer = (id: symbol) => stack[stack.length - 1] === id;

export interface DismissOptions {
  isOpen: boolean;
  onDismiss: (event: Event) => void;
  /** Elements that count as inside, such as the trigger and the layer. */
  inside?: RefObject<HTMLElement | null>[];
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
}

/** Closes the newest open layer on Escape or a click outside it, so a menu in a modal closes before the modal. */
export function useDismiss({ isOpen, onDismiss, inside = [], closeOnEscape = true, closeOnOutsideClick = true }: DismissOptions) {
  const latest = useRef({ onDismiss, inside, closeOnEscape, closeOnOutsideClick });
  latest.current = { onDismiss, inside, closeOnEscape, closeOnOutsideClick };
  useEffect(() => {
    if (!isOpen) return;
    const id = Symbol('layer');
    stack.push(id);
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || !isTopLayer(id)) return;
      // Cancelling the key also stops a native dialog underneath from closing.
      e.preventDefault();
      if (latest.current.closeOnEscape) latest.current.onDismiss(e);
    };
    const onDown = (e: MouseEvent) => {
      const { closeOnOutsideClick: outside, inside: refs } = latest.current;
      if (!outside || !isTopLayer(id)) return;
      const target = e.target as Node;
      if (refs.some((r) => r.current?.contains(target))) return;
      latest.current.onDismiss(e);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      stack.splice(stack.indexOf(id), 1);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [isOpen]);
}
