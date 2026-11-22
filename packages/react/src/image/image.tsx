// SPDX-License-Identifier: Apache-2.0
import type { ImgHTMLAttributes } from 'react';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'className' | 'src' | 'alt'> {
  src: string;
  /** Shown instead of src in dark mode, for illustrations made for dark surfaces. */
  srcDark?: string;
  /** Describe the image, or use an empty string when it is decoration. */
  alt: string;
  testId?: string;
}

/**
 * An image that follows the theme: with srcDark it swaps to the dark version when the page is dark, by the
 * user's setting or by the system preference. Without srcDark it is a plain responsive image.
 */
export function Image({ src, srcDark, alt, testId, ...rest }: ImageProps) {
  if (!srcDark) return <img {...rest} className="il-image" src={src} alt={alt} data-testid={testId} />;
  return (
    <>
      <img {...rest} className="il-image" data-theme-variant="light" src={src} alt={alt} data-testid={testId} />
      <img {...rest} className="il-image" data-theme-variant="dark" src={srcDark} alt={alt} data-testid={testId && `${testId}--dark`} />
    </>
  );
}
