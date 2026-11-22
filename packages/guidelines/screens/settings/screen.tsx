// SPDX-License-Identifier: Apache-2.0
'use client';
import ArrowLeftIcon from '@interlink/icons/core/arrow-left';
import CreditCardIcon from '@interlink/icons/core/credit-card';
import KeyIcon from '@interlink/icons/core/lock-locked';
import NotificationIcon from '@interlink/icons/core/notification';
import PeopleIcon from '@interlink/icons/core/people-group';
import ProjectIcon from '@interlink/icons/core/project';
import SettingsIcon from '@interlink/icons/core/settings';
import ShieldIcon from '@interlink/icons/core/shield';
import AppsIcon from '@interlink/icons/core/apps';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { FlagsProvider } from '@interlink/react/flag';
import { NavItem, SideNav, SideNavContent, SideNavSection } from '@interlink/react/navigation-system';
import { PageHeader } from '@interlink/react/page-header';
import { AppChrome } from '../shared/chrome';
import { WorkspaceForm } from './workspace-form';

const product = { name: 'Lumen Projects', icon: ProjectIcon, color: 'brand' as const };

function SettingsNav() {
  return (
    <SideNav label="Settings">
      <SideNavContent>
        <SideNavSection>
          <NavItem href="#back" icon={ArrowLeftIcon}>Back to Launch Hub</NavItem>
        </SideNavSection>
        <SideNavSection title="Workspace" hasSeparator>
          <NavItem href="#general" icon={SettingsIcon} isSelected>General</NavItem>
          <NavItem href="#members" icon={PeopleIcon}>Members</NavItem>
          <NavItem href="#notifications" icon={NotificationIcon}>Notifications</NavItem>
          <NavItem href="#apps" icon={AppsIcon}>Connected apps</NavItem>
        </SideNavSection>
        <SideNavSection title="Security" hasSeparator>
          <NavItem href="#access" icon={ShieldIcon}>Access</NavItem>
          <NavItem href="#tokens" icon={KeyIcon}>API tokens</NavItem>
        </SideNavSection>
        <SideNavSection title="Billing" hasSeparator>
          <NavItem href="#plan" icon={CreditCardIcon}>Plan and invoices</NavItem>
        </SideNavSection>
      </SideNavContent>
    </SideNav>
  );
}

/** Workspace settings inside the app frame: section navigation on the left, one form per page. */
export default function SettingsScreen() {
  return (
    <FlagsProvider>
      <AppChrome product={product} sideNav={<SettingsNav />} mainWidth="fixed">
        <PageHeader
          breadcrumbs={
            <Breadcrumbs>
              <BreadcrumbsItem text="Settings" href="#settings" />
              <BreadcrumbsItem text="Workspace" href="#workspace" />
            </Breadcrumbs>
          }
        >
          General
        </PageHeader>
        <WorkspaceForm />
      </AppChrome>
    </FlagsProvider>
  );
}
