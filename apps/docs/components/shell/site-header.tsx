// SPDX-License-Identifier: Apache-2.0
import SearchIcon from '@interlink/icons/core/search';
import Link from 'next/link';
import { HeaderLinks } from './header-links';
import { Logo } from './logo';
import { MobileMenu, type MobileMenuProps } from './mobile-menu';
import { SearchDialog } from './search-dialog';
import { ThemeMenu } from './theme-menu';

/** Top bar: logo, primary sections, search and theme. On phones the sections and theme fold into the menu. */
export function SiteHeader({ menu }: { menu: MobileMenuProps }) {
  return (
    <header className="site-header">
      <a className="site-skip il-focusable" href="#main">
        Skip to main content
      </a>
      <Link href="/" className="site-home il-focusable" aria-label="Interlink Design home">
        <Logo />
      </Link>
      <nav className="site-header-nav" aria-label="Primary">
        <HeaderLinks />
        <button type="button" className="site-header-link site-search-button il-focusable" aria-keyshortcuts="Control+K Meta+K" data-search-trigger="">
          <SearchIcon label="" />
          <span className="site-search-text">Search</span>
        </button>
        <span className="site-header-theme">
          <ThemeMenu />
        </span>
        <MobileMenu {...menu} />
      </nav>
      <SearchDialog />
    </header>
  );
}
