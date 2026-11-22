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
    textfield: 'src/textfield/index.ts',
    textarea: 'src/textarea/index.ts',
    checkbox: 'src/checkbox/index.ts',
    radio: 'src/radio/index.ts',
    toggle: 'src/toggle/index.ts',
    form: 'src/form/index.ts',
    badge: 'src/badge/index.ts',
    tag: 'src/tag/index.ts',
    avatar: 'src/avatar/index.ts',
    link: 'src/link/index.ts',
    tooltip: 'src/tooltip/index.ts',
    skeleton: 'src/skeleton/index.ts',
    "progress-bar": 'src/progress-bar/index.ts',
    "empty-state": 'src/empty-state/index.ts',
    docs: 'src/docs/index.ts',
  },
  format: 'esm',
  dts: true,
  clean: false,
  unbundle: true,
  outDir: 'dist',
  external: ['react', 'react-dom', 'react/jsx-runtime', '@interlink/tokens', /^@interlink\/icons/],
});
