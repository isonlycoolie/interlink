// SPDX-License-Identifier: Apache-2.0
import type { ReactNode } from 'react';

export interface SiteFooterProps {
  brand: ReactNode;
  tagline: string;
  columns: { title: string; links: string[] }[];
  legal: string;
}

/** A mega footer: brand and tagline, then columns of links, then the legal line. */
export function SiteFooter({ brand, tagline, columns, legal }: SiteFooterProps) {
  return (
    <footer className="lnd-footer">
      <div className="lnd-footer-inner">
        <div className="lnd-footer-brand">
          {brand}
          <p>{tagline}</p>
        </div>
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title} className="lnd-footer-col">
            <h2>{c.title}</h2>
            <ul>
              {c.links.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replaceAll(' ', '-')}`}>{l}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="lnd-legal">{legal}</p>
    </footer>
  );
}
