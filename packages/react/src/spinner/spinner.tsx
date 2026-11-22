// SPDX-License-Identifier: Apache-2.0
import type { Ref } from 'react';

export type SpinnerSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
const SIZES: Record<SpinnerSize, number> = { xsmall: 12, small: 16, medium: 24, large: 48, xlarge: 96 };

export interface SpinnerProps {
  /** `inherit` draws in the subtle icon colour; `invert` is for bold backgrounds. */
  appearance?: 'inherit' | 'invert';
  /** Milliseconds before the spinner appears, so fast operations never flash it. */
  delay?: number;
  /** Announced to assistive tech. Leave empty when nearby text already says what is loading. */
  label?: string;
  size?: SpinnerSize | number;
  testId?: string;
  ref?: Ref<SVGSVGElement>;
}

/** Shows that something is loading when the wait is short and of unknown length. */
export function Spinner({ appearance = 'inherit', delay = 0, label, size = 'medium', testId, ref }: SpinnerProps) {
  const px = typeof size === 'number' ? size : SIZES[size];
  const animationDelay = `${delay}ms`;
  return (
    <span className="il-spinner" data-testid={testId ? `${testId}-wrapper` : undefined} style={{ width: px, height: px, animationDelay }}>
      <svg
        ref={ref}
        className="il-spinner-svg"
        data-testid={testId}
        width={px}
        height={px}
        viewBox="0 0 16 16"
        role={label ? 'img' : 'none'}
        aria-label={label || undefined}
        style={{ animationDelay }}
      >
        <circle cx="8" cy="8" r="7" className="il-spinner-circle" data-appearance={appearance} />
      </svg>
    </span>
  );
}
