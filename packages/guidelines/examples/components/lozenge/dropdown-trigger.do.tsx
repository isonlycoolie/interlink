// SPDX-License-Identifier: Apache-2.0
import ArrowUpRightIcon from '@interlink/icons/core/arrow-up-right';
import { Stack } from '@interlink/react/primitives';
import { Lozenge, LozengeDropdownTrigger } from '@interlink/react/lozenge';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.100" alignInline="center">
      <LozengeDropdownTrigger appearance="success" iconBefore={ArrowUpRightIcon} isSelected>On track</LozengeDropdownTrigger>
      <Card padding="space.200">
        <Stack space="space.100">
          <Lozenge appearance="success">On track</Lozenge>
          <Lozenge appearance="warning">At risk</Lozenge>
          <Lozenge appearance="danger">Off track</Lozenge>
        </Stack>
      </Card>
    </Stack>
  );
}
