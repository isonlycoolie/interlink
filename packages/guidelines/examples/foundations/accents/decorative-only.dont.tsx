// @interlink-dont accents.decorative-only
// SPDX-License-Identifier: Apache-2.0
import { Box, Inline, Text } from '@interlink/react/primitives';
import { AvatarShape, Pointer } from '../../../src/kit';

/** The badge borrows the information color, which implies a status that is not there. */
export default function Example() {
  return (
    <Pointer token="color.background.information.bold" tagFirst={false}>
      <Inline alignBlock="center">
        <span style={{ position: 'relative' }}>
          <AvatarShape initials="AM" background="color.background.accent.teal.subtler" />
          <span style={{ position: 'absolute', insetInlineEnd: 'calc(-1 * var(--il-space-050))', insetBlockEnd: 'calc(-1 * var(--il-space-050))' }}>
            <Box backgroundColor="color.background.information.bold" paddingInline="space.075">
              <Text size="small" weight="bold" color="color.text.inverse">J</Text>
            </Box>
          </span>
        </span>
        <AvatarShape initials="+2" />
      </Inline>
    </Pointer>
  );
}
