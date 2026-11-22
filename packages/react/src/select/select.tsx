// SPDX-License-Identifier: Apache-2.0
'use client';
import { SelectBase } from './select-base';
import type { OptionType, SelectProps } from './select-types';

export type { ActionMeta, GroupType, Options, OptionType, SelectProps, SelectValue } from './select-types';

/**
 * Choose one or several options from a list that people can filter by typing. Follows the combobox
 * pattern: the input keeps focus while arrow keys move through the options.
 */
export function Select<O = OptionType>(props: SelectProps<O>) {
  return <SelectBase {...props} />;
}
