// @interlink-dont tag.objects-not-people
// SPDX-License-Identifier: Apache-2.0
import { Tag, TagGroup } from '@interlink/react/tag';
import { Avatar } from '@interlink/react/avatar';

export default function Example() {
  return (
    <TagGroup label="People">
      <Tag text="Kai Moto" isRemovable elemBefore={<Avatar name="Kai Moto" size="xsmall" label="" />} />
      <Tag text="Lena Ruiz" isRemovable elemBefore={<Avatar name="Lena Ruiz" size="xsmall" label="" />} />
      <Tag text="Omar Haddad" isRemovable elemBefore={<Avatar name="Omar Haddad" size="xsmall" label="" />} />
    </TagGroup>
  );
}
