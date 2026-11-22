// SPDX-License-Identifier: Apache-2.0
// Dev only. Copies local reference captures (never committed) into public/_reference so /dev/compare can show
// each original next to its live rebuild. Usage: INTERLINK_REFERENCE=<captures dir> node scripts/link-reference.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const refDir = process.env.INTERLINK_REFERENCE;
if (!refDir) {
  console.log('INTERLINK_REFERENCE not set; nothing to link.');
  process.exit(0);
}
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public', '_reference');
const inventory = JSON.parse(fs.readFileSync(path.join(refDir, 'site', 'inventory.json'), 'utf8'));
const pages = (process.env.INTERLINK_COMPARE_PAGES ?? '/foundations').split(',');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
const items = [];
for (const it of inventory.items) {
  if (!pages.some((p) => it.page.startsWith(p)) || !it.image) continue;
  const key = it.id.slice(it.id.indexOf(':') + 1);
  const file = `${key.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}${path.extname(it.image)}`;
  fs.copyFileSync(path.join(refDir, it.image), path.join(out, file));
  items.push({ key, page: it.page, kind: it.kind, section: it.section, caption: it.caption, image: `/_reference/${file}` });
}
fs.writeFileSync(path.join(out, 'inventory.json'), JSON.stringify(items));
console.log(`linked ${items.length} reference images`);
