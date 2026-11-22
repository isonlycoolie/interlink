// SPDX-License-Identifier: Apache-2.0
import { Box, Inline, Text } from '@interlink/react/primitives';
import { AvatarShape, Pointer } from '../../../src/kit';

/** The badge color is decorative, so it uses an accent. */
export default function Example() {
  return (
    <Pointer token="color.background.accent.blue.bolder" tagFirst={false}>
      <Inline alignBlock="center">
        <span style={{ position: 'relative' }}>
          <AvatarShape initials="AM" background="color.background.accent.teal.subtler" />
          <span style={{ position: 'absolute', insetInlineEnd: 'calc(-1 * var(--il-space-050))', insetBlockEnd: 'calc(-1 * var(--il-space-050))' }}>
            <Box backgroundColor="color.background.accent.blue.bolder" paddingInline="space.075">
              <Text size="small" weight="bold" color="color.text.inverse">J</Text>
            </Box>
          </span>
        </span>
        <AvatarShape initials="+2" />
      </Inline>
    </Pointer>
  );
}
