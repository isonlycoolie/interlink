// SPDX-License-Identifier: Apache-2.0
import { Swatch, Tag, TagGroup } from '@interlink/react/tag';

export default function Example() {
  return (
    <TagGroup label="Teams">
      <Tag text="UX changes" elemBefore={<Swatch color="var(--il-background-accent-purple-bolder)" />} />
      <Tag text="Core" />
    </TagGroup>
  );
}
