// SPDX-License-Identifier: Apache-2.0
import HomeIcon from '@interlink/icons/core/home';
import PageIcon from '@interlink/icons/core/page';
import ProjectIcon from '@interlink/icons/core/project';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  AppLogo, AppSwitcher, CreateButton, ExpandableNavItem, Main, NavItem, NavSearch, Panel, Root, SideNav, SideNavContent, SideNavHeader, SideNavSection, SideNavToggle, TopNav, TopNavEnd, TopNavMiddle, TopNavStart,
} from '../src/navigation-system';
import { PageHeader } from '../src/page-header';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

function App({ onClose = () => {} }: { onClose?: () => void }) {
  return (
    <Root>
      <TopNav>
        <TopNavStart>
          <SideNavToggle />
          <AppSwitcher />
          <AppLogo name="Lumen" icon={ProjectIcon} href="/" />
        </TopNavStart>
        <TopNavMiddle>
          <NavSearch />
          <CreateButton />
        </TopNavMiddle>
        <TopNavEnd>{null}</TopNavEnd>
      </TopNav>
      <SideNav label="Payments space">
        <SideNavHeader title="Payments" subtitle="Software space" />
        <SideNavContent>
          <SideNavSection>
            <NavItem href="/home" icon={HomeIcon}>For you</NavItem>
          </SideNavSection>
          <SideNavSection title="Pages" hasSeparator>
            <ExpandableNavItem label="Launch plan" icon={PageIcon}>
              <NavItem href="/launch/risks" isSelected>Risks</NavItem>
            </ExpandableNavItem>
          </SideNavSection>
        </SideNavContent>
      </SideNav>
      <Main>
        <PageHeader breadcrumbs={<a href="/">Payments</a>} actions={<button type="button">Share</button>}>Risks</PageHeader>
      </Main>
      <Panel title="Details" subtitle="PAY-112" onClose={onClose}>Body</Panel>
    </Root>
  );
}

describe('navigation system', () => {
  it('has landmarks, one h1 and no axe violations', async () => {
    const { container } = render(<App />);
    expect(screen.getByRole('banner', { name: 'Global' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: 'Payments space' })).toBeTruthy();
    expect(screen.getByRole('main')).toBeTruthy();
    expect(screen.getByRole('complementary', { name: 'Details' })).toBeTruthy();
    expect(screen.getByRole('search')).toBeTruthy();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('link', { name: 'Lumen' }).getAttribute('href')).toBe('/');
    await noViolations(container);
  });
  it('collapses the side nav and expands tree items', () => {
    render(<App />);
    const toggle = screen.getByRole('button', { name: 'Collapse sidebar' });
    fireEvent.click(toggle);
    expect(screen.queryByRole('navigation', { name: 'Payments space' })).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Expand sidebar' }));
    const tree = screen.getByRole('button', { name: 'Launch plan' });
    expect(tree.getAttribute('aria-expanded')).toBe('false');
    fireEvent.click(tree);
    expect(screen.getByRole('link', { name: 'Risks' }).getAttribute('aria-current')).toBe('page');
  });
  it('closes the panel', () => {
    const onClose = vi.fn();
    render(<App onClose={onClose} />);
    fireEvent.click(screen.getByRole('button', { name: 'Close Details' }));
    expect(onClose).toHaveBeenCalled();
  });
});
