// SPDX-License-Identifier: Apache-2.0
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Calendar } from '../src/calendar';
import { DateLabel } from '../src/date-label';
import { DatePicker, DateTimePicker, parseDate, parseTime, TimePicker } from '../src/datetime-picker';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

describe('Calendar', () => {
  it('moves by day, week and month with the keyboard and selects with Enter', async () => {
    const onSelect = vi.fn();
    const { container } = render(<Calendar defaultFocused="2026-05-28" today="2026-05-28" onSelect={onSelect} />);
    expect(screen.getByRole('heading').textContent).toBe('May 2026');
    const day = screen.getByRole('button', { name: /May 28, 2026/ });
    day.focus();
    fireEvent.keyDown(day, { key: 'ArrowRight' });
    expect(document.activeElement?.getAttribute('data-iso')).toBe('2026-05-29');
    fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' });
    expect(document.activeElement?.getAttribute('data-iso')).toBe('2026-06-05');
    expect(screen.getByRole('heading').textContent).toBe('June 2026');
    fireEvent.keyDown(document.activeElement!, { key: 'PageUp' });
    expect(document.activeElement?.getAttribute('data-iso')).toBe('2026-05-05');
    fireEvent.keyDown(document.activeElement!, { key: 'Enter' });
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ iso: '2026-05-05' }));
    await noViolations(container);
  });
  it('does not select disabled dates', () => {
    const onSelect = vi.fn();
    render(<Calendar defaultFocused="2026-05-10" minDate="2026-05-11" onSelect={onSelect} />);
    fireEvent.click(screen.getByRole('button', { name: /May 10, 2026/ }));
    expect(onSelect).not.toHaveBeenCalled();
  });
});

describe('pickers', () => {
  it('parses dates in the locale order and times in many forms', () => {
    expect(parseDate('5/28/2026', 'en-US')).toBe('2026-05-28');
    expect(parseDate('28/05/2026', 'en-GB')).toBe('2026-05-28');
    expect(parseDate('31/02/2026', 'en-GB')).toBeNull();
    expect(parseTime('9:30 pm')).toBe('21:30');
    expect(parseTime('25:00')).toBeNull();
  });
  it('DatePicker opens a calendar and commits a picked or typed date', () => {
    const onChange = vi.fn();
    render(<DatePicker label="Due date" onChange={onChange} defaultValue="2026-05-28" />);
    const input = screen.getByRole('combobox', { name: 'Due date' }) as HTMLInputElement;
    expect(input.value).toBe('05/28/2026');
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.click(screen.getByRole('button', { name: /May 29, 2026/ }));
    expect(onChange).toHaveBeenLastCalledWith('2026-05-29');
    fireEvent.change(input, { target: { value: '6/2/2026' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onChange).toHaveBeenLastCalledWith('2026-06-02');
  });
  it('TimePicker offers times and accepts a typed one when editable', () => {
    const onChange = vi.fn();
    render(<TimePicker label="Start" timeIsEditable onChange={onChange} />);
    const input = screen.getByRole('combobox', { name: 'Start' });
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(screen.getAllByRole('option')[0]?.textContent).toBe('9:00 AM');
    fireEvent.change(input, { target: { value: '7:15pm' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onChange).toHaveBeenLastCalledWith('19:15');
  });
  it('DateTimePicker reports a value only when both parts are set', () => {
    const onChange = vi.fn();
    render(<DateTimePicker defaultValue="2026-05-28T09:00" onChange={onChange} />);
    fireEvent.keyDown(screen.getByRole('combobox', { name: 'Time' }), { key: 'ArrowDown' });
    fireEvent.click(screen.getByRole('option', { name: '9:30 AM' }));
    expect(onChange).toHaveBeenLastCalledWith('2026-05-28T09:30');
  });
});

describe('DateLabel', () => {
  it('names the status icon for warning and danger', async () => {
    const { container } = render(
      <div>
        <DateLabel label="28 May 2026" />
        <DateLabel label="29 May" appearance="warning" />
        <DateLabel label="4 July 2025" appearance="danger" />
      </div>,
    );
    expect(screen.getByRole('img', { name: 'Overdue' })).toBeTruthy();
    expect(screen.getByRole('img', { name: 'Due soon' })).toBeTruthy();
    await noViolations(container);
  });
});
