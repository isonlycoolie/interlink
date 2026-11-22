# AGENTS.md

Rules for anyone (human or agent) working in this repo.

## What this repo is

Interlink is an enterprise design system:
- `@interlink/tokens`: design tokens
- `@interlink/css`: reset, layers, utilities, fonts
- `@interlink/react`: primitives and components
- `@interlink/icons`: icons
- knowledge, MCP, CLI and lint packages
- `apps/docs`: the documentation site, landing page and Screens showcase

## Hard rules

1. **No values from memory.** Every token value, size, colour and timing comes from the token source in
   `packages/tokens/src/source`. Components use tokens only. Raw hex, px spacing and raw shadows in
   component CSS are bugs.
2. **Keep the public names.** Token names, component names and prop names follow the established system
   names. Renaming one needs a decision record.
3. **Every component ships whole:**
   - examples
   - props table
   - usage, content and accessibility guidelines with Do/Don't pairs as live code
   - keyboard support
   - tests with axe
   - light, dark and increased-contrast themes
4. **Do/Don't code.** Good examples live in `*.do.tsx`, bad ones in `*.dont.tsx`. A dont-file starts with
   `// @interlink-dont <guideline-id>` and breaks only that one rule.
5. **Generic sample content.** Use the shared sample data, never real product or company names.
6. **Licence header** on every source file: `// SPDX-License-Identifier: Apache-2.0`. Upstream attribution
   lives in `NOTICE` and the docs Acknowledgements page only.
7. **Reference material stays out of git.** `docs/` (planning, captures, screenshots) is ignored. Never copy
   captured images or prose into `packages/` or `apps/`.

## Commits and branches

- Commit message: at most 8 words including the scoped prefix, e.g. `feat(tokens): add dark theme source`.
- At most 100 inserted lines per commit. Split by task, never "part 1/part 2".
- No AI or agent trailers.
- Commit and PR text never names an outside site used as inspiration.
- Branch names describe the change (at most 8 words), not plan phases.
- No PR without the owner's go-ahead. Never push to production.
- Lockfiles are not committed (`pnpm-lock.yaml` is ignored).

## Commands

```
pnpm install
pnpm build        # all packages
pnpm test
pnpm dev          # docs site
```
