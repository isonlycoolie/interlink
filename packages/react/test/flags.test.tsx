// SPDX-License-Identifier: Apache-2.0
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AutoDismissFlag, Flag, FlagGroup } from '../src/flag';

afterEach(cleanup);

describe('Flags', () => {
  it('names the region and lets only the newest flag be dismissed', () => {
    const onDismissed = vi.fn();
    render(
      <FlagGroup onDismissed={onDismissed}>
        <Flag id="b" title="Page saved" />
        <Flag id="a" title="Older" />
      </FlagGroup>,
    );
    expect(screen.getByRole('region', { name: 'Flag notifications' })).toBeTruthy();
    const dismiss = screen.getAllByRole('button', { name: 'Dismiss' });
    expect(dismiss).toHaveLength(1);
    fireEvent.click(dismiss[0] as HTMLElement);
    expect(onDismissed).toHaveBeenCalledWith('b');
  });
  it('auto-dismisses after the delay', () => {
    vi.useFakeTimers();
    const onDismissed = vi.fn();
    render(
      <FlagGroup onDismissed={onDismissed}>
        <AutoDismissFlag id="x" title="Copied" appearance="success" />
      </FlagGroup>,
    );
    act(() => void vi.advanceTimersByTime(8000));
    expect(onDismissed).toHaveBeenCalledWith('x');
    vi.useRealTimers();
  });
});
