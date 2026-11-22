// SPDX-License-Identifier: Apache-2.0
import { Tag, TagGroup } from '@interlink/react/tag';

/** Title: Removable and link tags */
export default function Example() {
  return (
    <TagGroup label="Tags">
      <Tag text="release" isRemovable />
      <Tag text="handbook" href="#handbook" />
    </TagGroup>
  );
}
