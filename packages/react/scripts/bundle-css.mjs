// SPDX-License-Identifier: Apache-2.0
// Concatenates generated utilities and component styles into dist/styles.css.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = [
  'src/primitives/primitives.css',
  'src/primitives/interactive.css',
  'src/spinner/spinner.css',
  'src/button/button.css',
  'src/button/appearance.css',
  'src/lozenge/lozenge.css',
  'src/section-message/section-message.css',
  'src/textfield/textfield.css',
  'src/checkbox/checkbox.css',
  'src/radio/radio.css',
  'src/toggle/toggle.css',
  'src/form/form.css',
  'src/badge/badge.css',
  'src/tag/tag.css',
  'src/avatar/avatar.css',
  'src/link/link.css',
  'src/tooltip/tooltip.css',
  'src/skeleton/skeleton.css',
  'src/progress-bar/progress-bar.css',
  'src/empty-state/empty-state.css',
  'src/layering/layering.css',
  'src/banner/banner.css',
  'src/blanket/blanket.css',
  'src/breadcrumbs/breadcrumbs.css',
  'src/drawer/drawer.css',
  'src/dropdown-menu/dropdown-menu.css',
  'src/flag/flag.css',
  'src/inline-dialog/inline-dialog.css',
  'src/inline-message/inline-message.css',
  'src/menu/menu.css',
  'src/modal-dialog/modal-dialog.css',
  'src/pagination/pagination.css',
  'src/select/select.css',
  'src/tabs/tabs.css',
  'src/generated/xcss.css',
];
const css = files.map((f) => fs.readFileSync(path.join(root, f), 'utf8')).join('\n');
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/styles.css'), css);
console.log(`styles.css ${(css.length / 1024).toFixed(1)} KB`);
