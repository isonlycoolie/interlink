// SPDX-License-Identifier: Apache-2.0
'use client';
import ThemeIcon from '@interlink/icons/core/theme';
import { DropdownItemRadio, DropdownItemRadioGroup, DropdownMenu } from '@interlink/react/dropdown-menu';
import { setGlobalTheme, type ColorMode } from '@interlink/tokens';
import { useEffect, useState } from 'react';
import { THEME_KEY as KEY } from './theme-script';

const OPTIONS: { value: ColorMode; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'auto', label: 'Match system' },
];

/** Theme picker in the site header, built from Interlink's own DropdownMenu. */
export function ThemeMenu() {
  const [mode, setMode] = useState<ColorMode>('auto');
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'light' || saved === 'dark') setMode(saved);
    } catch {}
  }, []);
  const choose = (value: ColorMode) => {
    setMode(value);
    setGlobalTheme({ colorMode: value });
    try {
      if (value === 'auto') localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, value);
    } catch {}
  };
  return (
    <DropdownMenu
      label="Theme"
      placement="bottom-end"
      trigger={({ isSelected, testId, ...props }) => (
        <button type="button" className="site-theme-button il-focusable" data-selected={isSelected || undefined} data-testid={testId} {...props}>
          <ThemeIcon label="" />
          Theme
        </button>
      )}
    >
      <DropdownItemRadioGroup id="theme">
        {OPTIONS.map((o) => (
          <DropdownItemRadio key={o.value} id={o.value} isSelected={mode === o.value} onClick={() => choose(o.value)}>
            {o.label}
          </DropdownItemRadio>
        ))}
      </DropdownItemRadioGroup>
    </DropdownMenu>
  );
}
