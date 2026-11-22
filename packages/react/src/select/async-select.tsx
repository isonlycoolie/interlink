// SPDX-License-Identifier: Apache-2.0
'use client';
import { useEffect, useRef, useState } from 'react';
import { SelectBase } from './select-base';
import type { OptionType, Options, SelectProps } from './select-types';

export interface AsyncSelectProps<O = OptionType> extends Omit<SelectProps<O>, 'options' | 'filterOption'> {
  /** Load options for the typed text, for example from a search endpoint. */
  loadOptions: (inputValue: string) => Promise<Options<O>>;
  /** true loads options for an empty input on mount; a list shows those options first. */
  defaultOptions?: boolean | Options<O>;
  /** Reuse results for text that was typed before. */
  cacheOptions?: boolean;
  /** Milliseconds to wait after typing stops before loading. */
  debounce?: number;
}

/** A Select whose options come from a server as people type. */
export function AsyncSelect<O = OptionType>({ loadOptions, defaultOptions = false, cacheOptions = false, debounce = 300, onInputChange, ...rest }: AsyncSelectProps<O>) {
  const [options, setOptions] = useState<Options<O>>(Array.isArray(defaultOptions) ? defaultOptions : []);
  const [isLoading, setLoading] = useState(defaultOptions === true);
  const cache = useRef(new Map<string, Options<O>>());
  const latest = useRef('');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const load = (input: string) => {
    latest.current = input;
    const hit = cacheOptions ? cache.current.get(input) : undefined;
    if (hit) return setOptions(hit);
    setLoading(true);
    loadOptions(input)
      .then((result) => {
        if (cacheOptions) cache.current.set(input, result);
        if (latest.current === input) setOptions(result);
      })
      .finally(() => latest.current === input && setLoading(false));
  };
  useEffect(() => {
    if (defaultOptions === true) load('');
    return () => clearTimeout(timer.current);
  }, []);

  const onInput = (input: string) => {
    onInputChange?.(input);
    clearTimeout(timer.current);
    if (!input) return setOptions(Array.isArray(defaultOptions) ? defaultOptions : defaultOptions ? (cache.current.get('') ?? []) : []);
    setLoading(true);
    timer.current = setTimeout(() => load(input), debounce);
  };
  return <SelectBase {...rest} options={options} filterOption={null} isLoading={isLoading || rest.isLoading} onInputChange={onInput} />;
}
