// SPDX-License-Identifier: Apache-2.0
import { Stack, Text } from '@interlink/react/primitives';
import { Tag, TagGroup } from '@interlink/react/tag';
import { Card } from '../../../src/kit';

export default function Example() {
  return (
    <Card width="20rem" padding="space.200">
      <Stack space="space.100">
        <Text weight="bold">Tags</Text>
        <TagGroup label="Tags">
      <Tag text="design" color="blue" />
      <Tag text="platform" color="purple" />
      <Tag text="fy26" color="orange" />
    </TagGroup>
      </Stack>
    </Card>
  );
}
