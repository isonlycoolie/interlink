// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import EditIcon from '@interlink/icons/core/edit';
import ShowMoreHorizontalIcon from '@interlink/icons/core/show-more-horizontal';
import StarUnstarredIcon from '@interlink/icons/core/star-unstarred';
import { Inline } from '@interlink/react/primitives';
import { IconButton } from '@interlink/react/button';

/** Title: Icon button */
export default function Example() {
  return (
    <Inline space="space.100">
      <IconButton icon={AddIcon} label="Add item" />
      <IconButton icon={EditIcon} label="Edit" appearance="primary" />
      <IconButton icon={ShowMoreHorizontalIcon} label="More actions" appearance="subtle" />
      <IconButton icon={StarUnstarredIcon} label="Star" shape="circle" />
    </Inline>
  );
}
