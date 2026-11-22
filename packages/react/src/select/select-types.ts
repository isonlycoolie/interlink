// SPDX-License-Identifier: Apache-2.0
import type { FocusEvent, ReactNode, Ref } from 'react';

export interface OptionType {
  label: string;
  value: string | number;
  isDisabled?: boolean;
}
export interface GroupType<O> {
  label: string;
  options: readonly O[];
}
export type Options<O> = readonly (O | GroupType<O>)[];
export type SelectValue<O = OptionType> = O | readonly O[] | null;
export interface ActionMeta<O> {
  action: 'select-option' | 'deselect-option' | 'remove-value' | 'pop-value' | 'clear' | 'create-option';
  option?: O;
  removedValue?: O;
}

export interface SelectProps<O = OptionType> {
  /** Options, or groups of options with a label. */
  options?: Options<O>;
  /** Controlled value: an option, a list of options when isMulti, or null. */
  value?: SelectValue<O> | '';
  defaultValue?: SelectValue<O>;
  onChange?: (value: SelectValue<O>, meta: ActionMeta<O>) => void;
  onInputChange?: (inputValue: string) => void;
  /** Allow several values, shown as removable tags. */
  isMulti?: boolean;
  /** Type to filter the options. */
  isSearchable?: boolean;
  /** Show a button that clears the value. */
  isClearable?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  /** Show a spinner while options load. */
  isLoading?: boolean;
  /** Short hint inside the empty field. Never a replacement for the label. */
  placeholder?: ReactNode;
  noOptionsMessage?: (state: { inputValue: string }) => ReactNode;
  loadingMessage?: () => ReactNode;
  /** Render an option in the menu or as the chosen value. */
  formatOptionLabel?: (option: O, meta: { context: 'menu' | 'value' }) => ReactNode;
  getOptionLabel?: (option: O) => string;
  getOptionValue?: (option: O) => string;
  /** Custom filter, or null to show every option (for options filtered on a server). */
  filterOption?: ((option: O, inputValue: string) => boolean) | null;
  isOptionDisabled?: (option: O) => boolean;
  appearance?: 'default' | 'subtle' | 'none';
  spacing?: 'default' | 'compact';
  /** Id of the input, so a label can point at it. Field sets it. */
  id?: string;
  inputId?: string;
  /** Submits the value as hidden inputs with this name. */
  name?: string;
  menuPlacement?: 'auto' | 'bottom' | 'top';
  closeMenuOnSelect?: boolean;
  /** Hide chosen options from the menu; on by default for multi select. */
  hideSelectedOptions?: boolean;
  defaultMenuIsOpen?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
}

/** Private hooks used by CreatableSelect. */
export interface CreateOptions {
  formatCreateLabel: (inputValue: string) => ReactNode;
  isValidNewOption: (inputValue: string, options: Options<unknown>) => boolean;
  onCreate: (inputValue: string) => void;
}
