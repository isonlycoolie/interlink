// SPDX-License-Identifier: Apache-2.0

export type BadgeAppearance =
  | 'default' | 'primary' | 'primaryInverted' | 'important' | 'added' | 'removed'
  | 'neutral' | 'information' | 'success' | 'warning' | 'danger' | 'discovery' | 'inverse'
  | 'informationBold' | 'successBold' | 'warningBold' | 'dangerBold' | 'discoveryBold';

const ALIAS: Record<string, string> = { default: 'neutral', primary: 'information', primaryInverted: 'inverse', important: 'dangerBold', added: 'success', removed: 'danger' };

export interface BadgeProps {
  /** A number, or short text such as a version. Numbers above `max` show as max+. */
  children: number | string;
  appearance?: BadgeAppearance;
  /** Highest number to show before switching to `max+`. Set false to never cap. */
  max?: number | false;
  testId?: string;
}

/** A count or short value next to a label, such as unread items or open work. */
export function Badge({ children, appearance = 'default', max = 99, testId }: BadgeProps) {
  const text = typeof children === 'number' && max !== false && children > max ? `${max}+` : String(children);
  return (
    <span className="il-badge" data-appearance={ALIAS[appearance] ?? appearance} data-testid={testId}>
      {text}
    </span>
  );
}
