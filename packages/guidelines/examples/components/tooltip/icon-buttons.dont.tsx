// @interlink-dont tooltip.icon-buttons
// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.075" alignInline="center">
      <Button>Edit page</Button>
      <TooltipShape>Edit page</TooltipShape>
    </Stack>
  );
}
