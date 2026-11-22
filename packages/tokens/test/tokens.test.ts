// SPDX-License-Identifier: Apache-2.0
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getThemeHtmlAttrs, token, tokenNames } from '../src/index';

interface Entry {
  name: string;
  cssVar: string;
  description: string;
  values: Record<string, string>;
}
const entries: Entry[] = JSON.parse(readFileSync(new URL('../dist/tokens.json', import.meta.url), 'utf8'));
const byName = new Map(entries.map((e) => [e.name, e]));
const THEMES = ['light', 'dark', 'light-increased-contrast', 'dark-increased-contrast'];

const hexToRgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lin = (v: number) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
const lum = (h: string) => {
  const [r = 0, g = 0, b = 0] = hexToRgb(h).map(lin);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p) as [number, number];
  return (x + 0.05) / (y + 0.05);
};
const value = (name: string, theme: string) => {
  const v = byName.get(name)?.values[theme];
  if (!v) throw new Error(`missing ${name} in ${theme}`);
  return v;
};

describe('token set', () => {
  it('has the full set of names', () => {
    expect(entries.length).toBe(634);
  });

  it('gives every colour and elevation token a value in every theme', () => {
    for (const e of entries.filter((x) => /^(color|elevation|opacity|utility)\./.test(x.name))) {
      for (const t of THEMES) expect(e.values[t], `${e.name} in ${t}`).toBeTruthy();
    }
  });

  it('names CSS variables from token names', () => {
    expect(byName.get('color.text')?.cssVar).toBe('--il-text');
    expect(byName.get('elevation.surface.raised')?.cssVar).toBe('--il-surface-raised');
    expect(byName.get('space.200')?.cssVar).toBe('--il-space-200');
    expect(byName.get('motion.avatar.enter')?.cssVar).toBe('--il-avatar-enter');
  });

  it('describes every non-state token', () => {
    const missing = entries.filter((e) => /^color\./.test(e.name) && !e.description).map((e) => e.name);
    expect(missing).toEqual([]);
  });
});

describe('contrast', () => {
  const pairs: [string, string, number][] = [
    ['color.text', 'elevation.surface', 4.5],
    ['color.text.subtle', 'elevation.surface', 4.5],
    ['color.text.brand', 'elevation.surface', 4.5],
    ['color.link', 'elevation.surface', 4.5],
    ['color.text.inverse', 'color.background.brand.bold', 4.5],
    ['color.text.selected', 'color.background.selected', 4.5],
    ['color.text.danger', 'elevation.surface', 4.5],
    ['color.border.focused', 'elevation.surface', 3],
  ];
  for (const theme of THEMES) {
    for (const [fg, bg, min] of pairs) {
      it(`${fg} on ${bg} in ${theme} >= ${min}`, () => {
        expect(contrast(value(fg, theme), value(bg, theme))).toBeGreaterThanOrEqual(min);
      });
    }
  }
});

describe('api', () => {
  it('token() returns a CSS var', () => {
    expect(token('color.text')).toBe('var(--il-text)');
    expect(token('space.100', '8px')).toBe('var(--il-space-100, 8px)');
    expect(Object.keys(tokenNames)).toHaveLength(634);
  });

  it('getThemeHtmlAttrs() leaves auto to the stylesheet', () => {
    expect(getThemeHtmlAttrs()).toEqual({});
    expect(getThemeHtmlAttrs({ colorMode: 'dark', contrastMode: 'more' })).toEqual({
      'data-color-mode': 'dark',
      'data-contrast-mode': 'more',
    });
  });
});
