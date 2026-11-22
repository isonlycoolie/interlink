// SPDX-License-Identifier: Apache-2.0
'use client';
import ThemeIcon from '@interlink/icons/core/theme';
import CheckMarkIcon from '@interlink/icons/core/check-mark';
import { setGlobalTheme, type ColorMode } from '@interlink/tokens';
import { useEffect, useState } from 'react';
import { THEME_KEY as KEY } from './theme-script';

const OPTIONS: { value: ColorMode; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'auto', label: 'Match system' },
];


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
    document.getElementById('theme-menu')?.hidePopover();
  };
  return (
    <>
      <button type="button" className="site-theme-button il-focusable" popoverTarget="theme-menu" aria-haspopup="menu">
        <ThemeIcon label="" />
        Theme
      </button>
      <div id="theme-menu" popover="auto" role="menu" className="site-menu">
        {OPTIONS.map((o) => (
          <button key={o.value} type="button" role="menuitemradio" aria-checked={mode === o.value} className="site-menu-item il-focusable" onClick={() => choose(o.value)}>
            <span>{o.label}</span>
            {mode === o.value ? <CheckMarkIcon label="" color="color.icon.selected" /> : null}
          </button>
        ))}
      </div>
    </>
  );
}
