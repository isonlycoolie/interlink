// SPDX-License-Identifier: Apache-2.0
import { allTokens, remToPx, valueOf } from './tokens-data';

const RADIUS_USE: Record<string, string> = {
  'radius.xsmall': 'Small markers such as badges and checkbox ticks.',
  'radius.small': 'Compact controls, lozenges, tags, tooltips.',
  'radius.medium': 'Buttons, inputs and most interactive controls.',
  'radius.large': 'Cards, panels and section messages.',
  'radius.xlarge': 'Modal dialogs and large containers.',
  'radius.xxlarge': 'Hero areas and marketing surfaces.',
  'radius.full': 'Avatars, pills and circular buttons.',
  'radius.tile': 'Square tiles such as app and object icons.',
};

/** Every radius token on a sample box, with its value and typical use. */
export function RadiusScale() {
  const list = allTokens.filter((t) => t.name.startsWith('radius.'));
  return (
    <div className="spec-radius">
      {list.map((t) => (
        <div key={t.name} className="spec-radius-item">
          <span className="spec-radius-box" style={{ borderRadius: `var(${t.cssVar})` }} />
          <p className="spec-radius-name"><code>{t.name}</code></p>
          <p className="spec-radius-value">{remToPx(valueOf(t.name))}</p>
          <p className="spec-radius-use">{RADIUS_USE[t.name] ?? ''}</p>
        </div>
      ))}
    </div>
  );
}

/** Border widths and the colors they pair with. */
export function BorderSpecimen() {
  const rows = [
    { width: 'border.width', color: 'color.border', label: 'Default', use: 'Inputs, dividers and outlined containers.' },
    { width: 'border.width.selected', color: 'color.border.selected', label: 'Selected', use: 'The chosen item in a group, with a selected background.' },
    { width: 'border.width.focused', color: 'color.border.focused', label: 'Focused', use: 'Keyboard focus ring, drawn outside the element.' },
  ];
  return (
    <div className="spec-borders">
      {rows.map((r) => {
        const w = allTokens.find((t) => t.name === r.width)!;
        const c = allTokens.find((t) => t.name === r.color)!;
        return (
          <div key={r.label} className="spec-border-item">
            <span className="spec-border-box" data-kind={r.label} style={{ borderWidth: `var(${w.cssVar})`, borderColor: `var(${c.cssVar})` }}>
              {r.label}
            </span>
            <p><code>{r.width}</code> {remToPx(valueOf(r.width))} + <code>{r.color}</code></p>
            <p className="spec-radius-use">{r.use}</p>
          </div>
        );
      })}
    </div>
  );
}
