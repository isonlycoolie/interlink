// SPDX-License-Identifier: Apache-2.0
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button } from '../src/button';
import { ErrorMessage, Field, Form, FormFooter, HelperMessage } from '../src/form';
import { TextField } from '../src/textfield';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

function Signup({ onSubmit }: { onSubmit: (v: Record<string, unknown>) => void }) {
  return (
    <Form onSubmit={onSubmit}>
      {({ formProps }) => (
        <form {...formProps}>
          <Field name="email" label="Email" isRequired>
            {({ fieldProps, error }) => (
              <>
                <TextField {...fieldProps} />
                <HelperMessage>We only use it for sign-in.</HelperMessage>
                {error ? <ErrorMessage>{error}</ErrorMessage> : null}
              </>
            )}
          </Field>
          <FormFooter>
            <Button type="submit" appearance="primary">Sign up</Button>
          </FormFooter>
        </form>
      )}
    </Form>
  );
}

describe('Form', () => {
  it('blocks submit and shows the error in place, linked to the field', async () => {
    const onSubmit = vi.fn();
    render(<Signup onSubmit={onSubmit} />);
    await act(async () => fireEvent.click(screen.getByRole('button', { name: 'Sign up' })));
    expect(onSubmit).not.toHaveBeenCalled();
    const input = screen.getByRole('textbox', { name: /Email/ });
    expect(input.getAttribute('aria-invalid')).toBe('true');
    const described = input.getAttribute('aria-describedby') ?? '';
    expect(described.split(' ').map((id) => document.getElementById(id)?.textContent).join(' ')).toContain('This field is required.');
  });

  it('submits values once the field is valid', async () => {
    const onSubmit = vi.fn();
    render(<Signup onSubmit={onSubmit} />);
    fireEvent.change(screen.getByRole('textbox', { name: /Email/ }), { target: { value: 'ada@example.com' } });
    await act(async () => fireEvent.click(screen.getByRole('button', { name: 'Sign up' })));
    expect(onSubmit).toHaveBeenCalledWith({ email: 'ada@example.com' });
  });

  it('has no axe violations', async () => {
    const { container } = render(<Signup onSubmit={() => {}} />);
    await noViolations(container);
  });
});
