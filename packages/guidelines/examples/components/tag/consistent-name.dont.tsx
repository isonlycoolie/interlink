// @interlink-dont tag.consistent-name
// SPDX-License-Identifier: Apache-2.0
import TagIcon from '@interlink/icons/core/tag';
import { Inline, Text } from '@interlink/react/primitives';
import { Tag, TagGroup } from '@interlink/react/tag';

export default function Example() {
  return (
    <Inline space="space.300" alignBlock="center">
      <Text weight="medium">Labels</Text>
      <TagGroup label="Labels">
      <Tag text="support" color="green" elemBefore={<TagIcon label="" size="small" />} />
      <Tag text="initiative" color="magenta" elemBefore={<TagIcon label="" size="small" />} />
    </TagGroup>
    </Inline>
  );
}
