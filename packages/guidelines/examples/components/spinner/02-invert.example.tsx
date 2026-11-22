// SPDX-License-Identifier: Apache-2.0
import { Box } from '@interlink/react/primitives';
import { Spinner } from '@interlink/react/spinner';

/** Title: On bold backgrounds */
export default function Example() {
  return (
    <Box backgroundColor="color.background.brand.bold" padding="space.200">
      <Spinner appearance="invert" label="Loading" />
    </Box>
  );
}
