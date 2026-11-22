// SPDX-License-Identifier: Apache-2.0
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Avatar, AvatarGroup, initialsOf } from '../src/avatar';
import { Badge } from '../src/badge';
import { EmptyState } from '../src/empty-state';
import { Link } from '../src/link';
import { ProgressBar } from '../src/progress-bar';
import { Skeleton } from '../src/skeleton';
import { Tag, TagGroup } from '../src/tag';
import { Tooltip } from '../src/tooltip';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

describe('display components', () => {
  it('Badge caps large numbers', () => {
    render(<Badge max={99}>{150}</Badge>);
    expect(screen.getByText('99+')).toBeTruthy();
  });

  it('Tag can be removed', () => {
    const after = vi.fn();
    render(<Tag text="design" isRemovable onAfterRemoveAction={after} />);
    fireEvent.click(screen.getByRole('button', { name: 'Remove design' }));
    expect(after).toHaveBeenCalledWith('design');
    expect(screen.queryByText('design')).toBeNull();
  });

  it('Avatar falls back to initials and is named', () => {
    render(<Avatar name="Ada Lovelace" />);
    expect(screen.getByRole('img', { name: 'Ada Lovelace' }).textContent).toBe('AL');
    expect(initialsOf('prince')).toBe('P');
  });

  it('AvatarGroup shows an overflow button', () => {
    render(<AvatarGroup maxCount={3} data={['A B', 'C D', 'E F', 'G H', 'I J'].map((name) => ({ name }))} />);
    expect(screen.getByRole('button', { name: '3 more people' })).toBeTruthy();
  });

  it('ProgressBar reports its value', () => {
    render(<ProgressBar value={0.4} ariaLabel="Upload" />);
    expect(screen.getByRole('progressbar', { name: 'Upload' }).getAttribute('aria-valuenow')).toBe('40');
  });

  it('Tooltip shows on focus, describes the trigger, and hides on Escape', async () => {
    render(
      <Tooltip content="Edit page">
        <button type="button" aria-label="Edit">E</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole('button', { name: 'Edit' });
    await act(async () => {
      fireEvent.focus(trigger);
      await new Promise((r) => setTimeout(r, 10));
    });
    const tip = screen.getByRole('tooltip');
    expect(tip.textContent).toBe('Edit page');
    expect(trigger.getAttribute('aria-describedby')).toBe(tip.id);
    await act(async () => fireEvent.keyDown(window, { key: 'Escape' }));
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('has no axe violations', async () => {
    const { container } = render(
      <div>
        <Badge appearance="added">3</Badge>
        <TagGroup label="Labels">
          <Tag text="design" color="purple" />
          <Tag text="docs" href="#docs" />
        </TagGroup>
        <Avatar name="Sam Ito" presence="online" />
        <Link href="#guide">Read the setup guide</Link>
        <Skeleton width={120} height={12} />
        <ProgressBar value={0.5} ariaLabel="Import" />
        <EmptyState header="No projects yet" description="Create a project to start tracking work." />
      </div>,
    );
    await noViolations(container);
  });
});
