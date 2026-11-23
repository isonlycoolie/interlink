// SPDX-License-Identifier: Apache-2.0
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: 'Home', match: (p: string) => p === '/' },
  { href: '/get-started', label: 'Design system', match: (p: string) => p !== '/' && !p.startsWith('/screens') },
  { href: '/screens', label: 'Screens', match: (p: string) => p.startsWith('/screens') },
];

/** The three places of the site, with the one you are in marked. */
export function HeaderLinks() {
  const path = usePathname() || '/';
  return LINKS.map((l) => {
    const active = l.match(path);
    return (
      <Link key={l.href} href={l.href} className="site-header-link il-focusable" data-active={active ? '' : undefined} aria-current={active ? 'page' : undefined}>
        {l.label}
      </Link>
    );
  });
}
