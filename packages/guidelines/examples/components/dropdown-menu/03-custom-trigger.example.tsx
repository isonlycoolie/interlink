// SPDX-License-Identifier: Apache-2.0
import ShowMoreHorizontalIcon from '@interlink/icons/core/show-more-horizontal';
import { IconButton } from '@interlink/react/button';
import { DropdownItem, DropdownItemGroup, DropdownMenu } from '@interlink/react/dropdown-menu';

/** Title: Custom trigger */
export default function Example() {
  return (
    <DropdownMenu label="More actions" trigger={({ testId, ...props }) => <IconButton {...props} testId={testId} icon={ShowMoreHorizontalIcon} label="More actions" />}>
      <DropdownItemGroup>
        <DropdownItem>Rename</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
  );
}
