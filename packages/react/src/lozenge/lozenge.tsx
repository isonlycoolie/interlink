// SPDX-License-Identifier: Apache-2.0
import type { IconProps } from '@interlink/icons';
import type { ComponentType, ReactNode } from 'react';

export type LozengeSemantic = 'neutral' | 'success' | 'warning' | 'danger' | 'information' | 'discovery';
export type LozengeAccent = `accent-${'red' | 'orange' | 'yellow' | 'lime' | 'green' | 'teal' | 'blue' | 'purple' | 'magenta' | 'gray'}`;
/** Older status names, kept so existing code reads naturally. */
export type LozengeLegacyAppearance = 'default' | 'inprogress' | 'moved' | 'new' | 'removed' | 'success';

const LEGACY: Record<string, LozengeSemantic> = { default: 'neutral', removed: 'danger', inprogress: 'information', new: 'discovery', moved: 'warning' };

export interface LozengeProps {
  children?: ReactNode;
  appearance?: LozengeSemantic | LozengeAccent | LozengeLegacyAppearance;
  /** `spacious` for lozenges that sit beside 32px controls. */
  spacing?: 'default' | 'spacious';
  iconBefore?: ComponentType<IconProps>;
  /** Truncate after this width (px or %). */
  maxWidth?: number | string;
  /** A short number shown at the end, such as a score. */
  trailingMetric?: string;
  testId?: string;
}

/** A short status label. Use sentence case and one or two words. */
export function Lozenge({ children, appearance = 'neutral', spacing = 'default', iconBefore: Icon, maxWidth = 200, trailingMetric, testId }: LozengeProps) {
  const color = LEGACY[appearance] ?? appearance;
  const max = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
  return (
    <span className="il-lozenge" data-color={color} data-spacing={spacing} data-testid={testId} style={{ maxWidth: `min(${max}, 100%)` }}>
      {Icon ? (
        <span className="il-lozenge-icon">
          <Icon label="" size="small" />
        </span>
      ) : null}
      <span className="il-lozenge-text">{children}</span>
      {trailingMetric ? <span className="il-lozenge-metric">{trailingMetric}</span> : null}
    </span>
  );
}
