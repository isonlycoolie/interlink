// SPDX-License-Identifier: Apache-2.0
import ArrowUpRightIcon from '@interlink/icons/core/arrow-up-right';
import { allGuidelines } from '@interlink/guidelines';
import { screens } from '@interlink/guidelines/screens';
import { catalog } from '@interlink/illustrations';
import { componentDocs } from '@interlink/react/docs';
import { tokenNames } from '@interlink/tokens';
import Link from 'next/link';
import { PixelWord } from './pixel';

/** What a team gets, counted live from the system itself, on solid colour tiles. */
export function Inside() {
  const tiles = [
    { n: Object.keys(componentDocs).length, label: 'Components', text: 'From buttons to agent chat, each with examples, props, keyboard support and tests.', href: '/components', c: 'blue', span: 2 },
    { n: Object.keys(tokenNames).length, label: 'Design tokens', text: 'Colour, type, space and motion for light, dark and high contrast.', href: '/tokens', c: 'ink' },
    { n: catalog.length, label: 'Illustrations', text: 'Recolourable art for empty states, onboarding and finance.', href: '/foundations/illustrations', c: 'saffron' },
    { n: allGuidelines.length, label: 'Do and Don’t rules', text: 'Every rule ships as live code an agent can read.', href: '/get-started', c: 'teal' },
    { n: screens.length, label: 'Full screens', text: 'Real dashboards you can open, read and install.', href: '/screens', c: 'purple', span: 3 },
  ];
  return (
    <section className="home-sell" aria-labelledby="home-inside">
      <p className="home-hand">everything in one place</p>
      <h2 id="home-inside" className="home-sell-title"><PixelWord text="What's inside" /></h2>
      <p className="home-sell-lead">One system for product teams and the agents working beside them. Nothing to assemble.</p>
      <ul className="home-bento">
        {tiles.map((t) => (
          <li key={t.label} data-c={t.c} data-span={'span' in t ? t.span : undefined}>
            <Link href={t.href} className="home-bento-tile">
              <strong>{t.n}</strong>
              <span className="home-bento-label">{t.label}</span>
              <span className="home-bento-text">{t.text}</span>
              <ArrowUpRightIcon label="" color="currentColor" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
