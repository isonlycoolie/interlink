// SPDX-License-Identifier: Apache-2.0
import SecurityHero from '@interlink/illustrations/art/security-hero';
import { LinkButton } from '@interlink/react/button';

/** The trust band for security teams, then the closing call to action on a patterned colour block. */
export function Trust() {
  return (
    <section className="lnd-section lml-trust-band" aria-labelledby="lml-trust-title">
      <div className="lnd-wrap lml-trust-grid">
        <SecurityHero size="large" />
        <div>
          <h2 id="lml-trust-title" className="lnd-h2">Ready for your security team</h2>
          <ul className="lml-badges">
            {['ISO 27001', 'SOC 2 Type II', 'GDPR', 'Data stays in Africa or the EU', 'Single sign-on and SCIM', 'Audit log for every agent'].map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="lml-cta" id="start" aria-labelledby="lml-cta-title">
      <div className="lnd-wrap">
        <h2 id="lml-cta-title" className="lnd-h2">Bring your team. Bring your agents.</h2>
        <div className="lnd-ctas">
          <LinkButton appearance="primary" href="#signup">Get it free</LinkButton>
          <LinkButton href="#sales">Talk to sales</LinkButton>
        </div>
      </div>
    </section>
  );
}
