// SPDX-License-Identifier: Apache-2.0
'use client';
import { useId, useRef, type KeyboardEvent, type MouseEvent } from 'react';
import { nextIndex } from '../layering/focus';

export interface ProgressIndicatorProps {
  /** One entry per step; only the count matters. */
  values: unknown[];
  selectedIndex: number;
  appearance?: 'default' | 'help' | 'inverted' | 'primary';
  size?: 'default' | 'large';
  spacing?: 'comfortable' | 'cozy' | 'compact';
  /** Makes the dots buttons that move between steps, in a tab list. */
  onSelect?: (event: { event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>; index: number }) => void;
  /** Id prefix of the panels the dots control, as `${ariaControls}-${index}`. */
  ariaControls?: string;
  /** Name of the group of dots. */
  ariaLabel?: string;
  getAriaLabel?: (index: number) => string;
  testId?: string;
}

/** Dots that show which step of a short sequence people are on, such as in onboarding. */
export function ProgressIndicator({ values, selectedIndex, appearance = 'default', size = 'default', spacing = 'comfortable', onSelect, ariaControls, ariaLabel = 'Steps', getAriaLabel = (i) => `Step ${i + 1}`, testId }: ProgressIndicatorProps) {
  const id = useId();
  const list = useRef<HTMLDivElement | null>(null);
  const attrs = { className: 'il-progress-indicator', 'data-appearance': appearance, 'data-size': size, 'data-spacing': spacing, 'data-testid': testId };
  if (!onSelect) {
    return (
      <div {...attrs} role="img" aria-label={`${ariaLabel}: ${getAriaLabel(selectedIndex)} of ${values.length}`}>
        {values.map((_, i) => (
          <span key={i} className="il-progress-dot" data-selected={i === selectedIndex || undefined} />
        ))}
      </div>
    );
  }
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const next = nextIndex(e.key, selectedIndex, values.length, 'horizontal');
    if (next === null) return;
    e.preventDefault();
    onSelect({ event: e, index: next });
    list.current?.querySelectorAll<HTMLButtonElement>('button')[next]?.focus();
  };
  return (
    <div {...attrs} ref={list} role="tablist" aria-label={ariaLabel}>
      {values.map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          id={`${id}-tab-${i}`}
          className="il-progress-dot il-focusable"
          aria-selected={i === selectedIndex}
          aria-controls={ariaControls && `${ariaControls}-${i}`}
          aria-label={getAriaLabel(i)}
          tabIndex={i === selectedIndex ? 0 : -1}
          data-selected={i === selectedIndex || undefined}
          onClick={(event) => onSelect({ event, index: i })}
          onKeyDown={onKeyDown}
        />
      ))}
    </div>
  );
}
