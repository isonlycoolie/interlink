// SPDX-License-Identifier: Apache-2.0
import { Tag, TagGroup } from '@interlink/react/tag';

/** Title: Colors */
export default function Example() {
  return (
    <TagGroup label="Tags">
      <Tag text="design" color="purple" />
      <Tag text="backend" color="blue" />
      <Tag text="docs" color="green" />
      <Tag text="misc" />
    </TagGroup>
  );
}
