// SPDX-License-Identifier: Apache-2.0
import AttachmentIcon from '@interlink/icons/core/attachment';
import { Button } from '@interlink/react/button';
import { Stack } from '@interlink/react/primitives';
import { TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.075" alignInline="center">
      <Button iconBefore={AttachmentIcon}>Attach</Button>
      <TooltipShape>Add attachment</TooltipShape>
    </Stack>
  );
}
