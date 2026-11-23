// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import { componentDocs } from '@interlink/react/docs';
import { catalog } from '@interlink/illustrations';
import { screens } from '@interlink/guidelines/screens';
import { PresenceCursor } from '@interlink/react/presence-cursor';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PixelWord } from './pixel';

function Clock() {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date().toLocaleTimeString('en-GB', { timeZone: 'Africa/Nairobi' }));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return <p className="home-clock">{now ? `${now} EAT` : ' '}</p>;
}

/** The opening: a live clock, the wordmark in a selection box, sticky notes with real counts, and people and agents at work. */
export function Intro() {
  const n = Object.keys(componentDocs).length;
  return (
    <section className="home-intro" aria-labelledby="home-title">
      <Clock />
      <div className="home-name">
        <span className="home-note home-note-lime">{n} components, ready</span>
        <p className="home-hand">design system</p>
        <span className="home-note home-note-saffron">{catalog.length} illustrations</span>
        <h1 id="home-title" className="home-select"><PixelWord text="Interlink" /><i /><i /><i /><i /></h1>
        <p className="home-status"><span aria-hidden="true" />Built for enterprise products and the agents inside them</p>
      </div>
      <span className="home-float home-float-a"><PresenceCursor name="Product designer" color="saffron" pointer="top-right" size="large" /></span>
      <span className="home-float home-float-b"><PresenceCursor name="Nairobi, KE" color="brand" size="large" /></span>
      <span className="home-float home-float-c"><PresenceCursor name="Planner" color="agent" agentIcon={RoadmapIcon} size="large" /></span>
      <p className="home-claim">
        We design <span className="home-chip" data-c="lime" aria-hidden="true" />enterprise products people <span className="home-chip" data-c="purple" aria-hidden="true" />and agents can run.
      </p>
      <Link href="/get-started" className="home-cta">
        <span aria-hidden="true"><ChevronRightIcon label="" color="currentColor" /></span>Get started
      </Link>
      <p className="home-count">{screens.length} live screens · Apache-2.0</p>
    </section>
  );
}
