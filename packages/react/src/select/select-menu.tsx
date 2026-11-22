// SPDX-License-Identifier: Apache-2.0
'use client';
import type { ReactNode } from 'react';
import { byGroup, type Entry } from './filter';

export interface SelectMenuProps<O> {
  listId: string;
  entries: Entry<O>[];
  active: number;
  isMulti: boolean;
  isLoading: boolean;
  inputValue: string;
  optionId: (index: number) => string;
  isSelected: (o: O) => boolean;
  isDisabled: (o: O) => boolean;
  render: (o: O) => ReactNode;
  createLabel?: (input: string) => ReactNode;
  noOptionsMessage: (state: { inputValue: string }) => ReactNode;
  loadingMessage: () => ReactNode;
  onHover: (index: number) => void;
  onChoose: (entry: Entry<O>) => void;
}

/** The listbox of a Select. Mouse down is cancelled so the input keeps focus. */
export function SelectMenu<O>({ listId, entries, active, isMulti, isLoading, inputValue, optionId, isSelected, isDisabled, render, createLabel, noOptionsMessage, loadingMessage, onHover, onChoose }: SelectMenuProps<O>) {
  const option = ({ entry, index }: { entry: Entry<O>; index: number }) => {
    const disabled = !entry.isNew && isDisabled(entry.option);
    const selected = !entry.isNew && isSelected(entry.option);
    return (
      <div
        key={index}
        id={optionId(index)}
        role="option"
        className="il-select-option"
        aria-selected={selected}
        aria-disabled={disabled || undefined}
        data-active={index === active || undefined}
        onMouseMove={() => index !== active && onHover(index)}
        onClick={() => onChoose(entry)}
      >
        {entry.isNew ? createLabel?.(inputValue) : render(entry.option)}
      </div>
    );
  };
  return (
    <div className="il-select-menu" onMouseDown={(e) => e.preventDefault()}>
      <div role="listbox" id={listId} aria-multiselectable={isMulti || undefined}>
        {byGroup(entries).map((run, r) =>
          run.group ? (
            <div key={`g${r}`} role="group" aria-labelledby={`${listId}-g${r}`} className="il-select-group">
              <div id={`${listId}-g${r}`} className="il-select-group-heading">
                {run.group.label}
              </div>
              {run.items.map(option)}
            </div>
          ) : (
            run.items.map(option)
          ),
        )}
      </div>
      {!entries.length ? (
        <div className="il-select-message" role="status">
          {isLoading ? loadingMessage() : noOptionsMessage({ inputValue })}
        </div>
      ) : null}
    </div>
  );
}
