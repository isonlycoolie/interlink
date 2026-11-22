// SPDX-License-Identifier: Apache-2.0
import type { CSSProperties } from 'react';

export interface SkeletonItemProps {
  /** Show a round placeholder before the text, for people. */
  hasAvatar?: boolean;
  /** Show a square placeholder before the text, for icons. */
  hasIcon?: boolean;
  /** Width of the text placeholder; varies by position when not set. */
  width?: string | number;
  isShimmering?: boolean;
  testId?: string;
}

/** A placeholder item while menu content loads. */
export function SkeletonItem({ hasAvatar, hasIcon, width, isShimmering = false, testId }: SkeletonItemProps) {
  const style = width !== undefined ? ({ '--il-skeleton-width': typeof width === 'number' ? `${width}px` : width } as CSSProperties) : undefined;
  return <div className="il-menu-skeleton-item" data-before={hasAvatar ? 'avatar' : hasIcon ? 'icon' : undefined} data-width={width !== undefined || undefined} data-shimmer={isShimmering || undefined} style={style} data-testid={testId} aria-hidden="true" />;
}

export interface SkeletonHeadingItemProps {
  width?: string | number;
  isShimmering?: boolean;
  testId?: string;
}

/** A placeholder section heading while menu content loads. */
export function SkeletonHeadingItem({ width, isShimmering = false, testId }: SkeletonHeadingItemProps) {
  const style = width !== undefined ? ({ '--il-skeleton-width': typeof width === 'number' ? `${width}px` : width } as CSSProperties) : undefined;
  return <div className="il-menu-skeleton-heading" data-shimmer={isShimmering || undefined} style={style} data-testid={testId} aria-hidden="true" />;
}
