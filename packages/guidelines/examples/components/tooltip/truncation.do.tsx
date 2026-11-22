// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Card, TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="16rem" padding="space.200">
      <Stack space="space.075">
        <Text size="small" maxLines={1}>Data assessment accounts team</Text>
        <TooltipShape>Data assessment accounts team</TooltipShape>
      </Stack>
    </Card>
  );
}
