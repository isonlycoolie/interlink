// SPDX-License-Identifier: Apache-2.0
'use client';
import { useState, type ReactNode } from 'react';
import { SelectBase } from './select-base';
import type { OptionType, Options, SelectProps, SelectValue } from './select-types';

export interface CreatableSelectProps<O = OptionType> extends SelectProps<O> {
  /** Handle a new option yourself, such as saving it; otherwise it is added and selected. */
  onCreateOption?: (inputValue: string) => void;
  /** Text of the row that creates an option. */
  formatCreateLabel?: (inputValue: string) => ReactNode;
  isValidNewOption?: (inputValue: string, options: Options<O>) => boolean;
}

/** A Select that also lets people add an option that is not in the list. */
export function CreatableSelect<O = OptionType>({ onCreateOption, formatCreateLabel = (v) => `Create "${v}"`, isValidNewOption = (v) => v.trim().length > 0, options = [], ...rest }: CreatableSelectProps<O>) {
  const [created, setCreated] = useState<O[]>([]);
  const [own, setOwn] = useState<SelectValue<O>>(rest.defaultValue ?? null);
  const value = rest.value !== undefined ? rest.value : own;
  const onCreate = (input: string) => {
    if (onCreateOption) return onCreateOption(input);
    const option = { label: input, value: input } as O;
    setCreated((c) => [...c, option]);
    const next: SelectValue<O> = rest.isMulti ? [...((Array.isArray(value) ? value : []) as O[]), option] : option;
    setOwn(next);
    rest.onChange?.(next, { action: 'create-option', option });
  };
  return (
    <SelectBase
      {...rest}
      options={[...options, ...created]}
      value={value}
      onChange={(v, meta) => {
        setOwn(v);
        rest.onChange?.(v, meta);
      }}
      create={{ formatCreateLabel, isValidNewOption: isValidNewOption as (v: string, o: Options<unknown>) => boolean, onCreate }}
    />
  );
}
