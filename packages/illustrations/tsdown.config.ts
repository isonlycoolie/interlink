// SPDX-License-Identifier: Apache-2.0
import { defineConfig } from 'tsdown';

// Unbundled: one output module per illustration so importing one pulls in only that artwork.
export default defineConfig({
  entry: ['src/index.ts', 'src/generated/all.ts', 'src/generated/art/*.ts'],
  format: 'esm',
  dts: true,
  clean: false,
  unbundle: true,
  outDir: 'dist',
  external: ['react', 'react/jsx-runtime'],
});
