// SPDX-License-Identifier: Apache-2.0
import { cleanup, render } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it } from 'vitest';
import { screens } from '../screens';

afterEach(cleanup);

describe('screens', () => {
  it.each(screens.map((s) => [s.slug, s] as const))('%s renders with no axe violations', async (_, { Component }) => {
    const { container } = render(<Component />);
    const r = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } });
    expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html.slice(0, 160)}`)).toEqual([]);
  });
});
