// SPDX-License-Identifier: Apache-2.0
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Avatar } from '../src/avatar';
import { Comment, CommentAction, CommentAuthor, CommentTime } from '../src/comment';
import { Image } from '../src/image';
import { ObjectIcon, ObjectTile } from '../src/object';
import { ProgressIndicator } from '../src/progress-indicator';
import { ProgressTracker } from '../src/progress-tracker';
import { Range } from '../src/range';
import { Tile } from '../src/tile';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

describe('display components', () => {
  it('Tile, ObjectIcon, ObjectTile and Image are named images', async () => {
    const { container } = render(
      <div>
        <Tile label="Rocket" size="large">🚀</Tile>
        <ObjectIcon type="bug" />
        <ObjectTile type="page" size="large" isBold />
        <Image src="/light.png" srcDark="/dark.png" alt="Team board" />
      </div>,
    );
    expect(screen.getByRole('img', { name: 'Rocket' })).toBeTruthy();
    expect(screen.getByRole('img', { name: 'Bug' })).toBeTruthy();
    expect(screen.getByRole('img', { name: 'Page' })).toBeTruthy();
    expect(screen.getAllByAltText('Team board')).toHaveLength(2);
    await noViolations(container);
  });
  it('Range reports numbers', () => {
    const onChange = vi.fn();
    render(<Range aria-label="Volume" defaultValue={20} onChange={onChange} />);
    fireEvent.change(screen.getByRole('slider', { name: 'Volume' }), { target: { value: '40' } });
    expect(onChange).toHaveBeenCalledWith(40);
  });
  it('ProgressIndicator is a tab list when interactive', async () => {
    const onSelect = vi.fn();
    const { container } = render(<ProgressIndicator values={[1, 2, 3]} selectedIndex={0} onSelect={onSelect} />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true');
    fireEvent.keyDown(tabs[0]!, { key: 'ArrowRight' });
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ index: 1 }));
    await noViolations(container);
  });
  it('ProgressTracker marks the current step and links visited ones', async () => {
    const { container } = render(
      <ProgressTracker
        items={[
          { id: 'a', label: 'Details', percentageComplete: 100, status: 'visited', href: '#details' },
          { id: 'b', label: 'Team', percentageComplete: 0, status: 'current' },
          { id: 'c', label: 'Review', percentageComplete: 0, status: 'unvisited' },
        ]}
      />,
    );
    expect(screen.getByRole('link', { name: 'Details' })).toBeTruthy();
    expect(screen.getByText('Team').closest('li')?.getAttribute('aria-current')).toBe('step');
    await noViolations(container);
  });
  it('Comment renders author, time, content, actions and replies', async () => {
    const { container } = render(
      <Comment
        avatar={<Avatar name="Nia Park" label="" />}
        author={<CommentAuthor>Nia Park</CommentAuthor>}
        time={<CommentTime>2 hours ago</CommentTime>}
        content={<p>Looks good to me.</p>}
        actions={[<CommentAction key="r">Reply</CommentAction>]}
      >
        <Comment avatar={<Avatar name="Kai Moto" label="" />} author={<CommentAuthor>Kai Moto</CommentAuthor>} content={<p>Thanks!</p>} />
      </Comment>,
    );
    expect(screen.getByRole('heading', { name: /Nia Park/ })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Reply' })).toBeTruthy();
    expect(screen.getByText('Thanks!')).toBeTruthy();
    await noViolations(container);
  });
});
