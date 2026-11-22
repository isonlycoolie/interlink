// @interlink-dont icon.limit-icons
// SPDX-License-Identifier: Apache-2.0
import AutomationIcon from '@interlink/icons/core/automation';
import CustomizeIcon from '@interlink/icons/core/customize';
import DeleteIcon from '@interlink/icons/core/delete';
import ImageIcon from '@interlink/icons/core/image';
import ShareIcon from '@interlink/icons/core/share';
import ShowMoreHorizontalIcon from '@interlink/icons/core/show-more-horizontal';
import { Inline, Stack, Text } from '@interlink/react/primitives';
import { IconButton } from '@interlink/react/button';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Stack space="space.100" alignInline="end">
      <Inline space="space.050"><IconButton icon={AutomationIcon} label="Automation" appearance="subtle" /><IconButton icon={ShareIcon} label="Share" appearance="subtle" /><IconButton icon={ShowMoreHorizontalIcon} label="More actions" isSelected /></Inline>
      <Card width="14rem" padding="space.200">
        <Stack space="space.150">
          <Inline space="space.100" alignBlock="center"><ImageIcon label="" /><Text>Edit sprint</Text></Inline>
          <Inline space="space.100" alignBlock="center"><DeleteIcon label="" /><Text>Delete sprint</Text></Inline>
          <Inline space="space.100" alignBlock="center"><CustomizeIcon label="" /><Text>Configure board</Text></Inline>
        </Stack>
      </Card>
    </Stack>
  );
}
