// SPDX-License-Identifier: Apache-2.0
'use client';
import CrossIcon from '@interlink/icons/core/cross';
import HashtagIcon from '@interlink/icons/core/hashtag';
import { useState, type ReactNode } from 'react';

export type TagColor = 'standard' | 'gray' | 'red' | 'orange' | 'yellow' | 'lime' | 'green' | 'teal' | 'blue' | 'purple' | 'magenta';

export interface TagProps {
  text: string;
  /** Accent color; tags never carry status meaning. */
  color?: TagColor;
  /** Makes the tag a link. */
  href?: string;
  isRemovable?: boolean;
  /** Return false to keep the tag, for example after a confirmation is declined. */
  onBeforeRemoveAction?: () => boolean;
  onAfterRemoveAction?: (text: string) => void;
  removeButtonLabel?: string;
  /** Shown before the text instead of the hashtag, such as a color swatch or avatar. */
  elemBefore?: ReactNode;
  appearance?: 'default' | 'rounded';
  testId?: string;
}

/** A keyword or category that labels and organises an item. */
export function Tag({ text, color = 'standard', href, isRemovable, onBeforeRemoveAction, onAfterRemoveAction, removeButtonLabel, elemBefore, appearance = 'default', testId }: TagProps) {
  const [removed, setRemoved] = useState(false);
  if (removed) return null;
  const inner = (
    <>
      <span className="il-tag-before">{elemBefore ?? <HashtagIcon label="" size="small" />}</span>
      <span className="il-tag-text">{text}</span>
    </>
  );
  return (
    <span className="il-tag" data-color={color} data-appearance={appearance} data-testid={testId}>
      {href ? (
        <a className="il-tag-content il-focusable" href={href}>
          {inner}
        </a>
      ) : (
        <span className="il-tag-content">{inner}</span>
      )}
      {isRemovable ? (
        <button
          type="button"
          className="il-tag-remove il-focusable"
          aria-label={removeButtonLabel ?? `Remove ${text}`}
          onClick={() => {
            if (onBeforeRemoveAction && onBeforeRemoveAction() === false) return;
            setRemoved(true);
            onAfterRemoveAction?.(text);
          }}
        >
          <CrossIcon label="" size="small" />
        </button>
      ) : null}
    </span>
  );
}

/** Wraps tags onto as many lines as needed. */
export function TagGroup({ children, alignment = 'start', label }: { children: ReactNode; alignment?: 'start' | 'end'; label?: string }) {
  return (
    <div className="il-tag-group" data-alignment={alignment} role="group" aria-label={label}>
      {children}
    </div>
  );
}

/** A small square of color, used before tag text when the color itself means something. */
export const Swatch = ({ color }: { color: string }) => <span className="il-swatch" style={{ background: color }} aria-hidden="true" />;
