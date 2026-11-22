// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { RadioGroup } from '@interlink/react/radio';

/** Title: Radio group */
export default function Example() {
  return (
    <Stack space="space.050">
      <Text size="small" weight="bold" color="color.text.subtle" id="rg-1">Role</Text>
      <RadioGroup aria-labelledby="rg-1" defaultValue="editor" options={[{ label: 'Admin', value: 'admin' }, { label: 'Editor', value: 'editor' }, { label: 'Viewer', value: 'viewer', isDisabled: true }]} />
    </Stack>
  );
}
