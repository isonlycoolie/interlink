// SPDX-License-Identifier: Apache-2.0
import type { ReactElement, ReactNode, Ref } from 'react';

export type BannerAppearance = 'warning' | 'error' | 'announcement';

export interface BannerProps {
  appearance?: BannerAppearance;
  /** Status icon shown before the message, usually matching the appearance. */
  icon?: ReactElement;
  /** One short line. Links inside inherit the banner color and stay underlined. */
  children?: ReactNode;
  testId?: string;
  ref?: Ref<HTMLDivElement>;
}

/**
 * A full-width message at the top of the page about something that affects the whole product, such as
 * downtime or an expired licence. Warnings and errors are announced; announcements are a labelled region.
 */
export function Banner({ appearance = 'warning', icon, children, testId, ref }: BannerProps) {
  const urgent = appearance !== 'announcement';
  return (
    <div
      ref={ref}
      className="il-banner"
      data-appearance={appearance}
      role={urgent ? 'alert' : 'region'}
      aria-label={urgent ? undefined : 'Announcement'}
      data-testid={testId}
    >
      {icon ? (
        <span className="il-banner-icon">
          {icon}
        </span>
      ) : null}
      <span className="il-banner-text">{children}</span>
    </div>
  );
}
