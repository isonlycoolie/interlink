// SPDX-License-Identifier: Apache-2.0
import { screens, type ScreenInfo } from '@interlink/guidelines/screens';
import { CodeBlock } from '@/components/mdx/code-block';
import { SideNav } from '@/components/shell/side-nav';
import { FullView } from './full-view';
import { ScreenDoc } from './screen-doc';
import { builtWith, installLines, screenSources, screensTree } from './screen-data';

const lang = (name: string) => (name.endsWith('.ts') ? 'ts' : 'tsx');

/** A screen's docs page: the screens list on the left, the live preview in the middle, how to use it on the right. */
export async function ScreenLayout({ screen }: { screen: ScreenInfo }) {
  const sources = await screenSources(screen);
  const { install, usage } = await installLines(screen);
  const Screen = screen.Component;
  return (
    <div className="site-body">
      <SideNav tree={screensTree()} status={{}} />
      <main id="main" className="site-main">
        <ScreenDoc
          slug={screen.slug}
          title={screen.title}
          description={screen.description}
          files={sources.map((s) => ({ name: s.name, code: <CodeBlock code={s.code} lang={lang(s.name)} /> }))}
          builtWith={builtWith(sources)}
          install={<CodeBlock code={install} lang="bash" />}
          usage={<CodeBlock code={usage} lang="tsx" />}
        >
          <Screen />
        </ScreenDoc>
      </main>
    </div>
  );
}

/** The screen alone, filling the window under one slim bar. */
export async function ScreenFull({ screen }: { screen: ScreenInfo }) {
  const sources = await screenSources(screen);
  const { install } = await installLines(screen);
  const Screen = screen.Component;
  return (
    <FullView
      slug={screen.slug}
      title={screen.title}
      others={screens.map((s) => ({ slug: s.slug, title: s.title }))}
      files={sources.map((s) => ({ name: s.name, code: <CodeBlock code={s.code} lang={lang(s.name)} /> }))}
      install={install}
    >
      <Screen />
    </FullView>
  );
}
