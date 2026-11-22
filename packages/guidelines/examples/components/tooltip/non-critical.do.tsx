// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import { Stack } from '@interlink/react/primitives';
import { Button } from '@interlink/react/button';
import { TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.075" alignInline="center">
      <Button appearance="primary" iconBefore={AddIcon}>Create</Button>
      <TooltipShape>Create page · C</TooltipShape>
    </Stack>
  );
}
