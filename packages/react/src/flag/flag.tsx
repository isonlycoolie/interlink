// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import ChevronUpIcon from '@interlink/icons/core/chevron-up';
import CrossIcon from '@interlink/icons/core/cross';
import { createElement, useContext, useId, useState, type FocusEventHandler, type MouseEventHandler, type ReactNode } from 'react';
import { DefaultFlagIcon, FlagActions, FlagGroupContext, type FlagAction, type FlagAppearance, type FlagId } from './flag-parts';

export type { FlagAction, FlagAppearance, FlagId } from './flag-parts';

export interface FlagProps {
  /** Unique id, passed back to onDismissed. */
  id: FlagId;
  title: ReactNode;
  description?: ReactNode;
  /** Status icon; defaults to one that matches the appearance. */
  icon?: ReactNode;
  /** Normal flags are white; the others are bold and collapse their description until expanded. */
  appearance?: FlagAppearance;
  /** Up to two short actions, such as Undo or View. */
  actions?: FlagAction[];
  onDismissed?: (id: FlagId) => void;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  onMouseOver?: MouseEventHandler<HTMLElement>;
  onMouseOut?: MouseEventHandler<HTMLElement>;
  onFocus?: FocusEventHandler<HTMLElement>;
  onBlur?: FocusEventHandler<HTMLElement>;
  testId?: string;
}

/** A short notification at the bottom of the screen confirming an action or reporting a problem. Place inside FlagGroup. */
export function Flag({ id, title, description, icon, appearance = 'normal', actions = [], onDismissed, headingLevel = 2, onMouseOver, onMouseOut, onFocus, onBlur, testId }: FlagProps) {
  const group = useContext(FlagGroupContext);
  const bold = appearance !== 'normal';
  const [expanded, setExpanded] = useState(false);
  const bodyId = useId();
  const canExpand = bold && !!(description || actions.length);
  const showBody = !bold || expanded;
  const dismiss = () => {
    onDismissed?.(id);
    group.onDismissed(id);
  };
  return (
    <div
      className="il-flag"
      data-appearance={appearance}
      role={appearance === 'error' || appearance === 'warning' ? 'alert' : 'status'}
      data-testid={testId}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div className="il-flag-row">
        <span className="il-flag-icon">{icon ?? <DefaultFlagIcon appearance={appearance} />}</span>
        <div className="il-flag-main">
          {createElement(`h${headingLevel}`, { className: 'il-flag-title' }, title)}
          {showBody ? (
            <div className="il-flag-body" id={bodyId}>
              {description ? <div className="il-flag-description">{description}</div> : null}
              <FlagActions actions={actions} appearance={appearance} />
            </div>
          ) : null}
        </div>
        {canExpand ? (
          <button type="button" className="il-flag-button il-focusable" aria-expanded={expanded} aria-controls={expanded ? bodyId : undefined} aria-label={expanded ? 'Hide details' : 'Show details'} onClick={() => setExpanded((v) => !v)}>
            {expanded ? <ChevronUpIcon label="" /> : <ChevronDownIcon label="" />}
          </button>
        ) : !bold && group.isDismissAllowed ? (
          <button type="button" className="il-flag-button il-focusable" aria-label="Dismiss" onClick={dismiss} data-testid={testId && `${testId}-dismiss`}>
            <CrossIcon label="" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
