// SPDX-License-Identifier: Apache-2.0
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import { Avatar } from '@interlink/react/avatar';
import Link from 'next/link';
import { PixelWord } from './pixel';

/** The close: a big invitation, a comment from the team, and a striped band that leads into the docs. */
export function Closing() {
  return (
    <section className="home-closing" aria-labelledby="home-build">
      <svg className="home-blob" viewBox="0 0 200 170" aria-hidden="true">
        <path d="M100 20 C 130 -10, 190 10, 180 60 C 210 90, 190 160, 130 150 C 110 175, 60 175, 50 140 C 0 140, -10 80, 30 60 C 20 15, 80 0, 100 20 Z" />
        <rect x="80" y="70" width="10" height="26" rx="5" /><rect x="104" y="70" width="10" height="26" rx="5" />
      </svg>
      <div className="home-build">
        <h2 id="home-build"><PixelWord text="Let's build" /></h2>
        <p>Tokens, components, guidelines and screens, all open. Start with one button or a whole product.</p>
      </div>
      <figure className="home-comment">
        <figcaption>Comment</figcaption>
        <div><Avatar name="Interlink team" size="small" /><span><strong>Interlink team</strong>Open to contributions, new patterns and hard enterprise problems.</span></div>
      </figure>
      <div className="home-band">
        <svg viewBox="0 0 1240 520" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 H 420 L 140 520 H 0 Z M 640 0 H 980 L 700 520 H 360 Z M 1180 0 H 1240 V 520 H 900 Z" /></svg>
        <Link href="/get-started" className="home-band-cta">
          <span aria-hidden="true"><ChevronRightIcon label="" color="currentColor" /></span>
          <PixelWord text="Start" />
          <span aria-hidden="true"><ChevronRightIcon label="" color="currentColor" /></span>
        </Link>
      </div>
    </section>
  );
}
