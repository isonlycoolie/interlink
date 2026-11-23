// SPDX-License-Identifier: Apache-2.0
import AiAgentIcon from '@interlink/icons/core/ai-agent';
import ColorIcon from '@interlink/icons/core/paint-palette';
import ComponentIcon from '@interlink/icons/core/component';
import ImageIcon from '@interlink/icons/core/image';
import Link from 'next/link';
import type { ComponentType } from 'react';
import type { IconProps } from '@interlink/icons';

const TAGS: [string, string, ComponentType<IconProps>, string][] = [
  ['Tokens', 'saffron', ColorIcon, '/foundations/color'],
  ['Components', 'lime', ComponentIcon, '/components'],
  ['Assist', 'purple', AiAgentIcon, '/components/chat'],
  ['Illustrations', 'blue', ImageIcon, '/foundations/illustrations'],
];

/** What Interlink is, in one sentence, with polaroids of its screens and the four parts it is made of. */
export function About() {
  return (
    <section className="home-about" aria-labelledby="home-about-title">
      <svg className="home-arc" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 110 Q 720 -40 1440 110" /></svg>
      <p className="home-hand home-hand-left">about the system!</p>
      <h2 id="home-about-title" className="home-select home-select-small">what it is<i /><i /><i /><i /></h2>
      <figure className="home-polaroid home-polaroid-a"><img src="/photos/people/amara-okafor.webp" alt="" /><figcaption>2026</figcaption></figure>
      <p className="home-statement">
        Interlink is <span className="home-chip" data-c="blue" aria-hidden="true" /> an enterprise design system where every Do and Don’t is
        live code <span className="home-chip" data-c="saffron" aria-hidden="true" /> an agent can read and run<span className="home-chip" data-c="magenta" aria-hidden="true" />.
      </p>
      <figure className="home-polaroid home-polaroid-b"><img src="/photos/scenes/team-review.webp" alt="" /><figcaption>our workspace</figcaption></figure>
      <ul className="home-tags">
        {TAGS.map(([label, c, Icon, href]) => (
          <li key={label}>
            <Link href={href} className="home-tag" data-c={c}>{label}</Link>
            <span className="home-tag-icon" data-c={c} aria-hidden="true"><Icon label="" color="currentColor" /></span>
          </li>
        ))}
      </ul>
    </section>
  );
}
