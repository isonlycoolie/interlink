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

/** Every radius token as a card: a sample box drawn with it, then the token, its size and what it is for. */
export function RadiusScale() {
  const order = Object.keys(RADIUS_USE);
  const list = allTokens.filter((t) => t.name.startsWith('radius.')).sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
  return (
    <div className="spec-borders">
      {list.map((t) => (
        <section key={t.name} className="spec-border-card" aria-label={t.name}>
          <div className="spec-border-stage">
            <span className="spec-radius-sample" style={{ borderRadius: `var(${t.cssVar})` }} />
          </div>
          <div className="spec-border-body">
            <dl>
              <dt>Token</dt>
              <dd><code>{t.name}</code><span>{remToPx(valueOf(t.name))}</span></dd>
            </dl>
            <p>{RADIUS_USE[t.name] ?? ''}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

/** Each border pairing as a card: a preview, then its width and colour tokens and what it is for. */
export function BorderSpecimen() {
  const rows = [
    { width: 'border.width', color: 'color.border', label: 'Default', use: 'Inputs, dividers and outlined containers.' },
    { width: 'border.width.selected', color: 'color.border.selected', label: 'Selected', use: 'The chosen item in a group, always with a selected background.' },
    { width: 'border.width.focused', color: 'color.border.focused', label: 'Focused', use: 'The keyboard focus ring, drawn outside the element.' },
  ];
  return (
    <div className="spec-borders">
      {rows.map((r) => {
        const w = allTokens.find((t) => t.name === r.width)!;
        const c = allTokens.find((t) => t.name === r.color)!;
        return (
          <section key={r.label} className="spec-border-card" aria-label={`${r.label} border`}>
            <div className="spec-border-stage">
              <span className="spec-border-box" data-kind={r.label} style={{ borderWidth: `var(${w.cssVar})`, borderColor: `var(${c.cssVar})` }}>
                {r.label}
              </span>
            </div>
            <div className="spec-border-body">
              <h3>{r.label}</h3>
              <dl>
                <dt>Width</dt>
                <dd><code>{r.width}</code><span>{remToPx(valueOf(r.width))}</span></dd>
                <dt>Colour</dt>
                <dd><code>{r.color}</code><span className="spec-border-swatch" style={{ background: `var(${c.cssVar})` }} aria-hidden="true" /></dd>
              </dl>
              <p>{r.use}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
