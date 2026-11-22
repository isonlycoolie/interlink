// SPDX-License-Identifier: Apache-2.0
// The illustration palette, read from the token build so no colour is typed by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'tokens', 'dist');
const css = fs.readFileSync(path.join(root, 'tokens.css'), 'utf8');
const palette = JSON.parse(fs.readFileSync(path.join(root, 'palette.json'), 'utf8'));

/** Value of a token variable in the light (first) or dark block of tokens.css. */
function tokenValue(name, mode) {
  const dark = css.indexOf('[data-color-mode="dark"]');
  const block = mode === 'dark' ? css.slice(dark) : css.slice(0, dark);
  const m = new RegExp(`--il-${name}: ([^;]+);`).exec(block);
  if (!m) throw new Error(`Missing token --il-${name}`);
  return m[1].trim();
}

/** Placeholder letter -> CSS variable, its token source per theme, and a short role for docs. */
export const ROLES = {
  P: { name: 'primary', light: palette.Brand.Brand700, dark: palette.Brand.Brand700, role: 'Brand colour; the main shape' },
  S: { name: 'secondary', light: tokenValue('assist-icon-purple', 'light'), dark: tokenValue('assist-icon-purple', 'dark'), role: 'Purple' },
  T: { name: 'tertiary', light: tokenValue('assist-icon-saffron', 'light'), dark: tokenValue('assist-icon-saffron', 'dark'), role: 'Saffron' },
  Q: { name: 'quaternary', light: tokenValue('assist-icon-lime', 'light'), dark: tokenValue('assist-icon-lime', 'dark'), role: 'Lime' },
  A: { name: 'accent', light: tokenValue('assist-icon-blue', 'light'), dark: tokenValue('assist-icon-blue', 'dark'), role: 'Blue' },
  N: { name: 'neutral', light: tokenValue('background-accent-gray-subtler', 'light'), dark: tokenValue('background-accent-gray-subtler', 'dark'), role: 'Quiet shapes such as pages' },
  I: { name: 'ink', light: palette.Neutral.Neutral1000, dark: tokenValue('border-bold', 'dark'), role: 'Small doses of contrast' },
  W: { name: 'paper', light: palette.Neutral.Neutral0, dark: palette.Neutral.Neutral0, role: 'Seams and cut-outs' },
};
export const SURFACE = { light: tokenValue('surface', 'light'), dark: tokenValue('surface', 'dark') };
