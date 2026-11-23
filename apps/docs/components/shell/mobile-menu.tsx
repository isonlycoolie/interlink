// SPDX-License-Identifier: Apache-2.0
'use client';
import MenuIcon from '@interlink/icons/core/menu';
import { IconButton } from '@interlink/react/button';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerSidebar } from '@interlink/react/drawer';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HeaderLinks } from './header-links';
import { SideNav, type NavNode } from './side-nav';
import { ThemeMenu } from './theme-menu';

export interface MobileMenuProps {
  docs: NavNode[];
  screens: NavNode[];
  status: Record<string, string>;
}

/** On phones the header folds into one Menu button: the site's places, the theme, and the section's sidebar in a drawer. */
export function MobileMenu({ docs, screens, status }: MobileMenuProps) {
  const path = usePathname() || '/';
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const tree = path.startsWith('/screens') ? screens : path === '/' ? null : docs;
  return (
    <span className="site-mobile-trigger">
      <IconButton appearance="subtle" icon={MenuIcon} label="Menu" aria-expanded={open} onClick={() => setOpen(true)} />
      <Drawer isOpen={open} onClose={() => setOpen(false)} width="medium" enterFrom="left" label="Menu">
        <DrawerSidebar>
          <DrawerCloseButton />
        </DrawerSidebar>
        <DrawerContent>
          <div className="site-mobile-menu">
            <nav className="site-mobile-places" aria-label="Places">
              <HeaderLinks />
            </nav>
            <ThemeMenu />
            {tree ? <SideNav tree={tree} status={status} /> : null}
          </div>
        </DrawerContent>
      </Drawer>
    </span>
  );
}
