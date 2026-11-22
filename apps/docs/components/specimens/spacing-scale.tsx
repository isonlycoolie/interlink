// SPDX-License-Identifier: Apache-2.0
import { allTokens, remToPx, valueOf } from './tokens-data';

const SCALE = allTokens.filter((t) => /^space\.\d+$/.test(t.name));

/** Every space token with its multiple of the 8px base, its rem and pixel value, and a bar drawn at that size. */
export function SpacingScale() {
  return (
    <div className="doc-table-wrap">
      <table className="doc-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Base multiple</th>
            <th>rem</th>
            <th>px</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {SCALE.map((t) => {
            const rem = valueOf(t.name);
            const px = parseFloat(remToPx(rem));
            return (
              <tr key={t.name}>
                <td>
                  <code>{t.name}</code>
                </td>
                <td>{`${px / 8}x`}</td>
                <td>{rem}</td>
                <td>{remToPx(rem)}</td>
                <td>
                  <span className="spec-space-bar" style={{ width: `var(${t.cssVar})` }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** Three bands of the scale with what each is for. */
export function SpacingBands() {
  const bands = [
    { name: 'Small', range: 'space.0 to space.100', use: 'Inside components: between an icon and its label, or a label and its field.', from: 0, to: 8 },
    { name: 'Medium', range: 'space.150 to space.300', use: 'Between components: fields in a form, cards in a list, sections of a panel.', from: 12, to: 24 },
    { name: 'Large', range: 'space.400 to space.1000', use: 'Between regions of a page: page margins and the space around major sections.', from: 32, to: 80 },
  ];
  return (
    <div className="spec-bands">
      {bands.map((b) => (
        <div key={b.name} className="spec-band">
          <p className="spec-band-title">{`${b.name} · ${b.from}px to ${b.to}px`}</p>
          <p className="spec-band-range">
            <code>{b.range}</code>
          </p>
          <p className="spec-band-use">{b.use}</p>
        </div>
      ))}
    </div>
  );
}
