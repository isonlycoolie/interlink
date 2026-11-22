// @interlink-dont tooltip.non-critical
// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.075" alignInline="center">
      <Button appearance="primary">Submit</Button>
      <TooltipShape>An error occurred loading this form. Refresh the page.</TooltipShape>
    </Stack>
  );
}
