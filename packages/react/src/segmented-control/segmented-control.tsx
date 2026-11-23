// SPDX-License-Identifier: Apache-2.0
'use client';
import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

export interface SegmentedOption {
  value: string;
  label: ReactNode;
}

export interface SegmentedControlProps {
  /** Names the group for assistive technology. */
  label: string;
  options: SegmentedOption[];
  /** Controlled value. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Pill for marketing pages, outline for page-level view tabs; default is the compact product shape. */
  shape?: 'default' | 'pill' | 'outline';
  testId?: string;
}

/** One choice from a few views of the same content, shown side by side on a neutral track. */
export function SegmentedControl({ label, options, value, defaultValue, onChange, shape = 'default', testId }: SegmentedControlProps) {
  const [own, setOwn] = useState(defaultValue ?? options[0]?.value);
  const current = value ?? own;
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const pick = (v: string) => {
    setOwn(v);
    onChange?.(v);
  };
  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (i + step + options.length) % options.length;
    const option = options[next];
    if (!option) return;
    pick(option.value);
    refs.current[next]?.focus();
  };
  return (
    <div className="il-segmented" role="radiogroup" aria-label={label} data-shape={shape} data-testid={testId}>
      {options.map((o, i) => {
        const checked = o.value === current;
        return (
          <button
            key={o.value}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={checked}
            tabIndex={checked ? 0 : -1}
            className="il-segmented-option il-focusable"
            onClick={() => pick(o.value)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
