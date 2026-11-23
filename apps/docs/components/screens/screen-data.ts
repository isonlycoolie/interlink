// SPDX-License-Identifier: Apache-2.0
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { screens, type ScreenInfo } from '@interlink/guidelines/screens';
import type { NavNode } from '@/components/shell/side-nav';

/** Screen sources live in the guidelines package; they are read at build time. */
/** Everything a screen needs: components, icons, art, base styles and the screen source itself. */
const PACKAGES = ['@interlink/react', '@interlink/icons', '@interlink/illustrations', '@interlink/css', '@interlink/guidelines'];

const ROOT = path.join(process.cwd(), '..', '..', 'packages', 'guidelines', 'screens');

export const findScreen = (slug: string): ScreenInfo | undefined => screens.find((s) => s.slug === slug);

/** The screens as a navigation tree: dashboards first, then landing pages. */
export function screensTree(): NavNode[] {
  const group = (kind: ScreenInfo['kind'], name: string): NavNode[] => {
    const list = screens.filter((s) => s.kind === kind);
    return list.length ? [{ type: 'separator', name }, ...list.map((s): NavNode => ({ type: 'page', name: s.title, url: `/screens/${s.slug}` }))] : [];
  };
  return [...group('dashboard', 'Dashboards'), ...group('landing', 'Landing pages')];
}

export async function screenSources(s: ScreenInfo) {
  return Promise.all(s.files.map(async (name) => ({ name, code: await readFile(path.join(ROOT, s.slug, name), 'utf8') })));
}

/** The Interlink components a screen imports, read from its own source so the list never goes stale. */
export function builtWith(sources: { code: string }[]): string[] {
  const found = new Set<string>();
  for (const { code } of sources) for (const m of code.matchAll(/@interlink\/react\/([a-z-]+)/g)) if (m[1]) found.add(m[1]);
  return [...found].sort();
}

/** What to install and import to use the screen in an app, including its styles. */
export async function installLines(s: ScreenInfo) {
  const own = (await readdir(path.join(ROOT, s.slug))).filter((f) => f.endsWith('.css')).map((f) => `${s.slug}/${f}`);
  const shared = s.kind === 'dashboard' ? ['shared/frame.css', 'shared/parts.css'] : [];
  const name = `${s.slug.replace(/(^|-)([a-z])/g, (_, __, c: string) => c.toUpperCase())}Screen`;
  return {
    install: ['pnpm add', ...PACKAGES].join(' \\\n  '),
    usage: [
      "import '@interlink/css/interlink.css';",
      "import '@interlink/react/styles.css';",
      ...[...shared, ...own].map((f) => `import '@interlink/guidelines/screens/${f}';`),
      `import ${name} from '@interlink/guidelines/screen/${s.slug}';`,
      '',
      `export default function Page() {\n  return <${name} />;\n}`,
    ].join('\n'),
  };
}
