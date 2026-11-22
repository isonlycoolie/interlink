// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { RootProps } from './root';

export const navigationSystemDocs = docsFor<RootProps>({
  name: "Navigation system",
  package: '@interlink/react/navigation-system',
  exports: ["Root", "TopNav", "TopNavStart", "TopNavMiddle", "TopNavEnd", "SideNavToggle", "AppSwitcher", "AppLogo", "NavSearch", "CreateButton", "SideNav", "SideNavHeader", "SideNavContent", "SideNavFooter", "SideNavSection", "NavItem", "ExpandableNavItem", "Main", "Panel", "useNavigationSystem"],
  description: "The frame of an app: top bar, side navigation, page and side panel.",
  status: 'beta',
  category: 'Navigation',
  keywords: ["navigation", "layout", "shell", "sidebar", "top bar", "app frame"],
  props: {
    children: {"type": "ReactNode", "description": "TopNav, SideNav, Main and an optional Panel, in that order."},
    isSideNavOpen: {"type": "boolean", "description": "Controlled open state of the side navigation."},
    defaultIsSideNavOpen: {"type": "boolean", "description": "Initial open state.", "default": "true"},
    onSideNavToggle: {"type": "(isOpen) => void", "description": "Called when the side navigation opens or closes."},
    skipLinkLabel: {"type": "string", "description": "Label of the skip link.", "default": "'Skip to main content'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
