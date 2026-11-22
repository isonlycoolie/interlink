// SPDX-License-Identifier: Apache-2.0
'use client';
import { useState, type MouseEvent } from 'react';

export type AvatarSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
const HUES = ['blue', 'teal', 'green', 'lime', 'orange', 'red', 'magenta', 'purple'];

/** Initials from a name, and a stable accent hue so a person keeps the same color everywhere. */
export function initialsOf(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? (parts.at(-1)?.[0] ?? '') : '')).toUpperCase();
}
const hueOf = (name = '') => HUES[[...name].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7) % HUES.length];

export interface AvatarProps {
  /** Person or project name; used for the accessible name and the initials fallback. */
  name?: string;
  src?: string;
  size?: AvatarSize;
  /** `square` for projects, teams and other non-people. */
  appearance?: 'circle' | 'square';
  presence?: 'online' | 'busy' | 'focus' | 'offline';
  status?: 'approved' | 'declined' | 'locked';
  /** Overrides the accessible name. Use an empty string when the name is shown next to the avatar. */
  label?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  /** Visual border color, used when avatars overlap in a group. */
  borderColor?: string;
  isDisabled?: boolean;
  testId?: string;
}

/** A picture, initials or icon that represents a person or entity. */
export function Avatar({ name, src, size = 'medium', appearance = 'circle', presence, status, label, href, onClick, borderColor, isDisabled, testId }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const a11y = label ?? name ?? '';
  const face = src && !failed ? (
    <img className="il-avatar-img" src={src} alt="" onError={() => setFailed(true)} />
  ) : (
    <span className="il-avatar-initials" data-hue={hueOf(name)} aria-hidden="true">
      {initialsOf(name)}
    </span>
  );
  const indicator = presence ? (
    <span className="il-avatar-presence" data-presence={presence} aria-hidden="true" />
  ) : status ? (
    <span className="il-avatar-status" data-status={status} aria-hidden="true" />
  ) : null;
  const common = {
    className: 'il-avatar il-focusable',
    'data-size': size,
    'data-appearance': appearance,
    'data-disabled': isDisabled || undefined,
    'data-testid': testId,
    style: borderColor ? { boxShadow: `0 0 0 var(--il-border-width-selected) ${borderColor}` } : undefined,
  };
  const content = (
    <>
      <span className="il-avatar-face">{face}</span>
      {indicator}
    </>
  );
  if (href) return <a {...common} href={href} aria-label={a11y || undefined}>{content}</a>;
  if (onClick) return <button {...common} type="button" onClick={onClick} disabled={isDisabled} aria-label={a11y || undefined}>{content}</button>;
  return <span {...common} role={a11y ? 'img' : undefined} aria-label={a11y || undefined} aria-hidden={a11y ? undefined : true}>{content}</span>;
}
