// SPDX-License-Identifier: Apache-2.0
import { allTokens, remToPx, valueOf } from './tokens-data';

const parse = (font: string) => {
  const m = font.match(/^(\w+) (\d+) ([\d.]+r?em)\/([\d.]+r?em|\d+)/);
  return m ? { weight: m[2], size: remToPx(m[3] ?? ''), line: remToPx(m[4] ?? '') } : { weight: '', size: '', line: '' };
};

/** Every text style token rendered in its own style, with size, line height and weight. */
export function TypeScale({ group }: { group: 'heading' | 'body' | 'metric' }) {
  const list = allTokens.filter((t) => (group === 'body' ? /^font\.body/.test(t.name) : t.name.startsWith(`font.${group}.`)));
  return (
    <div className="doc-table-wrap">
      <table className="doc-table spec-type">
        <thead>
          <tr><th>Sample</th><th>Token</th><th>Size / line</th><th>Weight</th></tr>
        </thead>
        <tbody>
          {list.map((t) => {
            const p = parse(valueOf(t.name));
            return (
              <tr key={t.name}>
                <td><span style={{ font: `var(${t.cssVar})` }}>{group === 'metric' ? '1,284' : 'Plan the launch'}</span></td>
                <td><code>{t.name}</code></td>
                <td>{`${p.size} / ${p.line}`}</td>
                <td>{p.weight}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** The four font weights on the same sample. */
export function WeightScale() {
  const list = allTokens.filter((t) => t.name.startsWith('font.weight.'));
  return (
    <div className="spec-weights">
      {list.map((t) => (
        <div key={t.name}>
          <span className="spec-weight-sample" style={{ fontWeight: `var(${t.cssVar})` }}>Aa</span>
          <p><code>{t.name}</code> {valueOf(t.name)}</p>
        </div>
      ))}
    </div>
  );
}

/** The product typefaces: Inter for UI text and JetBrains Mono for code. */
export function FontFamilies() {
  return (
    <div className="spec-fonts">
      <div>
        <p className="spec-font-sample" style={{ fontFamily: 'var(--il-font-family-body)' }}>Inter</p>
        <p><code>font.family.body</code>, <code>font.family.heading</code></p>
        <p className="spec-font-note">Open source (SIL OFL). Tall x-height and clear shapes for dense interfaces.</p>
      </div>
      <div>
        <p className="spec-font-sample" style={{ fontFamily: 'var(--il-font-family-code)' }}>JetBrains Mono</p>
        <p><code>font.family.code</code></p>
        <p className="spec-font-note">Open source (SIL OFL). Distinct 0/O and 1/l/I for code and keys.</p>
      </div>
    </div>
  );
}
