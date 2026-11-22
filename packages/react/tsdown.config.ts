// SPDX-License-Identifier: Apache-2.0
import { defineConfig } from 'tsdown';

// Unbundled so each module keeps its own 'use client' directive: only modules that use React context are
// client modules, and xcss() stays callable from server components.
export default defineConfig({
  entry: {
    primitives: 'src/primitives/index.ts',
    xcss: 'src/xcss/index.ts',
    button: 'src/button/index.ts',
    lozenge: 'src/lozenge/index.ts',
    'section-message': 'src/section-message/index.ts',
    spinner: 'src/spinner/index.ts',
    docs: 'src/docs/index.ts',
  },
  format: 'esm',
  dts: true,
  clean: false,
  unbundle: true,
  outDir: 'dist',
  external: ['react', 'react-dom', 'react/jsx-runtime', '@interlink/tokens', /^@interlink\/icons/],
});
