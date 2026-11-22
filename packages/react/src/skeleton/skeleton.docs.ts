// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { SkeletonProps } from './skeleton';

export const skeletonDocs = docsFor<SkeletonProps>({
  name: "Skeleton",
  package: '@interlink/react/skeleton',
  exports: ["Skeleton", "SkeletonText"],
  description: "A skeleton is a placeholder shape shown while content loads.",
  status: 'ga',
  category: "Loading",
  keywords: ["skeleton", "loading", "placeholder", "shimmer"],
  props: {
    width: {"type": "string | number", "description": "Width of the shape."},
    height: {"type": "string | number", "description": "Height of the shape."},
    borderRadius: {"type": "string", "description": "Corner radius, such as a radius token var."},
    isShimmering: {"type": "boolean", "description": "Animates gently; off with reduced motion.", "default": "true"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
