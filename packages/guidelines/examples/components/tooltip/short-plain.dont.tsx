// @interlink-dont tooltip.short-plain
// SPDX-License-Identifier: Apache-2.0
import ChartTrendIcon from '@interlink/icons/core/chart-trend';
import { Stack } from '@interlink/react/primitives';
import { IconButton } from '@interlink/react/button';
import { TooltipShape } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.075" alignInline="center">
      <IconButton icon={ChartTrendIcon} label="View insights" appearance="subtle" />
      <TooltipShape>1 view this week. Open the full insights report to see who viewed.</TooltipShape>
    </Stack>
  );
}
