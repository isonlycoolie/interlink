// SPDX-License-Identifier: Apache-2.0
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Field, Form } from '../src/form';
import { AsyncSelect, CreatableSelect, Select, type SelectValue } from '../src/select';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};
const cities = [
  { label: 'Adelaide', value: 'adelaide' },
  { label: 'Brisbane', value: 'brisbane' },
  { label: 'Canberra', value: 'canberra', isDisabled: true },
  { label: 'Darwin', value: 'darwin' },
];
const box = () => screen.getByRole('combobox');
const activeText = () => document.getElementById(box().getAttribute('aria-activedescendant') ?? '')?.textContent;

describe('Select', () => {
  it('opens with arrows, skips disabled options and selects with Enter', () => {
    const onChange = vi.fn();
    render(<Select aria-label="City" options={cities} onChange={onChange} />);
    fireEvent.keyDown(box(), { key: 'ArrowDown' });
    expect(box().getAttribute('aria-expanded')).toBe('true');
    expect(activeText()).toBe('Adelaide');
    fireEvent.keyDown(box(), { key: 'ArrowDown' });
    fireEvent.keyDown(box(), { key: 'ArrowDown' });
    expect(activeText()).toBe('Darwin');
    fireEvent.keyDown(box(), { key: 'Enter' });
    expect(onChange).toHaveBeenLastCalledWith(cities[3], { action: 'select-option', option: cities[3] });
    expect(box().getAttribute('aria-expanded')).toBe('false');
  });
  it('filters as people type and says when nothing matches', () => {
    render(<Select aria-label="City" options={cities} />);
    fireEvent.change(box(), { target: { value: 'bri' } });
    expect(screen.getAllByRole('option').map((o) => o.textContent)).toEqual(['Brisbane']);
    fireEvent.change(box(), { target: { value: 'zzz' } });
    expect(screen.getByRole('status').textContent).toBe('No options');
  });
  it('adds and removes values in multi select', () => {
    const onChange = vi.fn();
    render(<Select aria-label="Cities" isMulti options={cities} onChange={onChange} />);
    fireEvent.keyDown(box(), { key: 'ArrowDown' });
    fireEvent.keyDown(box(), { key: 'Enter' });
    fireEvent.keyDown(box(), { key: 'Enter' });
    expect(onChange).toHaveBeenLastCalledWith([cities[0], cities[1]], expect.objectContaining({ action: 'select-option' }));
    fireEvent.click(screen.getByRole('button', { name: 'Remove Adelaide' }));
    expect(onChange).toHaveBeenLastCalledWith([cities[1]], expect.objectContaining({ action: 'remove-value' }));
    fireEvent.keyDown(box(), { key: 'Backspace' });
    expect(onChange).toHaveBeenLastCalledWith([], expect.objectContaining({ action: 'pop-value' }));
  });
  it('creates an option that is not in the list', () => {
    const onChange = vi.fn();
    render(<CreatableSelect aria-label="Label" options={cities} onChange={onChange} />);
    fireEvent.change(box(), { target: { value: 'Perth' } });
    fireEvent.click(screen.getByRole('option', { name: 'Create "Perth"' }));
    expect(onChange).toHaveBeenLastCalledWith({ label: 'Perth', value: 'Perth' }, expect.objectContaining({ action: 'create-option' }));
  });
  it('loads options as people type', async () => {
    vi.useFakeTimers();
    const loadOptions = vi.fn(async (q: string) => cities.filter((c) => c.label.toLowerCase().startsWith(q)));
    render(<AsyncSelect aria-label="City" loadOptions={loadOptions} />);
    fireEvent.change(box(), { target: { value: 'd' } });
    await act(async () => void vi.advanceTimersByTime(300));
    expect(loadOptions).toHaveBeenCalledWith('d');
    expect(screen.getAllByRole('option').map((o) => o.textContent)).toEqual(['Darwin']);
    vi.useRealTimers();
  });
  it('works inside Field: label, value and no axe violations', async () => {
    const onSubmit = vi.fn();
    const { container } = render(
      <Form onSubmit={onSubmit}>
        <Field<SelectValue> name="city" label="City" defaultValue={null}>
          {({ fieldProps }) => <Select {...fieldProps} options={cities} />}
        </Field>
      </Form>,
    );
    const input = screen.getByRole('combobox', { name: 'City' });
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(container.querySelector('.il-select-single')?.textContent).toBe('Adelaide');
    await noViolations(container);
  });
});
