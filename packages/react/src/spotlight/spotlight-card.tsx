// SPDX-License-Identifier: Apache-2.0
'use client';
import CrossIcon from '@interlink/icons/core/cross';
import { useContext, type MouseEvent, type ReactNode } from 'react';
import { SpotlightContext } from './popover';

interface Slot {
  children?: ReactNode;
  testId?: string;
}
const slot = (className: string) =>
  function SpotlightSlot({ children, testId }: Slot) {
    return (
      <div className={className} data-testid={testId}>
        {children}
      </div>
    );
  };

/** The dark card of a spotlight, with a caret pointing at the target. */
export function SpotlightCard({ children, testId }: Slot) {
  const { side } = useContext(SpotlightContext);
  return (
    <div className="il-spotlight-card" data-side={side} data-testid={testId}>
      <span className="il-spotlight-caret" aria-hidden="true" />
      {children}
    </div>
  );
}

/** Headline and controls in a row. */
export const SpotlightHeader = slot('il-spotlight-header');
/** Holds the dismiss control at the end of the header. */
export const SpotlightControls = slot('il-spotlight-controls');
/** An illustration or image, cropped to the card width. */
export const SpotlightMedia = slot('il-spotlight-media');
/** One or two short sentences. */
export const SpotlightBody = slot('il-spotlight-body');

/** The spotlight's title; it names the dialog. */
export function SpotlightHeadline({ children, testId }: Slot) {
  const { headingId } = useContext(SpotlightContext);
  return (
    <h2 className="il-spotlight-headline" id={headingId} data-testid={testId}>
      {children}
    </h2>
  );
}

export interface SpotlightDismissControlProps {
  /** Defaults to the dismiss handler of PopoverContent. */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  testId?: string;
}
export function SpotlightDismissControl({ onClick, label = 'Dismiss', testId }: SpotlightDismissControlProps) {
  const { dismiss } = useContext(SpotlightContext);
  return (
    <button type="button" className="il-spotlight-dismiss il-focusable" aria-label={label} onClick={(e) => (onClick ?? dismiss)?.(e)} data-testid={testId}>
      <CrossIcon label="" color="color.icon.inverse" />
    </button>
  );
}
