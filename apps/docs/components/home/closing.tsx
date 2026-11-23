// SPDX-License-Identifier: Apache-2.0
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import Link from 'next/link';
import { PixelWord } from './pixel';

/** The close: a big invitation, a striped band that leads into the docs, and the maker's signature. */
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
      <div className="home-band">
        <svg viewBox="0 0 1240 520" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 H 420 L 140 520 H 0 Z M 640 0 H 980 L 700 520 H 360 Z M 1180 0 H 1240 V 520 H 900 Z" /></svg>
        <Link href="/get-started" className="home-band-cta">
          <span aria-hidden="true"><ChevronRightIcon label="" color="currentColor" /></span>
          <PixelWord text="Start" />
          <span aria-hidden="true"><ChevronRightIcon label="" color="currentColor" /></span>
        </Link>
      </div>
      <footer className="home-sign">
        <p>Made by isonlycoolie</p>
        <svg className="home-signature" viewBox="0 0 260 70" role="img" aria-label="Signature of isonlycoolie">
          <path d="M8 46 C 18 20, 30 14, 30 30 S 20 58, 34 54 C 46 50, 52 30, 62 34 C 70 38, 58 54, 70 52 C 82 50, 86 30, 98 34 C 108 38, 96 56, 110 52 C 124 48, 126 28, 140 32 C 152 36, 142 54, 156 50 C 172 46, 178 26, 192 30 C 204 34, 196 52, 210 48 C 226 44, 236 30, 252 24" />
          <path d="M40 62 C 100 56, 170 58, 236 52" />
        </svg>
      </footer>
    </section>
  );
}
