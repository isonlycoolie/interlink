// SPDX-License-Identifier: Apache-2.0
import { Tag, TagGroup } from '@interlink/react/tag';

export default function Example() {
  return (
    <TagGroup label="Tags">
      <Tag text="spike" color="blue" isRemovable />
      <Tag text="minor fix" color="red" isRemovable />
      <Tag text="project" color="lime" isRemovable />
      <Tag text="guidance" color="purple" isRemovable />
      <Tag text="blog" color="teal" isRemovable />
    </TagGroup>
  );
}
