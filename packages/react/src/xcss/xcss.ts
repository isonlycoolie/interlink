// SPDX-License-Identifier: Apache-2.0
import { tokenNames } from '@interlink/tokens';
import type { CSSProperties } from 'react';
import type * as T from '../generated/xcss-types';
import { breakpoints, pseudoStates, xcssProperties } from '../generated/xcss-types';

type Props = typeof xcssProperties;
type Prop = keyof Props;
interface KindMap {
  color: T.ColorToken;
  background: T.BackgroundToken;
  space: T.SpaceToken;
  spaceSigned: T.SpaceSignedToken;
  radius: T.RadiusToken;
  borderWidth: T.BorderWidthToken;
  shadow: T.ShadowToken;
  font: T.FontToken;
  fontWeight: T.FontWeightToken;
  fontFamily: T.FontFamilyToken;
  opacity: T.OpacityToken;
}
type ValueOf<P extends Prop> = Props[P][0] extends keyof KindMap
  ? KindMap[Props[P][0]]
  : P extends keyof CSSProperties
    ? CSSProperties[P]
    : string;

export type XCSSValues = { [P in Prop]?: ValueOf<P> };
export type XCSSPseudoValues = { [P in Prop as Props[P][1] extends true ? P : never]?: ValueOf<P> };
export type Breakpoint = keyof typeof breakpoints;
type PseudoKey = `:${(typeof pseudoStates)[number]}`;

/** Media query keys usable inside xcss, e.g. `{ [media.above.md]: { display: 'flex' } }`. */
export const media = {
  above: Object.fromEntries(Object.entries(breakpoints).map(([b, min]) => [b, `@media (min-width: ${min})`])) as {
    [B in Breakpoint]: `@media (min-width: ${(typeof breakpoints)[B]})`;
  },
};
type MediaKey = (typeof media.above)[Breakpoint];

export type XCSSInput = XCSSValues & { [K in PseudoKey]?: XCSSPseudoValues } & { [K in MediaKey]?: XCSSValues };

/** A compiled style: static utility classes plus the custom properties that feed them. */
export interface XCSS {
  readonly __xcss: true;
  readonly className: string;
  readonly style: Readonly<Record<string, string>>;
}

const PX_PROPS = new Set(['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight', 'inlineSize', 'blockSize', 'flexBasis']);
const kebab = (s: string) => s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
const mediaToBreakpoint = Object.fromEntries(Object.entries(media.above).map(([b, q]) => [q, b]));

function resolveValue(prop: Prop, value: unknown): string {
  const kind = xcssProperties[prop][0];
  if (kind === 'raw') return typeof value === 'number' && PX_PROPS.has(prop) ? `${value}px` : String(value);
  const cssVar = (tokenNames as Record<string, string>)[String(value)];
  if (!cssVar) throw new Error(`xcss: "${String(value)}" is not a design token allowed for ${prop}.`);
  return `var(${cssVar})`;
}

function add(out: { classes: string[]; style: Record<string, string> }, prefix: string, values: Record<string, unknown>) {
  for (const [prop, value] of Object.entries(values)) {
    if (value === undefined || value === null || value === false) continue;
    if (!(prop in xcssProperties)) throw new Error(`xcss: "${prop}" is not a supported property.`);
    const name = `${prefix}${kebab(prop)}`;
    out.classes.push(`il-x-${name}`);
    out.style[`--x-${name}`] = resolveValue(prop as Prop, value);
  }
}

/** Compile a token-only style object. Call at module scope so the work happens once. */
export function xcss(input: XCSSInput): XCSS {
  const out = { classes: [] as string[], style: {} as Record<string, string> };
  for (const [key, value] of Object.entries(input)) {
    if (key.startsWith(':')) add(out, `${key.slice(1)}-`, value as Record<string, unknown>);
    else if (key.startsWith('@media')) {
      const bp = mediaToBreakpoint[key];
      if (!bp) throw new Error(`xcss: unsupported media query "${key}". Use media.above.*`);
      add(out, `${bp}-`, value as Record<string, unknown>);
    } else add(out, '', { [key]: value });
  }
  return Object.freeze({ __xcss: true as const, className: out.classes.join(' '), style: Object.freeze(out.style) });
}

/** Merge compiled styles left to right; later values win. Falsy entries are skipped. */
export function mergeXcss(...items: (XCSS | false | null | undefined)[]): XCSS {
  const classes = new Set<string>();
  const style: Record<string, string> = {};
  for (const item of items) {
    if (!item) continue;
    for (const c of item.className.split(' ')) if (c) classes.add(c);
    Object.assign(style, item.style);
  }
  return { __xcss: true, className: [...classes].join(' '), style };
}
