// SPDX-License-Identifier: Apache-2.0
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import ChevronLeftIcon from '@interlink/icons/core/chevron-left';
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import FullscreenEnterIcon from '@interlink/icons/core/fullscreen-enter';
import { Button, IconButton } from '@interlink/react/button';
import { Box, Inline, xcss } from '@interlink/react/primitives';

const toolbar = xcss({ backgroundColor: 'elevation.surface.overlay', boxShadow: 'elevation.shadow.overlay', borderRadius: 'radius.medium', padding: 'space.050' });
const divider = xcss({ alignSelf: 'stretch', borderStyle: 'none none none solid', borderInlineStartWidth: 'border.width', borderInlineStartColor: 'color.border' });

/** One floating toolbar holds all the calendar controls. */
export default function Example() {
  return (
    <Box xcss={toolbar} role="toolbar" aria-label="Calendar">
      <Inline space="space.050" alignBlock="center">
        <IconButton icon={ChevronLeftIcon} label="Previous week" appearance="subtle" />
        <IconButton icon={ChevronRightIcon} label="Next week" appearance="subtle" />
        <Box xcss={divider} />
        <Button appearance="subtle">Today</Button>
        <Button appearance="subtle" iconAfter={ChevronDownIcon}>Weeks</Button>
        <Box xcss={divider} />
        <IconButton icon={FullscreenEnterIcon} label="Full screen" appearance="subtle" />
      </Inline>
    </Box>
  );
}
