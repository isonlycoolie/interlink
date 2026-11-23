// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';

export type TourNoteTone = 'blue' | 'purple' | 'saffron' | 'lime' | 'ink' | 'red';
export type TourNotePlacement = 'right' | 'left' | 'bottom' | 'top';

export interface TourNoteProps {
  /** One short sentence about the control the note points at. */
  content: ReactNode;
  /** The control the note explains. The note sits beside it and never covers it. */
  children: ReactNode;
  /** Which side of the control the note sits on; the arrow points back at the control. */
  placement?: TourNotePlacement;
  /** Solid colour of the note and its arrow. */
  tone?: TourNoteTone;
  /** Body text, or the handwritten face for a sketched, first-run feel. */
  font?: 'body' | 'hand';
  /** Show or hide the note, for example once people have used the control. */
  isOpen?: boolean;
  /** Lay the control out as a block, for tables and panels, instead of inline. */
  isBlock?: boolean;
  testId?: string;
}

/** A coach mark for first use: a solid note with a drawn arrow, pointing at the control it explains. */
export function TourNote({ content, children, placement = 'right', tone = 'blue', font = 'body', isOpen = true, isBlock, testId }: TourNoteProps) {
  const vertical = placement === 'top' || placement === 'bottom';
  return (
    <span className="il-tour" data-placement={placement} data-block={isBlock || undefined}>
      {children}
      {isOpen ? (
        <span role="note" className="il-tour-note" data-tone={tone} data-font={font} data-testid={testId}>
          {vertical ? (
            <svg className="il-tour-arrow" data-axis="y" viewBox="0 0 44 88" aria-hidden="true">
              <path d="M30 86 C 33 70, 15 64, 22 51 S 32 29, 10 6" />
              <path d="M10 6 L 10 18 M10 6 L 21 10" />
            </svg>
          ) : (
            <svg className="il-tour-arrow" data-axis="x" viewBox="0 0 88 44" aria-hidden="true">
              <path d="M86 30 C 70 33, 64 15, 51 22 S 29 32, 6 10" />
              <path d="M6 10 L 18 10 M6 10 L 10 21" />
            </svg>
          )}
          {content}
        </span>
      ) : null}
    </span>
  );
}
