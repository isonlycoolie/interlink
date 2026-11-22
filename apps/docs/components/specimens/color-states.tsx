// SPDX-License-Identifier: Apache-2.0
import { Box, Stack, Text } from '@interlink/react/primitives';
import { allTokens } from './tokens-data';

const v = (name: string) => `var(${allTokens.find((t) => t.name === name)?.cssVar ?? '--il-text'})`;

/** Emphasis from subtlest to boldest for one role, with readable text on each. */
export function EmphasisLadder({ role = 'brand' }: { role?: string }) {
  const steps = allTokens.filter((t) => new RegExp(`^color\\.background\\.${role}(\\.(subtlest|subtler|subtle|bold|boldest))?$`).test(t.name));
  return (
    <div className="spec-ladder">
      {steps.map((t) => (
        <Box key={t.name} backgroundColor={t.name as never} padding="space.200">
          <Text size="small" weight="medium">{t.name.replace('color.background.', '')}</Text>
        </Box>
      ))}
    </div>
  );
}

/** Text placed on bold backgrounds switches to inverse automatically. */
export function InverseOnBold() {
  const bolds = ['brand', 'neutral', 'danger', 'warning', 'success', 'discovery', 'information'];
  return (
    <div className="spec-ladder">
      {bolds.map((r) => (
        <Box key={r} backgroundColor={`color.background.${r}.bold` as never} padding="space.200">
          <Stack space="space.050">
            <Text weight="bold">{r}</Text>
            <Text size="small">Readable by default</Text>
          </Stack>
        </Box>
      ))}
    </div>
  );
}

/** Default, hovered and pressed values for interactive backgrounds. */
export function InteractionStates() {
  const fams = ['color.background.neutral.subtle', 'color.background.neutral', 'color.background.brand.bold', 'color.background.selected'];
  return (
    <div className="doc-table-wrap">
      <table className="doc-table">
        <thead>
          <tr><th>Token</th><th>Default</th><th>Hovered</th><th>Pressed</th></tr>
        </thead>
        <tbody>
          {fams.map((f) => (
            <tr key={f}>
              <td><code>{f}</code></td>
              {['', '.hovered', '.pressed'].map((s) => (
                <td key={s}><span className="spec-state" style={{ background: v(f + s) }} /></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Every accent hue at each background emphasis, with its matching text. */
export function AccentGrid() {
  const hues = ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple', 'magenta', 'gray'];
  const levels = ['subtlest', 'subtler', 'subtle', 'bolder'];
  return (
    <div className="spec-accents">
      {hues.map((h) => (
        <div key={h} className="spec-accent-row">
          <span className="spec-accent-name">{h}</span>
          {levels.map((l) => (
            <Box key={l} backgroundColor={`color.background.accent.${h}.${l}` as never} padding="space.100">
              <Text size="small" color={(l === 'bolder' ? 'color.text.inverse' : `color.text.accent.${h}.bolder`) as never}>{l}</Text>
            </Box>
          ))}
        </div>
      ))}
    </div>
  );
}
