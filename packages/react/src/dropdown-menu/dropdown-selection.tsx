// SPDX-License-Identifier: Apache-2.0
'use client';
import CheckboxCheckedIcon from '@interlink/icons/core/checkbox-checked';
import CheckboxUncheckedIcon from '@interlink/icons/core/checkbox-unchecked';
import RadioCheckedIcon from '@interlink/icons/core/radio-checked';
import RadioUncheckedIcon from '@interlink/icons/core/radio-unchecked';
import { useContext, useEffect, type MouseEvent, type ReactNode } from 'react';
import { MenuItemContent } from '../menu/menu-item';
import { GroupIdContext, SelectionContext, useDropdown } from './dropdown-context';
import { DropdownItemGroup, type DropdownItemGroupProps } from './dropdown-items';

export interface DropdownItemSelectableProps {
  /** Unique within its group. */
  id: string;
  children?: ReactNode;
  description?: ReactNode;
  /** Initial state when uncontrolled. */
  defaultSelected?: boolean;
  /** Controlled state. */
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  shouldTitleWrap?: boolean;
  shouldDescriptionWrap?: boolean;
  testId?: string;
}

function Selectable({ kind, id, children, description, defaultSelected = false, isSelected, isDisabled = false, onClick, shouldTitleWrap, shouldDescriptionWrap, testId }: DropdownItemSelectableProps & { kind: 'checkbox' | 'radio' }) {
  const group = useContext(GroupIdContext);
  const store = useContext(SelectionContext);
  const { spacing } = useDropdown();
  const stored = store?.get(group, id);
  // A radio default applies only until something in its group has been chosen.
  const known = kind === 'radio' ? !!store?.has(group) : stored !== undefined;
  useEffect(() => {
    if (!known && defaultSelected) (kind === 'radio' ? store?.pick(group, id) : store?.set(group, id, true));
  }, []);
  const checked = isSelected ?? (known ? !!stored : defaultSelected);
  const Icon = kind === 'radio' ? (checked ? RadioCheckedIcon : RadioUncheckedIcon) : checked ? CheckboxCheckedIcon : CheckboxUncheckedIcon;
  const toggle = (e: MouseEvent<HTMLElement>) => {
    if (isDisabled) return;
    if (kind === 'radio') store?.pick(group, id);
    else store?.set(group, id, !checked);
    onClick?.(e);
  };
  return (
    <button type="button" className="il-dropdown-item" role={kind === 'radio' ? 'menuitemradio' : 'menuitemcheckbox'} aria-checked={checked} aria-disabled={isDisabled || undefined} tabIndex={-1} data-spacing={spacing} data-checked={checked || undefined} onClick={toggle} data-testid={testId}>
      <MenuItemContent iconBefore={<Icon label="" color={checked && !isDisabled ? 'color.icon.selected' : 'color.icon.subtle'} />} description={description} shouldTitleWrap={shouldTitleWrap} shouldDescriptionWrap={shouldDescriptionWrap}>
        {children}
      </MenuItemContent>
    </button>
  );
}

/** An option people can turn on and off; the menu stays open. */
export const DropdownItemCheckbox = (props: DropdownItemSelectableProps) => <Selectable kind="checkbox" {...props} />;
/** One option of a set where only one can be chosen; the menu stays open. */
export const DropdownItemRadio = (props: DropdownItemSelectableProps) => <Selectable kind="radio" {...props} />;

export interface DropdownSelectionGroupProps extends DropdownItemGroupProps {
  /** Unique id of the group; it keeps the selection while the menu is closed. */
  id: string;
}
export function DropdownItemCheckboxGroup({ id, ...rest }: DropdownSelectionGroupProps) {
  return (
    <GroupIdContext.Provider value={id}>
      <DropdownItemGroup id={id} {...rest} />
    </GroupIdContext.Provider>
  );
}
export function DropdownItemRadioGroup({ id, ...rest }: DropdownSelectionGroupProps) {
  return (
    <GroupIdContext.Provider value={id}>
      <DropdownItemGroup id={id} {...rest} />
    </GroupIdContext.Provider>
  );
}
