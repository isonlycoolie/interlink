// SPDX-License-Identifier: Apache-2.0
import palette from '@interlink/tokens/palette.json';
import { allTokens } from './tokens-data';

type Ramps = Record<string, Record<string, string | number>>;
const ramps = palette as Ramps;
const v = (name: string) => `var(${allTokens.find((t) => t.name === name)?.cssVar ?? '--il-text'})`;

/** Palette ramps (raw values, never used directly in UI). */
export function PaletteRamps({ ramps: names }: { ramps: string }) {
  return (
    <div className="spec-ramps">
      {names.split(',').map((ramp) => (
        <div key={ramp} className="spec-ramp">
          <p className="spec-ramp-name">{ramp === 'Brand' ? 'Brand (Interlink blue-violet)' : ramp}</p>
          <div className="spec-ramp-row">
            {Object.entries(ramps[ramp] ?? {}).map(([step, hex]) => (
              <div key={step} className="spec-chip" title={`${step} ${hex}`}>
                <span className="spec-chip-swatch" style={{ background: String(hex) }} />
                <span className="spec-chip-label">{step.replace(/^[A-Za-z]+/, '')}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const ROLES = [
  ['brand', 'The product identity and primary actions.'],
  ['neutral', 'Most UI: secondary actions, containers, text.'],
  ['selected', 'Things the person has chosen or opened.'],
  ['information', 'Neutral information and in-progress states.'],
  ['success', 'Completed, approved or healthy.'],
  ['warning', 'Needs attention soon; proceed with care.'],
  ['danger', 'Errors, failures and destructive actions.'],
  ['discovery', 'New features or something to try.'],
] as const;

/** Each color role with its subtle and bold backgrounds and its text color. */
export function ColorRoles() {
  return (
    <div className="spec-roles">
      {ROLES.map(([role, use]) => (
        <div key={role} className="spec-role">
          <span className="spec-role-swatch" style={{ background: v(`color.background.${role}${role === 'neutral' ? '' : ''}`) }} />
          <span className="spec-role-swatch" style={{ background: v(`color.background.${role}.bold`) }} />
          <div>
            <p className="spec-role-name" style={{ color: v(role === 'neutral' ? 'color.text' : `color.text.${role}`) }}>{role}</p>
            <p className="spec-role-use">{use}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
