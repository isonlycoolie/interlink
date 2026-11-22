# Interlink

An enterprise design system for teams that ship with AI.

Interlink gives you:
- **Tokens** with intent in their names, in light, dark and increased-contrast themes.
- **Primitives** that make tokens the only path to a value.
- **Components** that are accessible and keyboard complete.
- **Guidance**: every Do and Don't exists as live, runnable code, not a picture.
- **AI tooling** (agent skills, an MCP server and lint rules), so an agent builds with the same rules a
  design team would apply.

## Packages

| Package | What it is |
|---------|-----------|
| `@interlink/tokens` | Design tokens: CSS variables, `token()`, JSON, Tailwind preset |
| `@interlink/css` | Reset, cascade layers, fonts, generated utilities |
| `@interlink/react` | Primitives and components |

More packages land as the system grows: icons, knowledge, MCP server, CLI and lint plugins.

## Develop

```
pnpm install
pnpm build
pnpm test
pnpm dev
```

See `AGENTS.md` for the rules of the repo.

## Licence

Apache-2.0. See `LICENSE` and `NOTICE`.
