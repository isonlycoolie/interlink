// @interlink-dont typography.body-in-components
// SPDX-License-Identifier: Apache-2.0
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import { Button } from '@interlink/react/button';
import { Heading, Stack } from '@interlink/react/primitives';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.100" alignInline="start">
      <Button isSelected iconAfter={ChevronDownIcon}>Page actions</Button>
      <Card width="12rem" padding="space.200">
        <Stack space="space.150">
          <Heading size="medium" as="div">Edit</Heading>
          <Heading size="medium" as="div">Move</Heading>
        </Stack>
      </Card>
    </Stack>
  );
}
