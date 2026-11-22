// SPDX-License-Identifier: Apache-2.0
import EditIcon from '@interlink/icons/core/edit';
import { Stack } from '@interlink/react/primitives';
import { IconButton } from '@interlink/react/button';
import { TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.075" alignInline="center">
      <IconButton icon={EditIcon} label="Edit page" />
      <TooltipShape>Edit page</TooltipShape>
    </Stack>
  );
}
