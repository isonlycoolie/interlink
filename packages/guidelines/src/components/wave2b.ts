// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines, type Guideline } from '../define';
import { rule } from './button';

type T = { do: string; dont: string };
const make = (topic: Guideline['topic'], page: string) => (slug: string, section: string, severity: Guideline['severity'], text: string, texts: T, why: string, n: number) =>
  rule(topic, page, slug, section, severity, text, texts, why, [n, n + 1]);
const dl = make('date-label', 'date-label');
const sp = make('spotlight', 'spotlight');
const tl = make('tile', 'tile');
const ob = make('object', 'object');

export const dateLabel = defineGuidelines([
  dl('dates-only', 'Only use date label to communicate dates and their status', 'must', 'Use date labels only for dates and their status.',
    { do: 'Show a date, and whether it is due soon or overdue.', dont: 'Put other information, such as an error, in a date label.' },
    'People learn that the shape means a date; anything else in it breaks that and hides the real message.', 2),
  dl('dropdown-for-interaction', 'Use date label dropdown trigger when interactivity is required', 'should', 'Use the dropdown trigger when people can change the date.',
    { do: 'Use DateLabelDropdownTrigger to open a picker for the date.', dont: 'Bolt buttons or other controls onto a date label.' },
    'The trigger has the pressed states, chevron and accessibility a control needs; a plain label has none.', 4),
  dl('not-inline', "Don't use date labels inline with body text", 'should', 'Keep date labels next to the item they describe, not inside sentences.',
    { do: 'Place a date label in metadata, next to the item it belongs to.', dont: 'Put a date label in the middle of text people wrote.' },
    'Labels inside running text break the line and read as decoration rather than data.', 6),
  dl('semantic-icons', 'Use icons that carry appropriate meaning for semantic states', 'must', 'Keep the status icons of warning and danger dates.',
    { do: 'Use the assigned icon for each appearance, such as the warning icon for overdue.', dont: 'Remove status icons or swap in icons with a different meaning.' },
    'Color alone does not carry the status for everyone; the icon does.', 8),
]);

export const spotlight = defineGuidelines([
  sp('one-step', 'Tour use', 'should', 'Keep spotlights to one short step.',
    { do: 'Use a single step with an active, concise message.', dont: 'Build a multi-step tour unless every step is crucial.' },
    'Each step interrupts people; most stop reading after the first.', 4),
  sp('educate-not-sell', 'Principles of use', 'must', 'Use spotlights to teach, never to sell.',
    { do: 'Introduce something new and show how it helps.', dont: 'Use a spotlight for an upgrade, upsell or other sales message.' },
    'Spotlights borrow attention people did not offer; spending it on sales erodes trust in every later one.', 7),
]);

export const tile = defineGuidelines([
  tl('one-variant', 'Always use the correct variant', 'should', 'Use one tile variant in a list or group.',
    { do: 'Use the same inset variant for every tile in a list.', dont: 'Mix inset and full-bleed tiles in one group.' },
    'Mixed variants make items look different in kind when they are not.', 2),
  tl('match-height', 'Reference height of adjacent content for size', 'should', 'Size tiles to the content next to them.',
    { do: 'Match the tile height to the two lines of text beside it.', dont: 'Use a tile smaller than the text next to it.' },
    'A tile that matches its row anchors it; a small one floats and looks misaligned.', 4),
]);

export const objectGuidelines = defineGuidelines([
  ob('small-sizes', 'Larger than 16px - use an Object tile', 'must', 'Show objects at 12px or 16px; use ObjectTile above that.',
    { do: 'Use an object at 12px or 16px next to item names.', dont: 'Scale an object glyph beyond 16px.' },
    'The glyphs are drawn for small sizes; scaled up they look thin and lose their shape.', 2),
  ob('keep-colors', 'Don’t change object colors', 'must', 'Keep each object in its assigned color.',
    { do: 'Keep the color that comes with each object type.', dont: 'Swap color tokens or use custom fills on objects.' },
    'Color is part of how people recognize the type at a glance.', 4),
]);
