// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import AppsIcon from '@interlink/icons/core/apps';
import BoardIcon from '@interlink/icons/core/board';
import ClockIcon from '@interlink/icons/core/clock';
import DashboardIcon from '@interlink/icons/core/dashboard';
import FilterIcon from '@interlink/icons/core/filter';
import MoreIcon from '@interlink/icons/core/show-more-horizontal';
import PersonIcon from '@interlink/icons/core/person-avatar';
import PlanIcon from '@interlink/icons/core/roadmap';
import ReleaseIcon from '@interlink/icons/core/release';
import StarIcon from '@interlink/icons/core/star-unstarred';
import { IconButton } from '@interlink/react/button';
import { NavItem, SideNav, SideNavContent, SideNavSection } from '@interlink/react/navigation-system';
import { AppTile } from '../shared/frame';

/** The tracker's navigation: personal lists, then spaces with the open one selected. */
export function TrackerNav() {
  return (
    <SideNav label="Tracker">
      <SideNavContent>
        <SideNavSection>
          <NavItem href="#for-you" icon={PersonIcon}>For you</NavItem>
          <NavItem href="#recent" icon={ClockIcon}>Recent</NavItem>
          <NavItem href="#starred" icon={StarIcon}>Starred</NavItem>
          <NavItem href="#apps" icon={AppsIcon}>Apps</NavItem>
          <NavItem href="#plans" icon={PlanIcon}>Plans</NavItem>
        </SideNavSection>
        <SideNavSection title="Spaces" action={<span className="scr-row-after"><IconButton appearance="subtle" spacing="compact" icon={AddIcon} label="Create space" /><IconButton appearance="subtle" spacing="compact" icon={MoreIcon} label="Space actions" /></span>}>
          <NavItem href="#kenya" icon={<AppTile icon={ReleaseIcon} color="saffron" />} isSelected>Kenya payouts</NavItem>
          <NavItem href="#checkout" icon={<AppTile icon={BoardIcon} color="blue" />}>Checkout</NavItem>
          <NavItem href="#risk" icon={<AppTile icon={BoardIcon} color="purple" />}>Risk and compliance</NavItem>
        </SideNavSection>
        <SideNavSection>
          <NavItem href="#filters" icon={FilterIcon}>Filters</NavItem>
          <NavItem href="#dashboards" icon={DashboardIcon}>Dashboards</NavItem>
        </SideNavSection>
      </SideNavContent>
    </SideNav>
  );
}
