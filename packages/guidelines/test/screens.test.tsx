// SPDX-License-Identifier: Apache-2.0
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { screens } from '../screens';
import AssistantScreen from '../screens/assistant/screen';
import ProjectBoardScreen from '../screens/project-board/screen';

afterEach(cleanup);

describe('screens', () => {
  it.each(screens.map((s) => [s.slug, s] as const))('%s renders with no axe violations', async (_, { Component }) => {
    const { container } = render(<Component />);
    const r = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } });
    expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html.slice(0, 160)}`)).toEqual([]);
  });
  it('project board opens a card in the side panel and closes it', () => {
    render(<ProjectBoardScreen />);
    fireEvent.click(screen.getByRole('button', { name: /Payouts to Airtel Money wallets/ }));
    expect(screen.getByRole('complementary', { name: 'PAY-112' })).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Next item' }));
    expect(screen.getByRole('complementary', { name: 'PAY-115' })).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Close PAY-115' }));
    expect(screen.queryByRole('complementary')).toBeNull();
  });
  it('assistant answers a suggested prompt after thinking', () => {
    vi.useFakeTimers();
    render(<AssistantScreen />);
    fireEvent.click(screen.getByRole('button', { name: /Plan work/ }));
    expect(screen.getByRole('status').textContent).toContain('Planner is reading');
    act(() => vi.advanceTimersByTime(1500));
    expect(screen.getAllByRole('article')).toHaveLength(2);
    fireEvent.click(screen.getByRole('button', { name: /Close payments sprint 14/ }));
    expect(screen.getByRole('region', { name: 'Close payments sprint 14' })).toBeTruthy();
    vi.useRealTimers();
  });
});
