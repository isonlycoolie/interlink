// SPDX-License-Identifier: Apache-2.0
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it } from 'vitest';
import { screens } from '../screens';
import GoalsScreen from '../screens/goals/screen';
import HomeScreen from '../screens/home/screen';
import VideoScreen from '../screens/video/screen';

afterEach(cleanup);

describe('screens', () => {
  it.each(screens.map((s) => [s.slug, s] as const))('%s renders with no axe violations', async (_, { Component }) => {
    const { container } = render(<Component />);
    const r = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } });
    expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html.slice(0, 160)}`)).toEqual([]);
  });
  it('home switches the work view with the segmented control', () => {
    render(<HomeScreen />);
    const starred = screen.getByRole('radio', { name: 'Starred' });
    fireEvent.click(starred);
    expect(starred.getAttribute('aria-checked')).toBe('true');
    fireEvent.keyDown(starred, { key: 'ArrowRight' });
    expect(screen.getByRole('radio', { name: 'Viewed' }).getAttribute('aria-checked')).toBe('true');
  });
  it('goals toggles following on a row', () => {
    render(<GoalsScreen />);
    const first = screen.getAllByRole('button', { name: 'Follow' })[0];
    if (!first) throw new Error('no follow button');
    fireEvent.click(first);
    expect(first.textContent).toBe('Following');
  });
  it('video selects every clip from select all', () => {
    render(<VideoScreen />);
    fireEvent.click(screen.getByRole('checkbox', { name: 'Select all videos' }));
    expect(screen.getByRole('checkbox', { name: '6 selected' })).toBeTruthy();
  });
});
