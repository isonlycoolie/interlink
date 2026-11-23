// SPDX-License-Identifier: Apache-2.0
import type { CSSProperties, ReactNode } from 'react';

export interface TourNoteProps {
  children: ReactNode;
  /** Solid colour of the card and its hand-drawn arrow. */
  tone: 'blue' | 'red';
  /** Where the arrow points from the card. */
  arrow: 'left' | 'up-right';
  /** Position inside the nearest positioned parent. */
  style?: CSSProperties;
}

/** A coach mark: a handwritten note on a solid card with a marker arrow pointing at the control it explains. */
export function TourNote({ children, tone, arrow, style }: TourNoteProps) {
  return (
    <div role="note" className="scr-note" data-tone={tone} data-arrow={arrow} style={style}>
      <svg className="scr-note-arrow" viewBox="0 0 120 60" aria-hidden="true">
        {arrow === 'left' ? (
          <>
            <path d="M118 40 C 96 44, 88 20, 70 30 S 40 44, 8 14" />
            <path d="M8 14 L 24 14 M8 14 L 14 28" />
          </>
        ) : (
          <>
            <ellipse cx="34" cy="38" rx="22" ry="14" transform="rotate(-24 34 38)" />
            <path d="M2 58 C 40 50, 70 30, 112 6" />
            <path d="M112 6 L 96 6 M112 6 L 106 20" />
          </>
        )}
      </svg>
      <p>{children}</p>
    </div>
  );
}
