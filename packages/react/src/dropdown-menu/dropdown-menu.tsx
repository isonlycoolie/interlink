// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import { useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import { Button } from '../button/button';
import { createTypeahead, rove } from '../layering/focus';
import { PopupBase } from '../popup/popup-base';
import { Spinner } from '../spinner/spinner';
import { DropdownContext, SelectionContext, useSelectionStore } from './dropdown-context';
import type { CustomTriggerProps, DropdownMenuProps } from './dropdown-types';

export type { CustomTriggerProps, DropdownMenuProps } from './dropdown-types';

const ITEMS = '[role^="menuitem"]:not([aria-disabled="true"])';

/** A button that opens a list of actions or options. Arrow keys move through items; Escape closes and returns focus. */
export function DropdownMenu({ trigger, children, placement = 'bottom-start', isOpen, defaultOpen = false, onOpenChange, shouldFlip = true, isLoading = false, statusLabel = 'Loading', spacing = 'cozy', label, testId }: DropdownMenuProps) {
  const [own, setOwn] = useState(defaultOpen);
  const open = isOpen ?? own;
  const [byKeyboard, setByKeyboard] = useState(false);
  const typeahead = useRef(createTypeahead()).current;
  const layer = useRef<HTMLElement | null>(null);
  const store = useSelectionStore();
  const setOpen = (next: boolean, event?: Event | MouseEvent | KeyboardEvent) => {
    setOwn(next);
    onOpenChange?.({ isOpen: next, event });
  };
  const items = () => [...(layer.current?.querySelectorAll<HTMLElement>(ITEMS) ?? [])];
  const onClick = (e: MouseEvent<HTMLElement>) => {
    setByKeyboard(e.detail === 0);
    setOpen(!open, e);
  };
  const onTriggerKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    if (!open) {
      setByKeyboard(true);
      setOpen(true, e);
    } else (e.key === 'ArrowDown' ? items()[0] : items().at(-1))?.focus();
  };
  const onLayerKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    layer.current = e.currentTarget;
    if (e.key === 'Tab') setOpen(false, e);
    else rove(e, items(), typeahead);
  };
  return (
    <SelectionContext.Provider value={store}>
      <DropdownContext.Provider value={{ close: (event) => setOpen(false, event), spacing }}>
        <PopupBase
          isOpen={open}
          onClose={(event) => setOpen(false, event)}
          placement={placement}
          shouldFlip={shouldFlip}
          role="menu"
          label={label}
          autoFocus={byKeyboard}
          className="il-dropdown-menu"
          testId={testId && `${testId}--content`}
          onLayerKeyDown={onLayerKeyDown}
          trigger={(props) => {
            const custom: CustomTriggerProps = { ...props, isSelected: open, onClick, onKeyDown: onTriggerKeyDown, testId: testId && `${testId}--trigger` };
            if (typeof trigger === 'function') return trigger(custom);
            return (
              <Button ref={props.ref} aria-expanded={props['aria-expanded']} aria-controls={props['aria-controls']} aria-haspopup="menu" isSelected={open} iconAfter={ChevronDownIcon} onClick={onClick} onKeyDown={onTriggerKeyDown} testId={custom.testId}>
                {trigger}
              </Button>
            );
          }}
          content={() =>
            isLoading ? (
              <div className="il-dropdown-loading" role="status">
                <Spinner size="small" label={statusLabel} />
              </div>
            ) : (
              <div ref={(el) => void (layer.current = el?.parentElement ?? null)}>{children}</div>
            )
          }
        />
      </DropdownContext.Provider>
    </SelectionContext.Provider>
  );
}
