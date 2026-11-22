// SPDX-License-Identifier: Apache-2.0
import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: { primitives: 'src/primitives/index.ts', xcss: 'src/xcss/index.ts' },
  format: 'esm',
  dts: true,
  clean: false,
  outDir: 'dist',
  external: ['react', 'react-dom', 'react/jsx-runtime', '@interlink/tokens'],
  banner: { js: "'use client';" },
});
