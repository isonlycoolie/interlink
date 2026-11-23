// SPDX-License-Identifier: Apache-2.0
import { cleanup, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it } from 'vitest';
import { TourNote } from '../src/tour-note';

afterEach(cleanup);

describe('TourNote', () => {
  it('shows a note beside its control, with no axe violations', async () => {
    const { container } = render(
      <TourNote placement="left" tone="purple" content="Start from a template." testId="note">
        <button type="button">Create</button>
      </TourNote>,
    );
    const note = screen.getByRole('note');
    expect(note.textContent).toBe('Start from a template.');
    expect(note.dataset.tone).toBe('purple');
    expect(container.querySelector('.il-tour')?.getAttribute('data-placement')).toBe('left');
    expect(screen.getByRole('button', { name: 'Create' })).toBeTruthy();
    const r = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } });
    expect(r.violations.map((v) => v.id)).toEqual([]);
  });

  it('keeps the control and drops the note when closed', () => {
    render(
      <TourNote content="Hidden" isOpen={false}>
        <button type="button">Filter</button>
      </TourNote>,
    );
    expect(screen.queryByRole('note')).toBeNull();
    expect(screen.getByRole('button', { name: 'Filter' })).toBeTruthy();
  });
});
