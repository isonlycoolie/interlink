// SPDX-License-Identifier: Apache-2.0
import { LinkButton } from '@interlink/react/button';
import { Reveal, stagger } from '../shared/reveal';

const LINES: [string, string][] = [
  ['cmd', '$ fieldline deploy --region af-west'],
  ['dim', 'Building checkout-api from main (4f2a91c)'],
  ['ok', '✓ Built in 6.2s, 1.4 MB'],
  ['ok', '✓ Secrets loaded from vault: 3'],
  ['ok', '✓ Live in Lagos, Accra and Nairobi'],
  ['dim', '  p95 latency 18 ms · 0 errors in first 1,000 requests'],
  ['url', '→ https://checkout-api.fieldline.app'],
];

/** A dense hero on the ink block: the promise, two actions, and a terminal showing the first deploy. */
export function Hero() {
  return (
    <section className="fld-hero" aria-labelledby="fld-hero-title">
      <div className="lnd-wrap fld-hero-grid">
        <Reveal>
          <p className="lnd-eyebrow fld-on-ink" style={stagger(0)}>Fieldline developer cloud</p>
          <h1 id="fld-hero-title" className="lnd-h1" style={stagger(1)}>
            Ship apps that run close to every user
          </h1>
          <p className="lnd-lead fld-on-ink" style={stagger(2)}>
            Functions, databases, storage and security on one network, with new sites in Lagos, Nairobi and Johannesburg. Deploy
            from Git in under a minute and pay only for what runs.
          </p>
          <div className="lnd-ctas" style={stagger(3)}>
            <LinkButton appearance="primary" href="#start">Start building free</LinkButton>
            <LinkButton href="#sales">Talk to an engineer</LinkButton>
          </div>
        </Reveal>
        <figure className="fld-terminal">
          <figcaption className="fld-terminal-bar">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            Terminal: first deploy
          </figcaption>
          <pre>
            {LINES.map(([kind, text]) => (
              <code key={text} data-kind={kind}>
                {text}
                {'\n'}
              </code>
            ))}
          </pre>
        </figure>
      </div>
    </section>
  );
}
