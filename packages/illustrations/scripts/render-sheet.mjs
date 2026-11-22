// SPDX-License-Identifier: Apache-2.0
// Contact sheets for reviewing illustrations by eye: every piece in light, dark and a recoloured palette.
// Usage: node scripts/render-sheet.mjs <out-dir> [slug-prefix-filter]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';
import { ROLES, SURFACE } from './palette.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const art = path.join(here, '..', 'art');
const [out = '.', filter = ''] = process.argv.slice(2);
const RECOLOR = { P: '#1F845A', S: '#C9372C', T: '#2898BD', Q: '#E06C00' };

const slugs = fs.readdirSync(art).filter((f) => f.endsWith('.svg') && f.startsWith(filter)).map((f) => f.slice(0, -4)).sort();
const paint = (svg, mode, recolor) => svg.replace(/(fill|stroke)="([PSTQANIW])"/g, (_, attr, k) => `${attr}="${(recolor && RECOLOR[k]) || ROLES[k][mode]}"`);

for (const [mode, recolor] of [['light', false], ['dark', false], ['light', true]]) {
  const cols = 6;
  const cell = 176;
  const rows = Math.ceil(slugs.length / cols);
  const tiles = slugs.map((slug, i) => {
    const src = paint(fs.readFileSync(path.join(art, `${slug}.svg`), 'utf8'), mode, recolor);
    const vb = /viewBox="([^"]+)"/.exec(src)[1].split(' ').map(Number);
    const inner = src.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
    const x = (i % cols) * cell;
    const y = Math.floor(i / cols) * cell;
    const w = vb[2] > vb[3] ? 160 : 120;
    const h = (w * vb[3]) / vb[2];
    const guide = `<rect x="${x + (cell - w) / 2}" y="${y + 8}" width="${w}" height="${h}" fill="none" stroke="#999" stroke-width="0.5" stroke-dasharray="2 2"/>`;
    return `${guide}<svg x="${x + (cell - w) / 2}" y="${y + 8}" width="${w}" height="${h}" viewBox="${vb.join(' ')}">${inner}</svg><text x="${x + cell / 2}" y="${y + cell - 12}" font-size="11" text-anchor="middle" fill="${mode === 'dark' ? '#ccc' : '#333'}" font-family="Segoe UI, Arial">${slug}</text>`;
  });
  const sheet = `<svg xmlns="http://www.w3.org/2000/svg" width="${cols * cell}" height="${rows * cell}"><rect width="100%" height="100%" fill="${SURFACE[mode]}"/>${tiles.join('')}</svg>`;
  const png = new Resvg(sheet, { font: { loadSystemFonts: true } }).render().asPng();
  const name = `sheet-${filter || 'all'}-${mode}${recolor ? '-recolor' : ''}.png`;
  fs.writeFileSync(path.join(out, name), png);
  console.log(name, slugs.length);
}
