// SPDX-License-Identifier: Apache-2.0
export interface ProgressBarProps {
  /** Progress from 0 to 1. */
  value?: number;
  isIndeterminate?: boolean;
  appearance?: 'default' | 'success' | 'inverse';
  /** Names what is progressing, for assistive tech. */
  ariaLabel?: string;
  testId?: string;
}

/** Shows how far a task has got, such as an upload. Not for comparing data. */
export function ProgressBar({ value = 0, isIndeterminate, appearance = 'default', ariaLabel, testId }: ProgressBarProps) {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100);
  return (
    <span
      className="il-progress"
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={isIndeterminate ? undefined : pct}
      data-appearance={appearance}
      data-indeterminate={isIndeterminate || undefined}
      data-testid={testId}
    >
      <span className="il-progress-bar" style={isIndeterminate ? undefined : { width: `${pct}%` }} />
    </span>
  );
}
