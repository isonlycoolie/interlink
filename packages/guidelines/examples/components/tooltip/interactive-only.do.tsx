// SPDX-License-Identifier: Apache-2.0
import { Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { Lozenge } from '@interlink/react/lozenge';
import { TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.075" alignInline="center">
      <Button appearance="subtle">Analyze <Lozenge appearance="discovery">Beta</Lozenge></Button>
      <TooltipShape>Analyze is a new feature</TooltipShape>
    </Stack>
  );
}
