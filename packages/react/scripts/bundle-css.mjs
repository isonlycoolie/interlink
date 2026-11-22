// SPDX-License-Identifier: Apache-2.0
// Concatenates generated utilities and component styles into dist/styles.css.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = ['src/primitives/primitives.css', 'src/primitives/interactive.css', 'src/generated/xcss.css'];
const css = files.map((f) => fs.readFileSync(path.join(root, f), 'utf8')).join('\n');
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/styles.css'), css);
console.log(`styles.css ${(css.length / 1024).toFixed(1)} KB`);
