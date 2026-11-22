// SPDX-License-Identifier: Apache-2.0
import { Tag, TagGroup } from '@interlink/react/tag';

export default function Example() {
  return (
    <TagGroup label="Tags">
      <Tag text="design" color="red" />
      <Tag text="lead" color="purple" />
      <Tag text="marketing" color="orange" />
      <Tag text="management" color="lime" />
      <Tag text="backend" color="blue" />
    </TagGroup>
  );
}
