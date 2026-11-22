// @interlink-dont tag.meaningful-swatch
// SPDX-License-Identifier: Apache-2.0
import { Swatch, Tag, TagGroup } from '@interlink/react/tag';

export default function Example() {
  return (
    <TagGroup label="Tags">
      <Tag text="wcag24" elemBefore={<Swatch color="var(--il-background-accent-green-bolder)" />} />
      <Tag text="team25" elemBefore={<Swatch color="var(--il-background-accent-purple-bolder)" />} />
      <Tag text="lab21" elemBefore={<Swatch color="var(--il-background-accent-blue-bolder)" />} />
      <Tag text="fy24" elemBefore={<Swatch color="var(--il-background-accent-orange-bolder)" />} />
    </TagGroup>
  );
}
