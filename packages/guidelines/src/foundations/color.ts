// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines } from '../define';

export const color = defineGuidelines([
  {
    id: 'color.semantic-roles',
    topic: 'color',
    section: 'Color roles',
    kind: 'pair',
    severity: 'must',
    rule: 'Pick color by role: semantic tokens when the color means something, accent tokens when it only decorates.',
    do: 'Use the role that matches the message, such as discovery for something new to try.',
    dont: 'Use an accent token where the color carries meaning, even when the two look alike.',
    why: 'Semantic tokens can change together across themes and future palettes; accents that only look right today drift apart.',
    basis: ['ref:/foundations/color#09', 'ref:/foundations/color#10'],
  },
]);

export const accents = defineGuidelines([
  {
    id: 'accents.decorative-only',
    topic: 'accents',
    section: 'Applying accent colors',
    kind: 'pair',
    severity: 'must',
    rule: 'Use accent tokens only where the color has no meaning and could change without losing anything.',
    do: 'Give decorative elements, such as avatar badges, an accent color.',
    dont: 'Borrow a semantic color such as information for decoration; people will look for a meaning.',
    why: 'Semantic colors promise status. Spending them on decoration weakens every real status on the screen.',
    basis: ['ref:/foundations/color/accents#03', 'ref:/foundations/color/accents#04'],
  },
  {
    id: 'accents.avoid-yellow',
    topic: 'accents',
    section: 'Avoid yellow',
    kind: 'pair',
    severity: 'should',
    rule: 'Prefer orange over yellow for small accent foreground elements.',
    do: 'Use orange for small accent icons and marks.',
    dont: 'Use yellow for small foreground elements; to stay readable it darkens toward brown.',
    why: 'Yellow only reaches accessible contrast on light surfaces at dark, muddy values.',
    basis: ['ref:/foundations/color/accents#10', 'ref:/foundations/color/accents#11'],
  },
  {
    id: 'accents.match-hues',
    topic: 'accents',
    section: 'Avoid mixing different accent colors',
    kind: 'pair',
    severity: 'must',
    rule: 'Pair an accent background with text, icons and borders from the same hue.',
    do: 'Match the foreground hue to the background hue.',
    dont: 'Mix hues between background and foreground; contrast is no longer guaranteed.',
    why: 'Each hue is tuned so its foreground meets contrast on its own backgrounds, not on other hues.',
    basis: ['ref:/foundations/color/accents#13', 'ref:/foundations/color/accents#14'],
  },
]);
