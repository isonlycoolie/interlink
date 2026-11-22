// SPDX-License-Identifier: Apache-2.0
'use client';
import ChartIcon from '@interlink/icons/core/chart-bar';
import CreditCardIcon from '@interlink/icons/core/credit-card';
import HomeIcon from '@interlink/icons/core/home';
import LogIcon from '@interlink/icons/core/list-bulleted';
import OfficeIcon from '@interlink/icons/core/office-building';
import PeopleIcon from '@interlink/icons/core/people-group';
import PersonIcon from '@interlink/icons/core/person';
import ShieldIcon from '@interlink/icons/core/shield';
import AiAgentIcon from '@interlink/icons/core/ai-agent';
import { Breadcrumbs, BreadcrumbsItem } from '@interlink/react/breadcrumbs';
import { Button } from '@interlink/react/button';
import { NavItem, SideNav, SideNavContent, SideNavSection } from '@interlink/react/navigation-system';
import { PageHeader } from '@interlink/react/page-header';
import { AppChrome } from '../shared/chrome';
import { ActivityLog } from './activity';
import { Identities } from './identities';
import { SecurityOverview } from './security';

const product = { name: 'Lumen Admin', icon: OfficeIcon, color: 'ink' as const };

function AdminNav() {
  return (
    <SideNav label="Administration">
      <SideNavContent>
        <SideNavSection>
          <NavItem href="#overview" icon={HomeIcon}>Overview</NavItem>
        </SideNavSection>
        <SideNavSection title="Directory" hasSeparator>
          <NavItem href="#users" icon={PersonIcon}>Users</NavItem>
          <NavItem href="#groups" icon={PeopleIcon}>Groups</NavItem>
          <NavItem href="#agents" icon={AiAgentIcon} isSelected>Non-human identities</NavItem>
        </SideNavSection>
        <SideNavSection title="Security" hasSeparator>
          <NavItem href="#policies" icon={ShieldIcon}>Policies</NavItem>
          <NavItem href="#log" icon={LogIcon}>Activity log</NavItem>
          <NavItem href="#insights" icon={ChartIcon}>Insights</NavItem>
        </SideNavSection>
        <SideNavSection title="Organisation" hasSeparator>
          <NavItem href="#billing" icon={CreditCardIcon}>Billing</NavItem>
        </SideNavSection>
      </SideNavContent>
    </SideNav>
  );
}

/** Admin for agents: who has access, how they act, what they did and what was blocked. */
export default function AgentsAdminScreen() {
  return (
    <AppChrome product={product} sideNav={<AdminNav />} createLabel="Add">
      <PageHeader
        breadcrumbs={
          <Breadcrumbs>
            <BreadcrumbsItem text="Admin" href="#admin" />
            <BreadcrumbsItem text="Directory" href="#directory" />
          </Breadcrumbs>
        }
        actions={
          <>
            <Button>Export</Button>
            <Button appearance="primary">Add agent</Button>
          </>
        }
      >
        Non-human identities
      </PageHeader>
      <div className="scr-admin">
        <SecurityOverview />
        <Identities />
        <ActivityLog />
      </div>
    </AppChrome>
  );
}
