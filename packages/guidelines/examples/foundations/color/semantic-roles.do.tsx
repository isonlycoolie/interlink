// SPDX-License-Identifier: Apache-2.0
import QuestionCircleIcon from '@interlink/icons/core/question-circle';
import { Box, Inline, Stack, Text } from '@interlink/react/primitives';
import { Pointer } from '../../../src/kit';

/** The icon uses the discovery role, so it changes with every discovery message. */
export default function Example() {
  return (
    <Inline alignBlock="center">
      <Pointer token="color.icon.discovery" direction="horizontal">
        <Box backgroundColor="color.background.discovery" padding="space.200">
          <Inline space="space.150">
            <QuestionCircleIcon label="" color="color.icon.discovery" />
            <Stack space="space.050">
              <Text weight="bold">Try the new board view</Text>
              <Text size="small" color="color.text.subtle">Group work by status in one place.</Text>
            </Stack>
          </Inline>
        </Box>
      </Pointer>
    </Inline>
  );
}
