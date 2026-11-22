// SPDX-License-Identifier: Apache-2.0
import EditIcon from '@interlink/icons/core/edit';
import { IconButton } from '@interlink/react/button';
import { Tooltip } from '@interlink/react/tooltip';

/** Title: Default */
export default function Example() {
  return (
    <Tooltip content="Edit page">
      <IconButton icon={EditIcon} label="Edit" />
    </Tooltip>
  );
}
