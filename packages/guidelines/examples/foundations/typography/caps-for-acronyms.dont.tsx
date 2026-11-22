// @interlink-dont typography.caps-for-acronyms
// SPDX-License-Identifier: Apache-2.0
import CheckboxCheckedIcon from '@interlink/icons/core/checkbox-checked';
import CheckboxUncheckedIcon from '@interlink/icons/core/checkbox-unchecked';
import { Stack, Text } from '@interlink/react/primitives';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="20rem" padding="space.200">
      <Stack space="space.200">
        <Text size="small" weight="bold" color="color.text.subtle">SUBSCRIPTION</Text>
        <Text>Details</Text>
        <Text>Billing history</Text>
        <Text>Payment</Text>
      </Stack>
    </Card>
  );
}
