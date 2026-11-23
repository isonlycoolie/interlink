// SPDX-License-Identifier: Apache-2.0
import { About } from '@/components/home/about';
import { Closing } from '@/components/home/closing';
import { Guidance } from '@/components/home/guidance';
import { Inside } from '@/components/home/inside';
import { Themes } from '@/components/home/themes';
import { Intro } from '@/components/home/intro';

/** The home of the design system: a grid canvas, the wordmark, what it is, what's inside, guidance agents run, every theme, and an invitation. */
export default function Home() {
  return (
    <main id="main" className="home">
      <Intro />
      <About />
      <Inside />
      <Guidance />
      <Themes />
      <Closing />
    </main>
  );
}
