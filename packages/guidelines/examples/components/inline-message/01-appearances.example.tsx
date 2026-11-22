// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { InlineMessage } from '@interlink/react/inline-message';

/** Title: Appearances */
export default function Example() {
  return (
    <Stack space="space.150">
      <InlineMessage appearance="connectivity" title="Offline" secondaryText="Changes will sync later">
        <Text>You can keep working. We will save your changes when you reconnect.</Text>
      </InlineMessage>
      <InlineMessage appearance="confirmation" title="Published">
        <Text>Everyone in the space can now see this page.</Text>
      </InlineMessage>
      <InlineMessage appearance="warning" title="2 fields need attention">
        <Text>Add a due date and an owner before sharing.</Text>
      </InlineMessage>
      <InlineMessage appearance="error" title="Upload failed">
        <Text>The file is larger than 10 MB.</Text>
      </InlineMessage>
    </Stack>
  );
}
