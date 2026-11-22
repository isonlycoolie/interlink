// @interlink-dont elevation.surface-shadow-pairs
// SPDX-License-Identifier: Apache-2.0
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import { Button } from '@interlink/react/button';
import { Box, Inline, Stack, Text, xcss } from '@interlink/react/primitives';
import { Pointer } from '../../../src/kit';

const menu = xcss({ backgroundColor: 'elevation.surface', boxShadow: 'elevation.shadow.raised', borderRadius: 'radius.small', paddingBlock: 'space.075', minWidth: '9rem' });
const item = xcss({ paddingBlock: 'space.100', paddingInline: 'space.200' });

/** The menu mixes the default surface with a raised shadow. */
export default function Example() {
  return (
    <Inline space="space.0" alignBlock="end">
      <Stack space="space.300" alignInline="end">
        <Pointer token="elevation.surface" direction="horizontal">
          <span />
        </Pointer>
        <Pointer token="elevation.shadow.raised" direction="horizontal">
          <span />
        </Pointer>
      </Stack>
      <Stack space="space.050">
        <Button isSelected iconAfter={ChevronDownIcon}>Choices</Button>
        <Box xcss={menu}>
          <Box xcss={item}><Text>Option</Text></Box>
          <Box xcss={item}><Text>Option</Text></Box>
        </Box>
      </Stack>
    </Inline>
  );
}
