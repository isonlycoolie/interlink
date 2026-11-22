// SPDX-License-Identifier: Apache-2.0
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Breadcrumbs, BreadcrumbsItem } from '../src/breadcrumbs';
import { Pagination } from '../src/pagination';
import { collapseRange } from '../src/pagination/collapse-range';
import { Tab, TabList, TabPanel, Tabs } from '../src/tabs';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

describe('Tabs', () => {
  const View = ({ onChange }: { onChange?: (i: number) => void }) => (
    <Tabs id="views" onChange={onChange}>
      <TabList>
        <Tab>Summary</Tab>
        <Tab>Board</Tab>
        <Tab>List</Tab>
      </TabList>
      <TabPanel>Summary view</TabPanel>
      <TabPanel>Board view</TabPanel>
      <TabPanel>List view</TabPanel>
    </Tabs>
  );
  it('links tabs and panels and selects with arrow keys', async () => {
    const onChange = vi.fn();
    const { container } = render(<View onChange={onChange} />);
    const first = screen.getByRole('tab', { name: 'Summary' });
    expect(first.getAttribute('aria-selected')).toBe('true');
    expect(screen.getByRole('tabpanel', { name: 'Summary' }).textContent).toBe('Summary view');
    first.focus();
    fireEvent.keyDown(first, { key: 'ArrowLeft' });
    expect(onChange).toHaveBeenCalledWith(2);
    expect(document.activeElement).toBe(screen.getByRole('tab', { name: 'List' }));
    expect(screen.getByRole('tabpanel').textContent).toBe('List view');
    expect(screen.getByRole('tab', { name: 'List' }).tabIndex).toBe(0);
    expect(first.tabIndex).toBe(-1);
    await noViolations(container);
  });
});

describe('Breadcrumbs', () => {
  it('collapses long trails and marks the current page', async () => {
    const { container } = render(
      <Breadcrumbs maxItems={3}>
        {['Home', 'Projects', 'Design', 'Roadmap', 'Q3 plan'].map((t) => (
          <BreadcrumbsItem key={t} text={t} href={`#${t}`} />
        ))}
      </Breadcrumbs>,
    );
    expect(screen.queryByRole('link', { name: 'Projects' })).toBeNull();
    expect(screen.getByRole('link', { name: 'Q3 plan' }).getAttribute('aria-current')).toBe('page');
    fireEvent.click(screen.getByRole('button', { name: 'Show more breadcrumbs' }));
    expect(screen.getByRole('link', { name: 'Projects' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: 'Breadcrumbs' })).toBeTruthy();
    await noViolations(container);
  });
});

describe('Pagination', () => {
  it('collapses the middle with ellipses around the current page', () => {
    expect(collapseRange(10, 0, 7)).toEqual([0, 1, 2, 3, 4, 'ellipsis', 9]);
    expect(collapseRange(10, 5, 7)).toEqual([0, 'ellipsis', 4, 5, 6, 'ellipsis', 9]);
    expect(collapseRange(10, 9, 7)).toEqual([0, 'ellipsis', 5, 6, 7, 8, 9]);
    expect(collapseRange(5, 2, 7)).toEqual([0, 1, 2, 3, 4]);
  });
  it('moves between pages and marks the current one', async () => {
    const onChange = vi.fn();
    const { container } = render(<Pagination pages={[1, 2, 3, 4, 5]} onChange={onChange} />);
    expect(screen.getByRole('button', { name: 'page 1' }).getAttribute('aria-current')).toBe('page');
    expect((screen.getByRole('button', { name: 'previous' }) as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(screen.getByRole('button', { name: 'next' }));
    expect(onChange).toHaveBeenLastCalledWith(expect.anything(), 2);
    expect(screen.getByRole('button', { name: 'page 2' }).getAttribute('aria-current')).toBe('page');
    await noViolations(container);
  });
});
