// SPDX-License-Identifier: Apache-2.0
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Anchor, Box, Heading, Inline, Pressable, Stack, Text } from '../src/primitives';

afterEach(cleanup);

async function expectNoAxeViolations(container: HTMLElement) {
  const result = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } });
  expect(result.violations.map((v) => v.id)).toEqual([]);
}

describe('Box and layout', () => {
  it('renders padding and background through tokens', () => {
    render(<Box testId="box" padding="space.100" backgroundColor="elevation.surface.raised">hi</Box>);
    const el = screen.getByTestId('box');
    expect(el.className).toContain('il-x-padding');
    expect(el.style.getPropertyValue('--il-elevation-surface-current')).toBe('var(--il-surface-raised)');
  });

  it('Stack and Inline map spacing and alignment', () => {
    render(
      <Stack testId="stack" space="space.200" alignInline="start">
        <Inline testId="inline" space="space.100" separator="·">
          <span>a</span>
          <span>b</span>
        </Inline>
      </Stack>,
    );
    expect(screen.getByTestId('stack').style.getPropertyValue('--x-row-gap')).toBe('var(--il-space-200)');
    expect(screen.getByTestId('stack').style.getPropertyValue('--x-align-items')).toBe('flex-start');
    expect(screen.getByTestId('inline').textContent).toBe('a·b');
  });
});

describe('Text and Heading', () => {
  it('uses inverse text on bold backgrounds', () => {
    render(
      <Box backgroundColor="color.background.brand.bold">
        <Text testId="t">Saved</Text>
      </Box>,
    );
    expect(screen.getByTestId('t').style.color).toBe('var(--il-text-inverse)');
  });

  it('nested Text inherits size and colour', () => {
    render(
      <Text size="large">
        Outer <Text testId="inner">inner</Text>
      </Text>,
    );
    expect(screen.getByTestId('inner').style.font).toBe('');
  });

  it('Heading picks the level from the size', () => {
    render(<Heading size="medium">Projects</Heading>);
    expect(screen.getByRole('heading', { level: 3 })).toBeTruthy();
  });
});

describe('interactive primitives', () => {
  it('Pressable is a button that respects isDisabled', () => {
    const onClick = vi.fn();
    render(<Pressable onClick={onClick} isDisabled>Save</Pressable>);
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button.getAttribute('type')).toBe('button');
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('Anchor announces new windows', () => {
    render(<Anchor href="/docs" target="_blank">Docs</Anchor>);
    const link = screen.getByRole('link');
    expect(link.textContent).toBe('Docs (opens new window)');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('has no axe violations', async () => {
    const { container } = render(
      <Stack space="space.100">
        <Heading size="large">Settings</Heading>
        <Text as="p">Manage your workspace.</Text>
        <Pressable>Save</Pressable>
        <Anchor href="/help">Help</Anchor>
      </Stack>,
    );
    await expectNoAxeViolations(container);
  });
});
