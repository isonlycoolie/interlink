// SPDX-License-Identifier: Apache-2.0
// Helpers shared by the token build and the token tests.
import fs from 'node:fs';
import path from 'node:path';

export const readJson = (dir, file) => JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));

/** Expand `{ family: { suffix: ref } }` into `{ 'family.suffix': ref }`; suffix "." means the family itself. */
export function expand(families) {
  const out = {};
  for (const [fam, members] of Object.entries(families)) {
    if (members === null || typeof members !== 'object' || Array.isArray(members) || 'duration' in members) {
      out[fam] = members;
      continue;
    }
    for (const [suffix, ref] of Object.entries(members)) out[suffix === '.' ? fam : `${fam}.${suffix}`] = ref;
  }
  return out;
}

/** Token name to CSS custom property, e.g. color.text.subtle -> --il-text-subtle. */
export const cssVar = (name) =>
  `--il-${name.replace(/^(color|elevation|motion|utility)\./, '').replace(/\.\[default\]/g, '').replace(/\./g, '-')}`;

/** px values to rem (16px base), matching how the reference system ships sizes. */
export function toRem(v) {
  const s = String(v);
  const m = s.match(/^(-?\d+(?:\.\d+)?)px$/);
  if (!m) return s;
  const rem = Number(m[1]) / 16;
  return `${Number(rem.toFixed(4))}rem`;
}

const hex = (h) => h.replace('#', '');
const alpha = (o) => Math.round(o * 255).toString(16).padStart(2, '0').toUpperCase();

/** Resolve a colour reference (palette name, raw hex, or shadow layers) to a CSS value. */
export function resolveColor(ref, palette, name = '') {
  if (Array.isArray(ref)) {
    return ref
      .map((l) => {
        const c = `#${hex(resolveColor(l.color, palette, name)).slice(0, 6)}${alpha(l.opacity ?? 1)}`;
        return `${l.inset ? 'inset ' : ''}${l.offset.x}px ${l.offset.y}px ${l.radius}px${l.spread ? ` ${l.spread}px` : ''} ${c}`;
      })
      .join(', ');
  }
  if (typeof ref === 'number') return String(ref);
  if (typeof ref !== 'string') throw new Error(`bad ref for ${name}: ${JSON.stringify(ref)}`);
  if (ref.startsWith('#') || ref === 'transparent') return ref;
  const v = palette[ref];
  if (v === undefined) throw new Error(`unknown palette ref ${ref} in ${name}`);
  return String(v);
}

/** Motion tokens to animation/transition shorthands, plus prefixed @keyframes. */
export function resolveMotion(tokens, motionPalette) {
  const mp = (group, r) => motionPalette[group]?.[r] ?? r;
  const ms = (r) => `${mp('duration', r)}ms`;
  const motion = {};
  for (const [n, r] of Object.entries(tokens)) {
    if (typeof r === 'string' || typeof r === 'number') {
      motion[n] = /^Duration/.test(String(r)) ? ms(r) : String(mp('curve', r));
    } else if (r.keyframes) {
      const delay = r.delay ? ` ${ms(r.delay)}` : '';
      motion[n] = r.keyframes.map((k) => `${ms(r.duration)} ${mp('curve', r.curve)} il-${k}${delay} ${mp('fillMode', r.fill) ?? ''}`.trim()).join(', ');
    } else if (r.properties) {
      motion[n] = r.properties.map((p) => `${mp('properties', p)} ${ms(r.duration)} ${mp('curve', r.curve)}`).join(', ');
    } else {
      motion[n] = [r.duration && ms(r.duration), r.curve && mp('curve', r.curve)].filter(Boolean).join(' ');
    }
  }
  const keyframes = Object.entries(motionPalette.keyframe ?? {})
    .map(([k, frames]) => `@keyframes il-${k} {\n${Object.entries(frames).map(([at, decl]) => `  ${at} { ${Object.entries(decl).map(([p, v]) => `${p}: ${v};`).join(' ')} }`).join('\n')}\n}`)
    .join('\n');
  return { motion, keyframes };
}
