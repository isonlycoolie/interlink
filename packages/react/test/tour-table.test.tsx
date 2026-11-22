// SPDX-License-Identifier: Apache-2.0
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DynamicTable } from '../src/dynamic-table';
import { PopoverContent, PopoverProvider, PopoverTarget, SpotlightActions, SpotlightBody, SpotlightCard, SpotlightControls, SpotlightDismissControl, SpotlightFooter, SpotlightHeader, SpotlightHeadline, SpotlightPrimaryAction, SpotlightStepCount } from '../src/spotlight';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

describe('Spotlight', () => {
  it('is a named dialog wired to dismiss and next', async () => {
    const dismiss = vi.fn();
    const next = vi.fn();
    const { container } = render(
      <PopoverProvider>
        <PopoverTarget>
          <button type="button">Create</button>
        </PopoverTarget>
        <PopoverContent placement="bottom-start" dismiss={dismiss} next={next}>
          <SpotlightCard>
            <SpotlightHeader>
              <SpotlightHeadline>Create work here</SpotlightHeadline>
              <SpotlightControls>
                <SpotlightDismissControl />
              </SpotlightControls>
            </SpotlightHeader>
            <SpotlightBody>Add tasks for your team in one place.</SpotlightBody>
            <SpotlightFooter>
              <SpotlightStepCount current={1} total={2} />
              <SpotlightActions>
                <SpotlightPrimaryAction>Next</SpotlightPrimaryAction>
              </SpotlightActions>
            </SpotlightFooter>
          </SpotlightCard>
        </PopoverContent>
      </PopoverProvider>,
    );
    expect(screen.getByRole('dialog', { name: 'Create work here' })).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(next).toHaveBeenCalledOnce();
    fireEvent.keyDown(document.body, { key: 'Escape' });
    expect(dismiss).toHaveBeenCalledOnce();
    await noViolations(container);
  });
});

const head = { cells: [{ key: 'name', content: 'Name', isSortable: true }, { key: 'size', content: 'Size', isSortable: true }] };
const rows = [
  ['Roadmap', 30],
  ['Billing', 12],
  ['Atlas', 7],
].map(([name, size]) => ({ key: String(name), cells: [{ key: name, content: name }, { key: size, content: `${size} files` }] }));

describe('DynamicTable', () => {
  it('sorts by a column and marks the sort for assistive technology', async () => {
    const { container } = render(<DynamicTable label="Projects" head={head} rows={rows} />);
    const names = () => screen.getAllByRole('row').slice(1).map((r) => within(r).getAllByRole('cell')[0]?.textContent);
    fireEvent.click(screen.getByRole('button', { name: 'Size' }));
    expect(names()).toEqual(['Atlas', 'Billing', 'Roadmap']);
    expect(screen.getByRole('columnheader', { name: 'Size' }).getAttribute('aria-sort')).toBe('ascending');
    fireEvent.click(screen.getByRole('button', { name: 'Size' }));
    expect(names()).toEqual(['Roadmap', 'Billing', 'Atlas']);
    await noViolations(container);
  });
  it('pages rows and shows the empty view', () => {
    render(<DynamicTable label="Projects" head={head} rows={rows} rowsPerPage={2} />);
    expect(screen.getAllByRole('row')).toHaveLength(3);
    fireEvent.click(screen.getByRole('button', { name: 'page 2' }));
    expect(screen.getAllByRole('row')).toHaveLength(2);
    cleanup();
    render(<DynamicTable label="Projects" head={head} rows={[]} emptyView={<p>No projects</p>} />);
    expect(screen.getByText('No projects')).toBeTruthy();
  });
});
