// SPDX-License-Identifier: Apache-2.0
import { Inline, Text } from '@interlink/react/primitives';
import { Tag, TagGroup } from '@interlink/react/tag';

export default function Example() {
  return (
    <Inline space="space.300" alignBlock="center">
      <Text weight="medium">Tags</Text>
      <TagGroup label="Tags">
      <Tag text="support" color="green" />
      <Tag text="initiative" color="magenta" />
      <Tag text="code review" color="blue" />
    </TagGroup>
    </Inline>
  );
}
