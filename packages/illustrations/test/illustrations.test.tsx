// SPDX-License-Identifier: Apache-2.0
import fs from 'node:fs';
import path from 'node:path';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { artDir, checkSvg } from '../scripts/check-illustrations.mjs';
import { catalog, groups } from '../src/catalog';
import { illustrations } from '../src/generated/all';

afterEach(cleanup);
const files = fs.readdirSync(artDir).filter((f) => f.endsWith('.svg')).map((f) => f.slice(0, -4)).sort();

describe('illustration artwork', () => {
  it.each(files)('%s stays in the palette, inside the safe margin and balanced', (slug) => {
    expect(checkSvg(fs.readFileSync(path.join(artDir, `${slug}.svg`), 'utf8')).problems).toEqual([]);
  });
  it('every piece has a planned meaning in the catalog, and nothing is listed twice', () => {
    expect(catalog.map((c) => c.slug).sort()).toEqual(files);
    expect(new Set(catalog.map((c) => c.slug)).size).toBe(catalog.length);
  });
  it('every group has enough pieces to choose from, and every piece can be found by keyword', () => {
    for (const g of groups) expect(catalog.filter((c) => c.group === g).length, g).toBeGreaterThanOrEqual(8);
    for (const c of catalog) expect(c.keywords.length, c.slug).toBeGreaterThan(0);
  });
  it('hero pieces are 2:1 and spot pieces are square', () => {
    for (const c of catalog) {
      const svg = fs.readFileSync(path.join(artDir, `${c.slug}.svg`), 'utf8');
      expect(svg).toContain(c.hero ? 'viewBox="0 0 192 96"' : 'viewBox="0 0 96 96"');
    }
  });
});

describe('Illustration components', () => {
  it('are named images with a label and hidden without one', () => {
    const EmptySearch = illustrations['empty-search']!;
    const { container } = render(
      <>
        <EmptySearch label="No results" />
        <EmptySearch />
      </>,
    );
    expect(screen.getByRole('img', { name: 'No results' })).toBeTruthy();
    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(1);
  });
  it('take sizes and colour overrides as CSS variables', () => {
    const GetStarted = illustrations['get-started']!;
    render(<GetStarted label="Get started" size={100} colors={{ primary: 'rgb(1, 2, 3)' }} />);
    const el = screen.getByRole('img', { name: 'Get started' }) as HTMLElement;
    expect(el.style.height).toBe('100px');
    expect(el.style.width).toBe('200px');
    expect(el.style.getPropertyValue('--il-illo-primary')).toBe('rgb(1, 2, 3)');
    expect(el.innerHTML).toContain('var(--il-illo-primary)');
  });
});
