// SPDX-License-Identifier: Apache-2.0
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { allGuidelines } from '../src/index';

describe('basis export', () => {
  it('writes every rule basis id for coverage reports', () => {
    const basis = allGuidelines.flatMap((g) => g.basis.map((b) => ({ id: g.id, basis: b.slice(b.indexOf(':') + 1) })));
    mkdirSync(join(process.cwd(), 'src/generated'), { recursive: true });
    writeFileSync(join(process.cwd(), 'src/generated/basis.json'), JSON.stringify(basis, null, 1));
    expect(basis.length).toBeGreaterThan(0);
  });
});
