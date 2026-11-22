// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';

/** Made-up customers, each with a mark drawn from simple shapes. */
const LOGOS: { name: string; mark: ReactNode }[] = [
  { name: 'Savanna Bank', mark: <path d="M2 18 L12 4 L22 18 Z" /> },
  { name: 'Kilima Telecom', mark: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" fill="var(--il-surface)" /></> },
  { name: 'Baobab Health', mark: <><rect x="9" y="3" width="6" height="18" rx="2" /><rect x="3" y="9" width="18" height="6" rx="2" /></> },
  { name: 'Pwani Logistics', mark: <path d="M2 14 Q7 6 12 14 T22 14 V20 H2 Z" /> },
  { name: 'Zuri Retail', mark: <rect x="3" y="3" width="18" height="18" rx="9" ry="4" /> },
  { name: 'Nyota Air', mark: <path d="M12 2 L14.6 9.2 L22 9.3 L16 13.8 L18.2 21 L12 16.6 L5.8 21 L8 13.8 L2 9.3 L9.4 9.2 Z" /> },
];

export function Logos() {
  return (
    <section className="lml-logos" aria-labelledby="lml-logos-title">
      <div className="lnd-wrap">
        <h2 id="lml-logos-title" className="lml-logos-title">
          Trusted by 4,000 teams across 30 countries
        </h2>
        <ul className="lml-logo-row">
          {LOGOS.map((l) => (
            <li key={l.name} className="lml-logo">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {l.mark}
              </svg>
              {l.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
