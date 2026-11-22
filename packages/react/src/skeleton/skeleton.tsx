// SPDX-License-Identifier: Apache-2.0
export interface SkeletonProps {
  width: string | number;
  height: string | number;
  borderRadius?: string;
  isShimmering?: boolean;
  testId?: string;
}

const size = (v: string | number) => (typeof v === 'number' ? `${v}px` : v);

/** A placeholder shape shown while content loads, matching the layout it stands in for. */
export function Skeleton({ width, height, borderRadius, isShimmering = true, testId }: SkeletonProps) {
  return <span className="il-skeleton" data-shimmer={isShimmering || undefined} style={{ width: size(width), height: size(height), borderRadius }} aria-hidden="true" data-testid={testId} />;
}

/** Placeholder lines for a block of text. The last line is shorter, like real paragraphs. */
export function SkeletonText({ lines = 3, isShimmering = true }: { lines?: number; isShimmering?: boolean }) {
  return (
    <span className="il-skeleton-text" aria-hidden="true">
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton key={i} width={i === lines - 1 ? '60%' : '100%'} height="0.5rem" borderRadius="var(--il-radius-full)" isShimmering={isShimmering} />
      ))}
    </span>
  );
}
