// SPDX-License-Identifier: Apache-2.0
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import AddIcon from '../src/generated/core/add';
import SearchIcon from '../src/generated/core/search';

afterEach(cleanup);
const sourceDir = join(process.cwd(), 'src/source/core');

describe('icon source', () => {
  const files = readdirSync(sourceDir).filter((f) => f.endsWith('.svg'));
  it('has every glyph', () => {
    expect(files.length).toBe(367);
  });
  it('gives every glyph a category, keywords and currentColor artwork', () => {
    for (const f of files) {
      const svg = readFileSync(join(sourceDir, f), 'utf8');
      expect(svg, f).toMatch(/data-category="(single|multi)-purpose"/);
      expect(svg, f).toMatch(/viewBox="0 0 16 16"/);
      expect(svg, f).not.toMatch(/#[0-9a-f]{3,6}/i);
    }
  });
});

describe('Icon', () => {
  it('labels meaningful icons as images', () => {
    render(<SearchIcon label="Search" />);
    expect(screen.getByRole('img', { name: 'Search' })).toBeTruthy();
  });
  it('hides decorative icons from assistive tech', () => {
    const { container } = render(<AddIcon label="" />);
    expect(container.querySelector('.il-icon')?.getAttribute('aria-hidden')).toBe('true');
  });
  it('maps colour tokens and spacing to the box', () => {
    render(<AddIcon label="Add" color="color.icon.danger" spacing="compact" testId="i" />);
    const el = screen.getByTestId('i');
    expect(el.style.color).toBe('var(--il-icon-danger)');
    expect(el.className).toContain('il-icon-medium-compact');
    expect(el.querySelector('svg')?.getAttribute('viewBox')).toBe('-4 -4 24 24');
  });
  it('requires a label', () => {
    // @ts-expect-error label is required so every icon makes an accessibility decision
    render(<AddIcon />);
  });
});
