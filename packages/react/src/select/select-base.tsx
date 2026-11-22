// SPDX-License-Identifier: Apache-2.0
'use client';
import { useId, useRef, type MouseEvent } from 'react';
import { PopupBase } from '../popup/popup-base';
import { Tag } from '../tag/tag';
import { SelectIndicators } from './select-indicators';
import { SelectMenu } from './select-menu';
import type { CreateOptions, SelectProps } from './select-types';
import { useSelect } from './use-select';

/** Select with the private hooks that AsyncSelect and CreatableSelect use. */
export function SelectBase<O>(p: SelectProps<O> & { create?: CreateOptions }) {
  const s = useSelect(p);
  const auto = useId();
  const inputId = p.inputId ?? p.id ?? `${auto}-input`;
  const listId = `${auto}-listbox`;
  const optionId = (i: number) => `${auto}-option-${i}`;
  const input = useRef<HTMLInputElement | null>(null);
  const { isMulti = false, isSearchable = true, isClearable = false, isDisabled = false, isLoading = false, appearance = 'default', spacing = 'default', placeholder = 'Select…' } = p;
  const invalid = p.isInvalid || p['aria-invalid'];
  const render = (o: O, context: 'menu' | 'value') => p.formatOptionLabel?.(o, { context }) ?? s.label(o);
  const hasValue = s.selected.length > 0;
  const onControlMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (isDisabled || (e.target as HTMLElement).closest('button')) return;
    if (e.target !== input.current) e.preventDefault();
    input.current?.focus();
    if (s.isOpen && e.target !== input.current) s.close();
    else s.open();
  };
  return (
    <div className="il-select" data-testid={p.testId}>
      <PopupBase
        isOpen={s.isOpen}
        onClose={s.close}
        autoFocus={false}
        shouldReturnFocus={false}
        shouldFitContainer
        placement={p.menuPlacement === 'top' ? 'top-start' : 'bottom-start'}
        shouldFlip={p.menuPlacement !== 'bottom'}
        offset={[0, 4]}
        className="il-select-layer"
        trigger={({ ref }) => (
          <div ref={ref} className="il-select-control" data-appearance={appearance} data-spacing={spacing} data-invalid={invalid || undefined} data-disabled={isDisabled || undefined} data-multi={isMulti || undefined} onMouseDown={onControlMouseDown}>
            <div className="il-select-values">
              {isMulti
                ? s.selected.map((o) => <Tag key={s.valueOf(o)} text={s.label(o)} isRemovable={!isDisabled} removeButtonLabel={`Remove ${s.label(o)}`} onBeforeRemoveAction={() => (s.remove(o), false)} />)
                : hasValue && !s.input ? <div className="il-select-single">{render(s.selected[0] as O, 'value')}</div> : null}
              {!hasValue && !s.input ? <div className="il-select-placeholder">{placeholder}</div> : null}
              <input
                ref={(el) => {
                  input.current = el;
                  if (typeof p.ref === 'function') p.ref(el);
                  else if (p.ref) p.ref.current = el;
                }}
                id={inputId}
                className="il-select-input"
                role="combobox"
                aria-expanded={s.isOpen}
                aria-controls={s.isOpen ? listId : undefined}
                aria-activedescendant={s.isOpen && s.entries[s.active] ? optionId(s.active) : undefined}
                aria-autocomplete="list"
                aria-haspopup="listbox"
                aria-label={p['aria-label']}
                aria-labelledby={p['aria-labelledby']}
                aria-describedby={p['aria-describedby']}
                aria-invalid={invalid || undefined}
                aria-required={p.isRequired || undefined}
                readOnly={!isSearchable}
                disabled={isDisabled}
                value={s.input}
                autoComplete="off"
                onChange={(e) => s.changeInput(e.target.value)}
                onKeyDown={s.onKeyDown}
                onFocus={p.onFocus}
                onBlur={(e) => {
                  s.close();
                  s.setInput('');
                  p.onBlur?.(e);
                }}
              />
            </div>
            <SelectIndicators isLoading={isLoading} canClear={isClearable && hasValue && !isDisabled} onClear={() => (s.clear(), input.current?.focus())} />
          </div>
        )}
        content={() => <SelectMenu listId={listId} entries={s.entries} active={s.active} isMulti={isMulti} isLoading={isLoading} inputValue={s.input} optionId={optionId} isSelected={s.isSelected} isDisabled={s.disabled} render={(o) => render(o, 'menu')} createLabel={p.create?.formatCreateLabel} noOptionsMessage={p.noOptionsMessage ?? (() => 'No options')} loadingMessage={p.loadingMessage ?? (() => 'Loading…')} onHover={s.setActive} onChoose={s.choose} />}
      />
      {p.name ? s.selected.map((o) => <input key={s.valueOf(o)} type="hidden" name={p.name} value={s.valueOf(o)} />) : null}
      <div className="il-visually-hidden" aria-live="polite" aria-atomic="true">
        {s.message}
      </div>
    </div>
  );
}
