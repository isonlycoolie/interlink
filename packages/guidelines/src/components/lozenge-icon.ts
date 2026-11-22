// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines, type Guideline } from '../define';
import { rule } from './button';

const l = (slug: string, section: string, severity: Guideline['severity'], text: string, texts: { do?: string; dont?: string }, why: string, items: number[]) =>
  rule('lozenge', 'lozenge', slug, section, severity, text, texts, why, items);
const i = (slug: string, section: string, severity: Guideline['severity'], text: string, texts: { do?: string; dont?: string }, why: string, items: number[]) =>
  rule('icon', 'icon', slug, section, severity, text, texts, why, items);

export const lozenge = defineGuidelines([
  l('status-only', 'Use lozenges for status', 'must', 'Use lozenges for status, state and priority, not for descriptive metadata.',
    { do: 'Show workflow status, system state, priority or plan level.', dont: 'Use a lozenge for a category such as a content type; use a tag instead.' },
    'Lozenges promise a state that can change. Static categories belong in tags.', [2, 3]),
  l('icons-sparingly', 'Use icons with intent', 'should', 'Add filled status icons only where they need attention.',
    { do: 'Use icons on a few lozenges to point people at what matters.', dont: 'Put icons on every lozenge in a table; the important ones disappear.' },
    'Icons draw the eye. Used everywhere, they stop meaning anything.', [4, 5]),
  l('semantic-color', 'Choose the right color', 'must', 'Pick the semantic color that matches the meaning of the status.',
    { do: 'Use discovery for new, success for done, warning for at risk.', dont: 'Use an accent color for a status with meaning.' },
    'Semantic colors stay consistent across products; accents promise nothing.', [6, 7]),
  l('matching-metric', 'Pair metrics with their status', 'should', 'Keep a trailing metric in the same color family as its lozenge.',
    { do: 'Use a semantic lozenge with its matching metric to score a goal.', dont: 'Mix an accent lozenge with a differently colored metric.' },
    'One color per lozenge keeps the meaning readable at a glance.', [8, 9]),
  l('dropdown-trigger', 'Make lozenges interactive the standard way', 'must', 'Use the lozenge dropdown trigger when a status can be changed.',
    { do: 'Use LozengeDropdownTrigger to open a menu of statuses.', dont: 'Add custom click behaviour or arrows to a plain lozenge.' },
    'The trigger has the right role, focus ring and keyboard behaviour; a plain lozenge has none.', [10, 11]),
  l('sentence-case', 'Use sentence case', 'must', 'Write lozenge text in sentence case.',
    { do: 'Capitalise only the first word.', dont: 'Use title case or all caps.' },
    'Sentence case matches the rest of the interface and is easier to read.', [12, 13]),
]);

export const icon = defineGuidelines([
  i('clear-metaphors', 'Use clear symbols', 'should', 'Use icons whose meaning is widely understood.',
    { do: 'Pick a familiar symbol, such as a gear for settings.', dont: 'Use an unusual or invented symbol that people must learn.' },
    'Icons save space only when people recognise them instantly.', [1, 2]),
  i('limit-icons', 'Use icons to add clarity', 'should', 'Use icons where they help people find their way, not on every item.',
    { do: 'Use an icon for the menu trigger and keep menu items text only.', dont: 'Add an icon to every action and menu item.' },
    'Too many icons create noise and slow people down.', [3, 4]),
]);
