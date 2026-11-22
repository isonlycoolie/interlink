// SPDX-License-Identifier: Apache-2.0
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Checkbox } from '../src/checkbox';
import { RadioGroup } from '../src/radio';
import { TextArea } from '../src/textarea';
import { TextField } from '../src/textfield';
import { Toggle } from '../src/toggle';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

describe('inputs', () => {
  it('TextField marks invalid and disabled states', () => {
    render(<TextField aria-label="Name" isInvalid isDisabled testId="t" />);
    const input = screen.getByRole('textbox', { name: 'Name' });
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect((input as HTMLInputElement).disabled).toBe(true);
    expect(screen.getByTestId('t-container').hasAttribute('data-invalid')).toBe(true);
  });

  it('TextArea renders a labelled multi-line field', () => {
    render(<TextArea aria-label="Description" minimumRows={4} />);
    expect(screen.getByRole('textbox', { name: 'Description' }).getAttribute('rows')).toBe('4');
  });

  it('Checkbox toggles and supports indeterminate', () => {
    const onChange = vi.fn();
    render(<Checkbox label="Email me" onChange={onChange} isIndeterminate />);
    const box = screen.getByRole('checkbox', { name: 'Email me' }) as HTMLInputElement;
    expect(box.indeterminate).toBe(true);
    fireEvent.click(box);
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('RadioGroup selects exactly one option', () => {
    render(<RadioGroup aria-labelledby="lbl" options={[{ label: 'Admin', value: 'a' }, { label: 'Editor', value: 'e' }]} defaultValue="a" />);
    fireEvent.click(screen.getByRole('radio', { name: 'Editor' }));
    expect((screen.getByRole('radio', { name: 'Editor' }) as HTMLInputElement).checked).toBe(true);
    expect((screen.getByRole('radio', { name: 'Admin' }) as HTMLInputElement).checked).toBe(false);
  });

  it('Toggle is a switch', () => {
    render(<Toggle label="Notifications" />);
    const sw = screen.getByRole('switch', { name: 'Notifications' }) as HTMLInputElement;
    fireEvent.click(sw);
    expect(sw.checked).toBe(true);
  });

  it('inputs have no axe violations', async () => {
    const { container } = render(
      <div>
        <TextField aria-label="Name" />
        <TextArea aria-label="Notes" />
        <Checkbox label="Remember me" />
        <span id="role">Role</span>
        <RadioGroup aria-labelledby="role" options={[{ label: 'Admin', value: 'a' }]} />
        <Toggle label="Dark mode" />
      </div>,
    );
    await noViolations(container);
  });
});
