// SPDX-License-Identifier: Apache-2.0
import { cleanup, render } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it } from 'vitest';
import { examples, sources } from '../src/generated/registry';
import { allGuidelines } from '../src/index';

afterEach(cleanup);

describe('guideline data', () => {
  it('has unique ids and unique basis items', () => {
    const ids = allGuidelines.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
    const basis = allGuidelines.flatMap((g) => g.basis);
    expect(new Set(basis).size).toBe(basis.length);
  });

  for (const g of allGuidelines) {
    it(`${g.id} has the examples its kind needs`, () => {
      const ex = examples[g.id];
      if (g.kind !== 'dont') expect(ex?.do, `${g.id} do`).toBeTruthy();
      if (g.kind !== 'do') expect(ex?.dont, `${g.id} dont`).toBeTruthy();
      expect(g.rule.length).toBeGreaterThan(10);
    });
  }

  it('marks every dont example with its guideline id', () => {
    for (const [id, s] of Object.entries(sources)) if (s.dont) expect(s.dont.startsWith(`// @interlink-dont ${id}`), id).toBe(true);
  });

  it('keeps good examples on tokens: no raw colours or pixel sizes', () => {
    for (const [id, s] of Object.entries(sources)) if (s.do) expect(s.do, id).not.toMatch(/#[0-9a-f]{3,8}\b|\d+px/i);
  });
});

describe('examples render accessibly', () => {
  for (const [id, ex] of Object.entries(examples)) {
    for (const kind of ['do', 'dont'] as const) {
      const Component = ex[kind];
      if (!Component) continue;
      it(`${id} ${kind}`, async () => {
        const { container } = render(<Component />);
        const r = await axe.run(container, { rules: { 'color-contrast': { enabled: false }, region: { enabled: false } } });
        expect(r.violations.map((v) => v.id)).toEqual([]);
      });
    }
  }
});
