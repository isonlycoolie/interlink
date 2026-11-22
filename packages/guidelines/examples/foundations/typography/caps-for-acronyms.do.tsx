// SPDX-License-Identifier: Apache-2.0
import CheckboxCheckedIcon from '@interlink/icons/core/checkbox-checked';
import CheckboxUncheckedIcon from '@interlink/icons/core/checkbox-unchecked';
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="20rem" padding="space.200">
      <Stack space="space.150">
        <Inline space="space.150" alignBlock="center"><CheckboxCheckedIcon label="" color="color.icon.brand" /><Text weight="medium" color="color.text.subtle">ABC-335</Text><Text>Link integration</Text></Inline>
        <Inline space="space.150" alignBlock="center"><CheckboxUncheckedIcon label="" /><Text weight="medium" color="color.text.subtle">ABC-341</Text><Text>Quick payment</Text></Inline>
        <Inline space="space.150" alignBlock="center"><CheckboxUncheckedIcon label="" /><Text weight="medium" color="color.text.subtle">ABC-342</Text><Text>Fast search</Text></Inline>
      </Stack>
    </Card>
  );
}
