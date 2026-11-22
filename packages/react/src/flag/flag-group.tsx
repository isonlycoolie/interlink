// SPDX-License-Identifier: Apache-2.0
'use client';
import { Children, createElement, isValidElement, useContext, useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import { Flag, type FlagProps } from './flag';
import { FlagGroupContext, type FlagId } from './flag-parts';

export interface FlagGroupProps {
  /** Flags, newest first. Only the newest is fully shown; older ones wait behind it. */
  children?: ReactNode;
  onDismissed?: (id: FlagId) => void;
  /** Name of the region, read by screen readers. */
  label?: string;
  /** Element for the hidden heading that names the region. */
  labelTag?: ElementType;
  id?: string;
  testId?: string;
}

/** Holds flags at the bottom of the screen and announces new ones. */
export function FlagGroup({ children, onDismissed, label = 'Flag notifications', labelTag = 'h2', id, testId }: FlagGroupProps) {
  const flags = Children.toArray(children).filter(isValidElement);
  return (
    <section className="il-flag-group" id={id} aria-label={label} data-testid={testId}>
      {flags.length ? createElement(labelTag, { className: 'il-visually-hidden' }, label) : null}
      <div className="il-flag-stack">
        {flags.map((flag, i) => (
          <div key={flag.key ?? i} className="il-flag-slot" data-index={Math.min(i, 2)}>
            <FlagGroupContext.Provider value={{ onDismissed: (fid) => onDismissed?.(fid), isDismissAllowed: i === 0 }}>{flag}</FlagGroupContext.Provider>
          </div>
        ))}
      </div>
    </section>
  );
}

export interface AutoDismissFlagProps extends FlagProps {
  /** Seconds before the newest flag dismisses itself; paused while hovered or focused. */
  autoDismissSeconds?: number;
}

/** A flag that dismisses itself after a few seconds. Use only for success messages people don't need to act on. */
export function AutoDismissFlag({ autoDismissSeconds = 8, ...props }: AutoDismissFlagProps) {
  const group = useContext(FlagGroupContext);
  const [paused, setPaused] = useState(false);
  const dismiss = useRef(() => undefined as void);
  dismiss.current = () => {
    props.onDismissed?.(props.id);
    group.onDismissed(props.id);
  };
  useEffect(() => {
    if (paused || !group.isDismissAllowed) return;
    const t = setTimeout(() => dismiss.current(), autoDismissSeconds * 1000);
    return () => clearTimeout(t);
  }, [paused, group.isDismissAllowed, autoDismissSeconds]);
  return <Flag {...props} onMouseOver={() => setPaused(true)} onMouseOut={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} />;
}
