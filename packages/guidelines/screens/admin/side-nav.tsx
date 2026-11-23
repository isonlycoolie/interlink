// SPDX-License-Identifier: Apache-2.0
import AppIcon from '@interlink/icons/core/apps';
import ChartIcon from '@interlink/icons/core/chart-trend-up';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import DatabaseIcon from '@interlink/icons/core/database';
import GlobeIcon from '@interlink/icons/core/globe';
import LayoutIcon from '@interlink/icons/core/layout-one-column';
import LogIcon from '@interlink/icons/core/list-bulleted';
import OfficeIcon from '@interlink/icons/core/office-building';
import ShieldIcon from '@interlink/icons/core/shield';
import { ExpandableNavItem, NavItem, SideNav, SideNavContent, SideNavSection } from '@interlink/react/navigation-system';

export type AdminView = 'identities' | 'activity' | 'security';

/** Administration: the organisation switcher, then the directory, security and insight areas. */
export function AdminNav({ view, onView }: { view: AdminView; onView: (v: AdminView) => void }) {
  return (
    <SideNav label="Administration">
      <SideNavContent>
        <button type="button" className="scr-org">
          <GlobeIcon label="" color="color.icon.subtle" size="small" />
          <span>Mkoba Labs</span>
          <ChevronDownIcon label="" color="currentColor" size="small" />
        </button>
        <SideNavSection>
          <NavItem href="#overview" icon={LayoutIcon}>Overview</NavItem>
          <ExpandableNavItem label="Directory" icon={OfficeIcon} isDefaultExpanded>
            <NavItem href="#users">Users</NavItem>
            <NavItem onClick={() => onView('identities')} isSelected={view === 'identities'}>Non-human identities</NavItem>
            <NavItem href="#groups">Groups</NavItem>
            <NavItem href="#teams">Teams</NavItem>
            <NavItem href="#service">Service accounts</NavItem>
          </ExpandableNavItem>
          <NavItem href="#apps" icon={AppIcon}>Apps</NavItem>
          <NavItem onClick={() => onView('security')} icon={ShieldIcon} isSelected={view === 'security'}>Security</NavItem>
          <NavItem onClick={() => onView('activity')} icon={LogIcon} isSelected={view === 'activity'}>Activity log</NavItem>
          <NavItem href="#data" icon={DatabaseIcon}>Data management</NavItem>
          <NavItem href="#insights" icon={ChartIcon}>Insights</NavItem>
        </SideNavSection>
      </SideNavContent>
    </SideNav>
  );
}
