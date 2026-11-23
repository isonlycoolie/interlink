// SPDX-License-Identifier: Apache-2.0
// Builds dist/interlink.css (layers, tokens, fonts, reset) plus the parts on their own.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const tokens = fs.readFileSync(require.resolve('@interlink/tokens/tokens.css'), 'utf8');
const reset = [read('src/reset/base.css'), read('src/reset/content.css'), read('src/reset/scrollbar.css')].join('\n');
const fonts = read('src/fonts.css');
const dist = path.join(root, 'dist');
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'reset.css'), reset);
fs.writeFileSync(path.join(dist, 'fonts.css'), fonts);
const all = [read('src/layers.css'), tokens, fonts, reset].join('\n');
fs.writeFileSync(path.join(dist, 'interlink.css'), all);
console.log(`interlink.css ${(all.length / 1024).toFixed(1)} KB`);
