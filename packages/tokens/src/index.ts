// SPDX-License-Identifier: Apache-2.0
import { tokenNames, type TokenName } from './generated/token-names';

export { tokenNames };
export type { TokenName };

/** CSS `var()` for a design token, optionally with a fallback value. */
export function token(name: TokenName, fallback?: string): string {
  const cssVar = tokenNames[name];
  return fallback === undefined ? `var(${cssVar})` : `var(${cssVar}, ${fallback})`;
}

export type ColorMode = 'light' | 'dark' | 'auto';
export type ContrastMode = 'more' | 'no-preference' | 'auto';
export interface ThemeState {
  colorMode?: ColorMode;
  contrastMode?: ContrastMode;
}

/**
 * Attributes to put on `<html>` (or any subtree root) for a theme. `auto` leaves the attribute off so the
 * stylesheet follows the operating system through media queries. Safe to call during server rendering.
 */
export function getThemeHtmlAttrs({ colorMode = 'auto', contrastMode = 'auto' }: ThemeState = {}): Record<string, string> {
  const attrs: Record<string, string> = {};
  if (colorMode !== 'auto') attrs['data-color-mode'] = colorMode;
  if (contrastMode === 'more') attrs['data-contrast-mode'] = 'more';
  if (contrastMode === 'no-preference') attrs['data-contrast-mode'] = 'no-preference';
  return attrs;
}

/** Apply a theme to `root` (the document element by default). */
export function setGlobalTheme(theme: ThemeState = {}, root?: HTMLElement): void {
  const el = root ?? document.documentElement;
  const attrs = getThemeHtmlAttrs(theme);
  for (const name of ['data-color-mode', 'data-contrast-mode']) {
    const value = attrs[name];
    if (value === undefined) el.removeAttribute(name);
    else el.setAttribute(name, value);
  }
}

/** The computed value of a token on `el` (the document element by default). Browser only. */
export function getTokenValue(name: TokenName, fallback = '', el?: Element): string {
  const value = getComputedStyle(el ?? document.documentElement).getPropertyValue(tokenNames[name]).trim();
  return value || fallback;
}
