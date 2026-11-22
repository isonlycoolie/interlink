// @interlink-dont tooltip.interactive-only
// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Lozenge } from '@interlink/react/lozenge';
import { TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.075" alignInline="center">
      <Lozenge appearance="discovery">Beta</Lozenge>
      <TooltipShape>This is a new feature</TooltipShape>
    </Stack>
  );
}
