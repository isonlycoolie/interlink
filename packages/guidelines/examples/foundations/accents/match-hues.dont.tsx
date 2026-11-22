// @interlink-dont accents.match-hues
// SPDX-License-Identifier: Apache-2.0
import ShapesIcon from '@interlink/icons/core/shapes';
import { Box, Inline, Stack, Text } from '@interlink/react/primitives';
import { Pointer, TokenTag } from '../../../src/kit';

/** Magenta text on a purple background mixes hues. */
export default function Example() {
  return (
    <Stack space="space.0" alignInline="center">
      <Pointer token="color.text.accent.magenta">
        <Box backgroundColor="color.background.accent.purple.subtler" paddingBlock="space.100" paddingInline="space.200">
          <Inline space="space.100" alignBlock="center">
            <ShapesIcon label="" color="color.icon.accent.magenta" />
            <Text size="large" color="color.text.accent.magenta">Label</Text>
          </Inline>
        </Box>
      </Pointer>
      <span className="ilk-connector" aria-hidden="true" />
      <TokenTag token="color.background.accent.purple.subtler" />
    </Stack>
  );
}
