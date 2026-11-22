// SPDX-License-Identifier: Apache-2.0
import { DropdownItem, DropdownItemGroup, DropdownMenu } from '@interlink/react/dropdown-menu';

/** Title: Default */
export default function Example() {
  return (
    <DropdownMenu trigger="Actions" label="Page actions">
      <DropdownItemGroup>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Move</DropdownItem>
        <DropdownItem>Copy link</DropdownItem>
      </DropdownItemGroup>
      <DropdownItemGroup hasSeparator>
        <DropdownItem>Archive</DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
  );
}
