// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import type { MouseEvent, Ref } from 'react';
import type { LozengeProps } from './lozenge';

export interface LozengeDropdownTriggerProps extends Omit<LozengeProps, 'maxWidth'> {
  isSelected?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  'aria-label'?: string;
  ref?: Ref<HTMLButtonElement>;
}

const LEGACY: Record<string, string> = { default: 'neutral', removed: 'danger', inprogress: 'information', new: 'discovery', moved: 'warning' };

/** A lozenge people can click to change a status. Opens a menu of statuses. */
export function LozengeDropdownTrigger({ children, appearance = 'neutral', spacing = 'default', iconBefore: Icon, isSelected, onClick, testId, ref, ...rest }: LozengeDropdownTriggerProps) {
  return (
    <button
      ref={ref}
      type="button"
      className="il-lozenge il-focusable"
      data-color={LEGACY[appearance] ?? appearance}
      data-spacing={spacing}
      aria-haspopup="menu"
      aria-expanded={isSelected ?? false}
      aria-label={rest['aria-label']}
      data-testid={testId}
      onClick={onClick}
    >
      {Icon ? <span className="il-lozenge-icon"><Icon label="" size="small" /></span> : null}
      <span className="il-lozenge-text">{children}</span>
      <span className="il-lozenge-icon"><ChevronDownIcon label="" size="small" /></span>
    </button>
  );
}
