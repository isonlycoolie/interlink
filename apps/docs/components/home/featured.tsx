// SPDX-License-Identifier: Apache-2.0
import ArrowUpRightIcon from '@interlink/icons/core/arrow-up-right';
import { screens } from '@interlink/guidelines/screens';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { ScreenPreview } from '@/components/shell/screen-preview';
import { PixelWord } from './pixel';

const PICKS: [string, 'blue' | 'ink' | 'saffron' | 'magenta', string][] = [
  ['board', 'blue', 'Nov 23, 2026'],
  ['admin', 'ink', 'Nov 23, 2026'],
  ['goals', 'saffron', 'Nov 22, 2026'],
  ['profile', 'magenta', 'Nov 22, 2026'],
];

/** Featured screens as folder cards that stack as you scroll, each with a live preview of the real screen. */
export function Featured() {
  return (
    <section className="home-featured" aria-labelledby="home-featured-title">
      <p className="home-hand">explore the screens!</p>
      <h2 id="home-featured-title" className="home-featured-title"><PixelWord text="Featured" /><PixelWord text="screens" /></h2>
      <p className="home-note home-note-saffron home-note-center">Real products built only from Interlink, live in your browser.</p>
      <ol className="home-stack">
        {PICKS.map(([slug, color, date], i) => {
          const s = screens.find((x) => x.slug === slug);
          if (!s) return null;
          const Component = s.Component;
          return (
            <li key={slug} className="home-folder" data-c={color} style={{ '--i': i } as CSSProperties}>
              <span className="home-folder-tab">screen 0{i + 1}</span>
              <div className="home-folder-body">
                <div className="home-folder-text">
                  <p className="home-mono"><span aria-hidden="true" />{date}</p>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link href={`/screens/${slug}`} className="home-view">View screen <ArrowUpRightIcon label="" color="currentColor" size="small" /></Link>
                </div>
                <div className="home-folder-shot"><ScreenPreview><Component /></ScreenPreview></div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
