// SPDX-License-Identifier: Apache-2.0
import type { CSSProperties } from 'react';

export type ProgressStatus = 'unvisited' | 'current' | 'visited' | 'disabled';

export interface ProgressStage {
  id: string;
  label: string;
  /** How far the bar after this marker is filled, 0 to 100. */
  percentageComplete: number;
  status: ProgressStatus;
  /** Visited stages with an href become links back to that step. */
  href?: string;
  onClick?: () => void;
  noLink?: boolean;
}

export interface ProgressTrackerProps {
  items: ProgressStage[];
  spacing?: 'comfortable' | 'cozy' | 'compact';
  /** Animate the bar and markers when progress changes. */
  animated?: boolean;
  /** Name of the list, read by screen readers. */
  label?: string;
  testId?: string;
}

/** Shows the steps of a multi-page task, which are done, and where people are now. */
export function ProgressTracker({ items, spacing = 'cozy', animated = true, label = 'Progress', testId }: ProgressTrackerProps) {
  return (
    <ol className="il-progress-tracker" aria-label={label} data-spacing={spacing} data-animated={animated || undefined} style={{ '--il-stages': items.length } as CSSProperties} data-testid={testId}>
      {items.map((stage) => {
        const link = stage.status === 'visited' && !stage.noLink && (stage.href || stage.onClick);
        return (
          <li key={stage.id} className="il-progress-stage" data-status={stage.status} aria-current={stage.status === 'current' ? 'step' : undefined}>
            <span className="il-progress-bar" style={{ '--il-stage-fraction': Math.max(0, Math.min(100, stage.percentageComplete)) / 100 } as CSSProperties} aria-hidden="true" />
            <span className="il-progress-marker" aria-hidden="true" />
            {link ? (
              <a className="il-progress-link il-focusable" href={stage.href} onClick={stage.onClick}>
                {stage.label}
              </a>
            ) : (
              <span className="il-progress-label">{stage.label}</span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
