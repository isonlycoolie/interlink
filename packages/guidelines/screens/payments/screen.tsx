// SPDX-License-Identifier: Apache-2.0
'use client';
import ApiIcon from '@interlink/icons/core/api';
import CalendarIcon from '@interlink/icons/core/calendar';
import ChartIcon from '@interlink/icons/core/chart-bar';
import ChevronDownIcon from '@interlink/icons/core/chevron-down';
import CreditCardIcon from '@interlink/icons/core/credit-card';
import FileIcon from '@interlink/icons/core/file';
import HomeIcon from '@interlink/icons/core/home';
import PeopleIcon from '@interlink/icons/core/people-group';
import SendIcon from '@interlink/icons/core/send';
import SettingsIcon from '@interlink/icons/core/settings';
import NodeIcon from '@interlink/icons/core/node';
import { Button } from '@interlink/react/button';
import { NavItem, SideNav, SideNavContent, SideNavFooter, SideNavSection } from '@interlink/react/navigation-system';
import { PageHeader } from '@interlink/react/page-header';
import { AppChrome } from '../shared/chrome';
import { Balances, Channels, Volume } from './charts';
import { Payouts } from './payouts';

const product = { name: 'Mkoba', icon: CreditCardIcon, color: 'saffron' as const };

function PaymentsNav() {
  return (
    <SideNav label="Mkoba">
      <SideNavContent>
        <SideNavSection>
          <NavItem href="#home" icon={HomeIcon} isSelected>Home</NavItem>
          <NavItem href="#payments" icon={CreditCardIcon}>Payments</NavItem>
          <NavItem href="#payouts" icon={SendIcon}>Payouts</NavItem>
          <NavItem href="#customers" icon={PeopleIcon}>Customers</NavItem>
          <NavItem href="#invoices" icon={FileIcon}>Invoices</NavItem>
          <NavItem href="#reports" icon={ChartIcon}>Reports</NavItem>
        </SideNavSection>
        <SideNavSection title="Developers" hasSeparator>
          <NavItem href="#keys" icon={ApiIcon}>API keys</NavItem>
          <NavItem href="#webhooks" icon={NodeIcon}>Webhooks</NavItem>
        </SideNavSection>
      </SideNavContent>
      <SideNavFooter>
        <NavItem href="#settings" icon={SettingsIcon}>Settings</NavItem>
      </SideNavFooter>
    </SideNav>
  );
}

/** A payments overview for East and West African merchants: balances per currency, volume, channels and payouts. */
export default function PaymentsScreen() {
  return (
    <AppChrome product={product} sideNav={<PaymentsNav />} createLabel="New payout">
      <PageHeader
        actions={
          <>
            <Button iconBefore={CalendarIcon} iconAfter={ChevronDownIcon}>Last 30 days</Button>
            <Button>Export</Button>
            <Button appearance="primary">Send money</Button>
          </>
        }
      >
        Good morning, Neema
      </PageHeader>
      <div className="scr-pay">
        <Balances />
        <div className="scr-pay-charts">
          <Volume />
          <Channels />
        </div>
        <Payouts />
      </div>
    </AppChrome>
  );
}
