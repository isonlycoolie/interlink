// @interlink-dont elevation.limit-floating
// SPDX-License-Identifier: Apache-2.0
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import ChevronLeftIcon from '@interlink/icons/core/chevron-left';
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import FullscreenEnterIcon from '@interlink/icons/core/fullscreen-enter';
import { Button, IconButton } from '@interlink/react/button';
import { Box, Inline, xcss } from '@interlink/react/primitives';
import type { ReactNode } from 'react';

const floating = xcss({ backgroundColor: 'elevation.surface.overlay', boxShadow: 'elevation.shadow.overlay', borderRadius: 'radius.medium' });
const Float = ({ children }: { children: ReactNode }) => <Box xcss={floating}>{children}</Box>;

/** Every control floats on its own, so the bar becomes a row of competing shadows. */
export default function Example() {
  return (
    <Inline space="space.150" alignBlock="center">
      <Float><IconButton icon={ChevronLeftIcon} label="Previous week" appearance="subtle" /></Float>
      <Float><IconButton icon={ChevronRightIcon} label="Next week" appearance="subtle" /></Float>
      <Float><Button appearance="subtle">Today</Button></Float>
      <Float><Button appearance="subtle" iconAfter={ChevronDownIcon}>Weeks</Button></Float>
      <Float><IconButton icon={FullscreenEnterIcon} label="Full screen" appearance="subtle" /></Float>
    </Inline>
  );
}
