// SPDX-License-Identifier: Apache-2.0
import tokens from '@interlink/tokens/tokens.json';

export interface TokenEntry {
  name: string;
  cssVar: string;
  description: string;
  group: string;
  values: Record<string, string>;
}

/** Token metadata as built by @interlink/tokens. */
export const allTokens = tokens as unknown as TokenEntry[];
export const tokenByName = new Map(allTokens.map((t) => [t.name, t]));

/** Value of a token in a theme, or its single value for theme-independent tokens. */
export const valueOf = (name: string, theme = 'light') => {
  const t = tokenByName.get(name);
  return t ? (t.values[theme] ?? t.values.all ?? '') : '';
};

/** `1rem` -> `16px`. */
export const remToPx = (v: string) => (/^-?[\d.]+rem$/.test(v) ? `${Math.round(parseFloat(v) * 16)}px` : v);
