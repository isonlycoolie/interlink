// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ImageProps } from './image';

type Documented = Pick<ImageProps, 'src' | 'srcDark' | 'alt' | 'testId'>;

export const imageDocs = docsFor<Documented>({
  name: "Image",
  package: '@interlink/react/image',
  exports: ["Image"],
  description: "An image that swaps to a dark version in dark mode.",
  status: 'ga',
  category: "Images and icons",
  keywords: ["image", "illustration", "dark mode"],
  props: {
    src: {"type": "string", "description": "Image for light mode."},
    srcDark: {"type": "string", "description": "Image for dark mode."},
    alt: {"type": "string", "description": "Describes the image; empty for decoration."},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
