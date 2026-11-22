// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';

export interface GenerativeBorderProps {
  children: ReactNode;
  /** Animates the border while the assistant is generating. Still when false. */
  isGenerating?: boolean;
  /** Corner radius of the content, as a radius token name. */
  radius?: 'small' | 'medium' | 'large' | 'xlarge' | 'full';
  /** Border thickness. */
  width?: 'thin' | 'thick';
  testId?: string;
}

/**
 * A border in solid blocks of the four assist colours. It marks an AI surface, and turns while content is being
 * generated. Motion stops for people who ask for reduced motion.
 */
export function GenerativeBorder({ children, isGenerating = false, radius = 'large', width = 'thin', testId }: GenerativeBorderProps) {
  return (
    <div className="il-generative-border" data-generating={isGenerating || undefined} data-radius={radius} data-width={width} aria-busy={isGenerating || undefined} data-testid={testId}>
      <div className="il-generative-border-content">{children}</div>
    </div>
  );
}
