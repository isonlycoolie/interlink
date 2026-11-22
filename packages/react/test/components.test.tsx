// SPDX-License-Identifier: Apache-2.0
import AddIcon from '@interlink/icons/core/add';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button, ButtonGroup, IconButton, LinkButton } from '../src/button';
import { Lozenge } from '../src/lozenge';
import { SectionMessage, SectionMessageAction } from '../src/section-message';
import { Spinner } from '../src/spinner';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

describe('Button', () => {
  it('describes its state with data attributes', () => {
    render(<Button appearance="primary" spacing="compact" isSelected iconBefore={AddIcon}>Create</Button>);
    const b = screen.getByRole('button', { name: 'Create' });
    expect(b.dataset.appearance).toBe('primary');
    expect(b.dataset.spacing).toBe('compact');
    expect(b.getAttribute('aria-pressed')).toBe('true');
    expect(b.hasAttribute('data-icon-before')).toBe(true);
  });

  it('blocks clicks while loading but stays focusable', () => {
    const onClick = vi.fn();
    render(<Button isLoading onClick={onClick}>Save</Button>);
    const b = screen.getByRole('button');
    expect(b.getAttribute('aria-disabled')).toBe('true');
    expect(b.hasAttribute('disabled')).toBe(false);
    fireEvent.click(b);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('is disabled natively when isDisabled', () => {
    render(<Button isDisabled>Save</Button>);
    expect((screen.getByRole('button') as HTMLButtonElement).disabled).toBe(true);
  });

  it('IconButton names the action from its label', () => {
    render(<IconButton icon={AddIcon} label="Add item" />);
    expect(screen.getByRole('button', { name: 'Add item' })).toBeTruthy();
  });

  it('LinkButton is a link, and a disabled one has no href', () => {
    render(<LinkButton href="/new" isDisabled>New</LinkButton>);
    const a = screen.getByText('New').closest('a')!;
    expect(a.hasAttribute('href')).toBe(false);
    expect(a.getAttribute('aria-disabled')).toBe('true');
  });

  it('has no axe violations', async () => {
    const { container } = render(
      <ButtonGroup label="Form actions">
        <Button appearance="subtle">Cancel</Button>
        <Button appearance="primary">Save</Button>
        <IconButton icon={AddIcon} label="Add" />
        <LinkButton href="/docs">Docs</LinkButton>
      </ButtonGroup>,
    );
    await noViolations(container);
  });
});

describe('Lozenge', () => {
  it('maps older appearance names to the current colours', () => {
    render(<Lozenge appearance="inprogress" testId="l">In progress</Lozenge>);
    expect(screen.getByTestId('l').dataset.color).toBe('information');
  });
});

describe('SectionMessage', () => {
  it('renders title, content, actions and can be dismissed', () => {
    const onDismiss = vi.fn();
    render(
      <SectionMessage title="Changes saved" appearance="success" isDismissible onDismiss={onDismiss} actions={<><SectionMessageAction href="/a">View</SectionMessageAction><SectionMessageAction href="/b">Undo</SectionMessageAction></>}>
        Your project settings are up to date.
      </SectionMessage>,
    );
    expect(screen.getByRole('heading', { name: 'Changes saved', level: 2 })).toBeTruthy();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(onDismiss).toHaveBeenCalledOnce();
    expect(screen.queryByText('Changes saved')).toBeNull();
  });

  it('has no axe violations', async () => {
    const { container } = render(<SectionMessage title="Heads up" appearance="warning">Billing changes next month.</SectionMessage>);
    await noViolations(container);
  });
});

describe('Spinner', () => {
  it('is announced only when labelled', () => {
    render(<Spinner label="Loading results" />);
    expect(screen.getByRole('img', { name: 'Loading results' })).toBeTruthy();
  });
});
