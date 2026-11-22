// SPDX-License-Identifier: Apache-2.0
import SearchIcon from '@interlink/icons/core/search';
import Link from 'next/link';
import { Logo } from './logo';
import { ThemeMenu } from './theme-menu';

/** Top bar: logo, primary sections, search and theme. */
export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-skip il-focusable" href="#main">
        Skip to main content
      </a>
      <Link href="/" className="site-home il-focusable" aria-label="Interlink Design home">
        <Logo />
      </Link>
      <nav className="site-header-nav" aria-label="Primary">
        <Link href="/get-started" className="site-header-link il-focusable" data-active="">
          Design system
        </Link>
        <button type="button" className="site-header-link site-search-button il-focusable" aria-keyshortcuts="Control+K Meta+K" data-search-trigger="">
          <SearchIcon label="" />
          Search
        </button>
        <ThemeMenu />
      </nav>
    </header>
  );
}
