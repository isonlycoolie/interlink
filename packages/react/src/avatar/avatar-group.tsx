// SPDX-License-Identifier: Apache-2.0
'use client';
import { Avatar, type AvatarProps, type AvatarSize } from './avatar';

export interface AvatarGroupProps {
  data: (Pick<AvatarProps, 'name' | 'src' | 'href' | 'appearance' | 'presence' | 'status'> & { key?: string })[];
  appearance?: 'stack' | 'grid';
  size?: AvatarSize;
  maxCount?: number;
  /** Called with the hidden people when the overflow button is pressed. */
  onMoreClick?: (hidden: AvatarGroupProps['data']) => void;
  label?: string;
  testId?: string;
}

/** Several avatars together, with a +n button when there are more than fit. */
export function AvatarGroup({ data, appearance = 'stack', size = 'medium', maxCount = appearance === 'stack' ? 5 : 11, onMoreClick, label = 'People', testId }: AvatarGroupProps) {
  const shown = data.length > maxCount ? data.slice(0, maxCount - 1) : data;
  const hidden = data.slice(shown.length);
  return (
    <ul className="il-avatar-group" data-appearance={appearance} aria-label={label} data-testid={testId}>
      {shown.map((d, i) => (
        <li key={d.key ?? `${d.name}-${i}`}>
          <Avatar {...d} size={size} borderColor="var(--il-surface)" />
        </li>
      ))}
      {hidden.length ? (
        <li>
          <button type="button" className="il-avatar il-avatar-more il-focusable" data-size={size} data-appearance="circle" aria-label={`${hidden.length} more people`} onClick={() => onMoreClick?.(hidden)}>
            <span className="il-avatar-face">
              <span className="il-avatar-initials" aria-hidden="true">{`+${hidden.length}`}</span>
            </span>
          </button>
        </li>
      ) : null}
    </ul>
  );
}
