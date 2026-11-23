// SPDX-License-Identifier: Apache-2.0
import LightbulbIcon from '@interlink/icons/core/lightbulb';
import Launch from '@interlink/illustrations/art/launch';

/** The welcome band: today's date and a greeting on deep purple, with a piece of art and the play of the day. */
export function Banner({ name }: { name: string }) {
  return (
    <section className="scr-banner" aria-labelledby="home-greeting">
      <div className="scr-banner-text">
        <p className="scr-banner-date">Monday, November 23</p>
        <h1 id="home-greeting" className="scr-banner-title">Hello, {name}</h1>
      </div>
      <div className="scr-banner-art" aria-hidden="true">
        <svg viewBox="0 0 480 128" preserveAspectRatio="xMaxYMid slice" className="scr-banner-shapes">
          <path d="M40 128 C 70 60, 120 0, 220 0 L 480 0 L 480 128 Z" className="scr-banner-band" />
          <path d="M150 0 C 210 40, 300 46, 380 0 Z" className="scr-banner-cut" />
          <path d="M0 92 C 30 70, 46 104, 72 88 S 112 70, 140 96 S 300 120, 420 36" className="scr-banner-line" />
          <path d="M404 30 L 424 34 L 414 50" className="scr-banner-line" />
        </svg>
        <span className="scr-banner-launch">
          <Launch size="medium" colors={{ ink: 'var(--il-assist-text-on-ink)' }} />
        </span>
      </div>
      <a className="scr-banner-chip" href="#play">
        <LightbulbIcon label="" color="currentColor" size="small" />
        Play of the day: Weekly team updates
      </a>
    </section>
  );
}
