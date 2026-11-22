// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';

export interface EmptyStateProps {
  /** What is missing and why, in a short headline. */
  header: string;
  /** What people can do about it. */
  description?: ReactNode;
  /** The one action that fills the empty space. */
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  /** A link for more help, shown under the buttons. */
  tertiaryAction?: ReactNode;
  imageUrl?: string;
  /** Renders a spot illustration or icon above the header. */
  renderImage?: () => ReactNode;
  /** Maximum image height, so illustrations scale with the space. */
  maxImageHeight?: number;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** `narrow` for panels and small areas, `wide` for full pages. */
  width?: 'narrow' | 'wide';
  testId?: string;
}

/** Explains why an area has no content yet and how to fill it. */
export function EmptyState({ header, description, primaryAction, secondaryAction, tertiaryAction, imageUrl, renderImage, maxImageHeight = 160, headingLevel = 4, width = 'wide', testId }: EmptyStateProps) {
  const H = `h${headingLevel}` as 'h4';
  return (
    <div className="il-empty-state" data-width={width} data-testid={testId}>
      {renderImage ? <div className="il-empty-state-image">{renderImage()}</div> : imageUrl ? <img className="il-empty-state-image" src={imageUrl} alt="" style={{ maxHeight: maxImageHeight }} /> : null}
      <H className="il-empty-state-header">{header}</H>
      {description ? <p className="il-empty-state-description">{description}</p> : null}
      {primaryAction || secondaryAction ? (
        <div className="il-empty-state-actions">
          {primaryAction}
          {secondaryAction}
        </div>
      ) : null}
      {tertiaryAction ? <div className="il-empty-state-tertiary">{tertiaryAction}</div> : null}
    </div>
  );
}
