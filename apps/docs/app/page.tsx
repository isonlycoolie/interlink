// SPDX-License-Identifier: Apache-2.0
import { About } from '@/components/home/about';
import { Closing } from '@/components/home/closing';
import { Featured } from '@/components/home/featured';
import { Intro } from '@/components/home/intro';

/** The home of the design system: a canvas with a ruler, the wordmark, what it is, featured screens and an invitation. */
export default function Home() {
  return (
    <main id="main" className="home">
      <Intro />
      <About />
      <Featured />
      <Closing />
    </main>
  );
}
