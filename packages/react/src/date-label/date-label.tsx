// SPDX-License-Identifier: Apache-2.0
'use client';
import CalendarIcon from '@interlink/icons/core/calendar';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import ClockIcon from '@interlink/icons/core/clock';
import WarningIcon from '@interlink/icons/core/warning';
import type { CSSProperties, MouseEventHandler } from 'react';
import { Spinner } from '../spinner/spinner';

export type DateLabelAppearance = 'neutral' | 'warning' | 'danger';
/** Each appearance has its own icon so the status reads without color: calendar, due soon, overdue. */
const ICON = { neutral: CalendarIcon, warning: ClockIcon, danger: WarningIcon };
const ICON_LABEL = { neutral: 'Date', warning: 'Due soon', danger: 'Overdue' };

export interface DateLabelProps {
  /** The formatted date, such as "28 May 2026". */
  label: string;
  appearance?: DateLabelAppearance;
  /** Show the status icon. Keep it on for warning and danger. */
  hasIconBefore?: boolean;
  /** Accessible name of the icon; defaults to the meaning of the appearance. */
  iconLabel?: string;
  maxWidth?: number | string;
  /** Larger size for headers and detail views. */
  isSpacious?: boolean;
  testId?: string;
}

const width = (maxWidth?: number | string): CSSProperties | undefined => (maxWidth === undefined ? undefined : { maxWidth });

/** A date, and whether it needs attention, in a compact label. */
export function DateLabel({ label, appearance = 'neutral', hasIconBefore = true, iconLabel, maxWidth, isSpacious = false, testId }: DateLabelProps) {
  const Icon = ICON[appearance];
  return (
    <span className="il-date-label" data-appearance={appearance} data-spacious={isSpacious || undefined} style={width(maxWidth)} data-testid={testId}>
      {hasIconBefore ? <Icon label={appearance === 'neutral' ? '' : (iconLabel ?? ICON_LABEL[appearance])} size="small" color="currentColor" /> : null}
      <span className="il-date-label-text">{label}</span>
    </span>
  );
}

export interface DateLabelDropdownTriggerProps extends DateLabelProps {
  isLoading?: boolean;
  /** Pressed look while its menu or picker is open. */
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  'aria-controls'?: string;
  'aria-expanded'?: boolean;
  'aria-haspopup'?: boolean | 'dialog' | 'menu';
  'aria-label'?: string;
}

/** A date label people can press to change the date, for example to open a date picker. */
export function DateLabelDropdownTrigger({ label, appearance = 'neutral', hasIconBefore = true, iconLabel, maxWidth, isSpacious = false, isLoading = false, isSelected = false, onClick, testId, ...aria }: DateLabelDropdownTriggerProps) {
  const Icon = ICON[appearance];
  return (
    <button type="button" className="il-date-label il-focusable" data-appearance={appearance} data-spacious={isSpacious || undefined} data-selected={isSelected || undefined} aria-busy={isLoading || undefined} style={width(maxWidth)} onClick={onClick} data-testid={testId} {...aria}>
      {hasIconBefore ? <Icon label={appearance === 'neutral' ? '' : (iconLabel ?? ICON_LABEL[appearance])} size="small" color="currentColor" /> : null}
      <span className="il-date-label-text" data-loading={isLoading || undefined}>
        {label}
      </span>
      <ChevronDownIcon label="" size="small" color="currentColor" />
      {isLoading ? (
        <span className="il-date-label-loading">
          <Spinner size="xsmall" label="Loading" />
        </span>
      ) : null}
    </button>
  );
}
