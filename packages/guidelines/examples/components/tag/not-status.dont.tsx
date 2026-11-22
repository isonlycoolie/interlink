// @interlink-dont tag.not-status
// SPDX-License-Identifier: Apache-2.0
import { Tag, TagGroup } from '@interlink/react/tag';

export default function Example() {
  return (
    <TagGroup label="Status">
      <Tag text="In progress" color="blue" />
      <Tag text="Active" color="green" />
      <Tag text="Urgent" color="red" />
      <Tag text="Paused" />
    </TagGroup>
  );
}
