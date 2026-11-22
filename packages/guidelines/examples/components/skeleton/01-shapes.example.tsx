// SPDX-License-Identifier: Apache-2.0
import { Box, Inline } from '@interlink/react/primitives';
import { Skeleton, SkeletonText } from '@interlink/react/skeleton';

/** Title: Shapes and text */
export default function Example() {
  return (
    <Inline space="space.200" alignBlock="center">
      <Skeleton width={40} height={40} borderRadius="var(--il-radius-full)" />
      <Box xcss={undefined} style={{ width: '14rem' }}><SkeletonText lines={3} /></Box>
    </Inline>
  );
}
