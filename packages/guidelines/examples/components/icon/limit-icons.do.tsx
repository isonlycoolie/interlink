// SPDX-License-Identifier: Apache-2.0
import ShowMoreHorizontalIcon from '@interlink/icons/core/show-more-horizontal';
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { IconButton } from '@interlink/react/button';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.100" alignInline="end">
      <Inline space="space.050"><IconButton icon={ShowMoreHorizontalIcon} label="More actions" isSelected /></Inline>
      <Card width="14rem" padding="space.200">
        <Stack space="space.150">
          <Text>Edit sprint</Text>
          <Text>Delete sprint</Text>
          <Text>Configure board</Text>
        </Stack>
      </Card>
    </Stack>
  );
}
