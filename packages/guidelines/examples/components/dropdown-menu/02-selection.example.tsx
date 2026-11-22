// SPDX-License-Identifier: Apache-2.0
import { DropdownItemCheckbox, DropdownItemCheckboxGroup, DropdownItemRadio, DropdownItemRadioGroup, DropdownMenu } from '@interlink/react/dropdown-menu';

/** Title: Checkbox and radio items */
export default function Example() {
  return (
    <DropdownMenu trigger="View" label="View options">
      <DropdownItemCheckboxGroup id="show" title="Show">
        <DropdownItemCheckbox id="done" defaultSelected>
          Done items
        </DropdownItemCheckbox>
        <DropdownItemCheckbox id="subtasks">Subtasks</DropdownItemCheckbox>
      </DropdownItemCheckboxGroup>
      <DropdownItemRadioGroup id="sort" title="Sort by" hasSeparator>
        <DropdownItemRadio id="updated" defaultSelected>
          Last updated
        </DropdownItemRadio>
        <DropdownItemRadio id="created">Created</DropdownItemRadio>
      </DropdownItemRadioGroup>
    </DropdownMenu>
  );
}
