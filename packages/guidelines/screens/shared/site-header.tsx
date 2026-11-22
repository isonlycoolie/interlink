// SPDX-License-Identifier: Apache-2.0
'use client';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import type { ComponentType, ReactNode } from 'react';
import { useId, useState } from 'react';
import type { IconProps } from '@interlink/icons';
import { Button, LinkButton } from '@interlink/react/button';

export interface MenuItem {
  title: string;
  text: string;
  icon: ComponentType<IconProps>;
  color: 'blue' | 'purple' | 'saffron' | 'lime';
}
export interface SiteHeaderProps {
  brand: ReactNode;
  announcement: ReactNode;
  menus: { label: string; items: MenuItem[] }[];
  links: string[];
  cta: string;
}

/** A slim announcement, then a sticky header: brand, menus that open a wide panel, sign in and the main action. */
export function SiteHeader({ brand, announcement, menus, links, cta }: SiteHeaderProps) {
  const [open, setOpen] = useState<string | null>(null);
  const id = useId();
  const current = menus.find((m) => m.label === open);
  return (
    <>
      <p className="lnd-announce">{announcement}</p>
      <header className="lnd-header" onKeyDown={(e) => e.key === 'Escape' && setOpen(null)}>
        <div className="lnd-header-inner">
          <a href="#top" className="lnd-brand">
            {brand}
          </a>
          <nav className="lnd-nav" aria-label="Main">
            {menus.map((m) => (
              <button key={m.label} type="button" className="lnd-nav-trigger" aria-expanded={open === m.label} aria-controls={id} onClick={() => setOpen(open === m.label ? null : m.label)}>
                {m.label}
                <ChevronDownIcon label="" size="small" />
              </button>
            ))}
            {links.map((l) => (
              <a key={l} className="lnd-nav-link" href={`#${l.toLowerCase()}`}>
                {l}
              </a>
            ))}
          </nav>
          <div className="lnd-header-actions">
            <Button appearance="subtle">Sign in</Button>
            <LinkButton appearance="primary" href="#start">
              {cta}
            </LinkButton>
          </div>
        </div>
        <div id={id} className="lnd-mega" hidden={!current}>
          {current ? (
            <ul className="lnd-mega-grid">
              {current.items.map(({ title, text, icon: Icon, color }) => (
                <li key={title}>
                  <a href={`#${title.toLowerCase().replaceAll(' ', '-')}`} className="lnd-mega-item">
                    <span className="lnd-mega-icon" data-color={color}>
                      <Icon label="" />
                    </span>
                    <span>
                      <span className="lnd-mega-title">{title}</span>
                      <span className="lnd-mega-text">{text}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </header>
    </>
  );
}
