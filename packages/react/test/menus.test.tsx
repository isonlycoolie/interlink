// SPDX-License-Identifier: Apache-2.0
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DropdownItem, DropdownItemCheckbox, DropdownItemCheckboxGroup, DropdownItemGroup, DropdownItemRadio, DropdownItemRadioGroup, DropdownMenu } from '../src/dropdown-menu';
import { ButtonItem, LinkItem, MenuGroup, Section } from '../src/menu';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

function Actions({ onEdit }: { onEdit: () => void }) {
  return (
    <DropdownMenu trigger="Actions" label="Page actions">
      <DropdownItemGroup>
        <DropdownItem onClick={onEdit}>Edit</DropdownItem>
        <DropdownItem>Move</DropdownItem>
        <DropdownItem isDisabled>Archive</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </DropdownItemGroup>
      <DropdownItemCheckboxGroup id="show" title="Show">
        <DropdownItemCheckbox id="done">Done items</DropdownItemCheckbox>
      </DropdownItemCheckboxGroup>
      <DropdownItemRadioGroup id="sort" title="Sort by">
        <DropdownItemRadio id="name" defaultSelected>Name</DropdownItemRadio>
        <DropdownItemRadio id="date">Date</DropdownItemRadio>
      </DropdownItemRadioGroup>
    </DropdownMenu>
  );
}

describe('DropdownMenu', () => {
  it('opens from the keyboard on the first item and moves with arrows, skipping disabled items', () => {
    render(<Actions onEdit={() => {}} />);
    const trigger = screen.getByRole('button', { name: 'Actions' });
    fireEvent.keyDown(trigger, { key: 'ArrowDown' });
    expect(screen.getByRole('menu', { name: 'Page actions' })).toBeTruthy();
    expect(document.activeElement?.textContent).toBe('Edit');
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowDown' });
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowDown' });
    expect(document.activeElement?.textContent).toBe('Delete');
    fireEvent.keyDown(document.activeElement as Element, { key: 'm' });
    expect(document.activeElement?.textContent).toBe('Move');
  });
  it('runs an action, closes, and returns focus to the trigger', () => {
    const onEdit = vi.fn();
    render(<Actions onEdit={onEdit} />);
    const trigger = screen.getByRole('button', { name: 'Actions' });
    fireEvent.keyDown(trigger, { key: 'ArrowDown' });
    fireEvent.click(screen.getByRole('menuitem', { name: 'Edit' }));
    expect(onEdit).toHaveBeenCalledOnce();
    expect(screen.queryByRole('menu')).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });
  it('keeps checkbox and radio choices while closed', () => {
    render(<Actions onEdit={() => {}} />);
    const trigger = screen.getByRole('button', { name: 'Actions' });
    fireEvent.click(trigger);
    fireEvent.click(screen.getByRole('menuitemcheckbox', { name: 'Done items' }));
    fireEvent.click(screen.getByRole('menuitemradio', { name: 'Date' }));
    fireEvent.keyDown(document.body, { key: 'Escape' });
    fireEvent.click(trigger);
    expect(screen.getByRole('menuitemcheckbox', { name: 'Done items' }).getAttribute('aria-checked')).toBe('true');
    expect(screen.getByRole('menuitemradio', { name: 'Date' }).getAttribute('aria-checked')).toBe('true');
    expect(screen.getByRole('menuitemradio', { name: 'Name' }).getAttribute('aria-checked')).toBe('false');
  });
  it('has no axe violations when open', async () => {
    const { container } = render(<Actions onEdit={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: 'Actions' }));
    await noViolations(container);
  });
});

describe('Menu', () => {
  it('renders button and link items with selection and description', async () => {
    const { container } = render(
      <MenuGroup>
        <Section title="Recent">
          <ButtonItem description="Updated today">Create a space</ButtonItem>
          <LinkItem href="#roadmap" isSelected>
            Roadmap
          </LinkItem>
        </Section>
      </MenuGroup>,
    );
    expect(screen.getByRole('link', { name: 'Roadmap' }).getAttribute('aria-current')).toBe('page');
    expect(screen.getByRole('group', { name: 'Recent' })).toBeTruthy();
    await noViolations(container);
  });
});
