// SPDX-License-Identifier: Apache-2.0
import type { IconProps } from '@interlink/icons';

/**
 * The assist mark: four solid quarters in the assist colours, separated by thin seams. It marks anything powered
 * by AI. Shaped like an icon so it fits wherever an icon does, such as a button's iconBefore.
 */
export function AssistMark({ label, size = 'medium', shouldScale, testId }: IconProps) {
  const px = size === 'small' ? 12 : 16;
  return (
    <span className="il-assist-mark" data-scale={shouldScale || undefined} role={label ? 'img' : undefined} aria-label={label || undefined} aria-hidden={label ? undefined : true} style={shouldScale ? undefined : { width: px, height: px }} data-testid={testId}>
      <svg viewBox="0 0 16 16" width="100%" height="100%" role="presentation">
        <path d="M8 8 L8 1 A7 7 0 0 0 1 8 Z" fill="var(--il-assist-icon-purple)" />
        <path d="M8 8 L15 8 A7 7 0 0 0 8 1 Z" fill="var(--il-assist-icon-saffron)" />
        <path d="M8 8 L8 15 A7 7 0 0 0 15 8 Z" fill="var(--il-assist-icon-blue)" />
        <path d="M8 8 L1 8 A7 7 0 0 0 8 15 Z" fill="var(--il-assist-icon-lime)" />
        <path d="M8 0.5 V15.5 M0.5 8 H15.5" stroke="var(--il-elevation-surface-current, var(--il-surface))" strokeWidth="1.1" />
      </svg>
    </span>
  );
}
