// SPDX-License-Identifier: Apache-2.0
import { defineConfig } from 'tsdown';

// Unbundled: one output module per icon so importing an icon pulls in only that glyph.
export default defineConfig({
  entry: ['src/index.ts', 'src/generated/core/*.ts'],
  format: 'esm',
  dts: true,
  clean: false,
  unbundle: true,
  outDir: 'dist',
  external: ['react', 'react/jsx-runtime', '@interlink/tokens'],
});
