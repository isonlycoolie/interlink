// SPDX-License-Identifier: Apache-2.0
// Quality gate for illustration sources: palette placeholders only, everything inside the safe margin, and a
// visual-weight centre near the middle. Exported for the tests; run directly to print a report.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const MARGIN = 6;
export const MAX_OFFSET = 10;
const PALETTE = /^(P|S|T|Q|A|N|I|W|none)$/;
const num = (s) => (s.match(/-?\d*\.?\d+(?:e-?\d+)?/g) ?? []).map(Number);
const attr = (el, name) => new RegExp(`\\s${name}="([^"]*)"`).exec(el)?.[1];

/** Points that bound one element: corners, centres plus radius, and path control points. */
function bounds(el) {
  const tag = /^<(\w+)/.exec(el)[1];
  const a = (n) => Number(attr(el, n) ?? 0);
  if (tag === 'rect') return [[a('x'), a('y')], [a('x') + a('width'), a('y') + a('height')]];
  if (tag === 'circle') return [[a('cx') - a('r'), a('cy') - a('r')], [a('cx') + a('r'), a('cy') + a('r')]];
  if (tag === 'ellipse') return [[a('cx') - a('rx'), a('cy') - a('ry')], [a('cx') + a('rx'), a('cy') + a('ry')]];
  if (tag === 'polygon' || tag === 'polyline') {
    const n = num(attr(el, 'points'));
    return n.reduce((pts, v, i) => (i % 2 ? [...pts.slice(0, -1), [pts.at(-1)[0], v]] : [...pts, [v, 0]]), []);
  }
  if (tag !== 'path') return [];
  const pts = [];
  let start = [0, 0];
  let cur = [0, 0];
  for (const [, cmd, args] of attr(el, 'd').matchAll(/([MLHVCQAZ])([^MLHVCQAZ]*)/gi)) {
    const n = num(args);
    if (cmd === 'M') start = cur = [n[0], n[1]];
    if (cmd === 'L' || cmd === 'M') for (let i = 0; i < n.length; i += 2) pts.push((cur = [n[i], n[i + 1]]));
    if (cmd === 'H') pts.push((cur = [n[0], cur[1]]));
    if (cmd === 'V') pts.push((cur = [cur[0], n[0]]));
    if (cmd === 'C' || cmd === 'Q') for (let i = 0; i < n.length; i += 2) pts.push((cur = [n[i], n[i + 1]]));
    if (cmd === 'A') {
      // Arcs here are pie wedges centred on the last move-to point: bound them by the whole circle.
      pts.push([start[0] - n[0], start[1] - n[0]], [start[0] + n[0], start[1] + n[0]], (cur = [n[5], n[6]]));
    }
  }
  return pts;
}

/** Check one SVG source. Returns a list of problems (empty when it passes) and its weight centre. */
export function checkSvg(svg) {
  const [, , w, h] = num(/viewBox="([^"]+)"/.exec(svg)[1]);
  const problems = [];
  let mass = 0;
  let mx = 0;
  let my = 0;
  for (const el of svg.match(/<(rect|circle|ellipse|polygon|polyline|path)\b[^>]*>/g) ?? []) {
    for (const k of ['fill', 'stroke']) {
      const v = attr(el, k);
      if (v !== undefined && !PALETTE.test(v)) problems.push(`colour ${k}="${v}" is not a palette role`);
    }
    if (/gradient|filter|opacity|transform/i.test(el)) problems.push(`effects are not allowed: ${el.slice(0, 40)}`);
    const pad = attr(el, 'stroke') && attr(el, 'stroke') !== 'none' ? Number(attr(el, 'stroke-width') ?? 1) / 2 : 0;
    const pts = bounds(el);
    if (!pts.length) continue;
    const xs = pts.map((p) => p[0]);
    const ys = pts.map((p) => p[1]);
    const box = [Math.min(...xs) - pad, Math.min(...ys) - pad, Math.max(...xs) + pad, Math.max(...ys) + pad];
    if (box[0] < MARGIN - 0.01 || box[1] < MARGIN - 0.01 || box[2] > w - MARGIN + 0.01 || box[3] > h - MARGIN + 0.01)
      problems.push(`outside the safe margin: ${box.map((v) => v.toFixed(1)).join(',')} in ${el.slice(0, 50)}`);
    const area = Math.max(1, (box[2] - box[0]) * (box[3] - box[1]));
    mass += area;
    mx += area * (box[0] + box[2]) / 2;
    my += area * (box[1] + box[3]) / 2;
  }
  const centre = [mx / mass, my / mass];
  const offset = Math.hypot(centre[0] - w / 2, centre[1] - h / 2);
  if (offset > MAX_OFFSET) problems.push(`weight centre is ${offset.toFixed(1)} units from the middle`);
  return { problems, centre, offset };
}

export const artDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'art');

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  let failed = 0;
  for (const file of fs.readdirSync(artDir).filter((f) => f.endsWith('.svg')).sort()) {
    const { problems, offset } = checkSvg(fs.readFileSync(path.join(artDir, file), 'utf8'));
    if (problems.length) failed++;
    console.log(`${problems.length ? 'FAIL' : 'ok  '} ${file.padEnd(28)} offset ${offset.toFixed(1)}${problems.length ? `\n     ${problems.join('\n     ')}` : ''}`);
  }
  process.exitCode = failed ? 1 : 0;
}
