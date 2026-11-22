// SPDX-License-Identifier: Apache-2.0
import { describe, expect, it } from 'vitest';
import { media, xcss } from '../src/xcss/xcss';

describe('xcss', () => {
  it('compiles tokens to classes and custom properties', () => {
    const s = xcss({ paddingBlock: 'space.200', backgroundColor: 'color.background.neutral', display: 'flex' });
    expect(s.className).toBe('il-x-padding-block il-x-background-color il-x-display');
    expect(s.style).toEqual({
      '--x-padding-block': 'var(--il-space-200)',
      '--x-background-color': 'var(--il-background-neutral)',
      '--x-display': 'flex',
    });
  });

  it('supports pseudo states and breakpoints', () => {
    const s = xcss({ ':hover': { backgroundColor: 'color.background.neutral.hovered' }, [media.above.md]: { display: 'none' } });
    expect(s.className).toBe('il-x-hover-background-color il-x-md-display');
    expect(s.style['--x-md-display']).toBe('none');
  });

  it('rejects values that are not tokens', () => {
    expect(() => xcss({ color: '#ff0000' as never })).toThrow(/not a design token/);
  });
});
