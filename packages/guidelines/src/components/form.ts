// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines, type Guideline } from '../define';
import { rule } from './button';

const f = (slug: string, section: string, severity: Guideline['severity'], text: string, texts: { do: string; dont: string }, why: string, n: number) =>
  rule('form', 'form', slug, section, severity, text, texts, why, [n, n + 1]);

export const form = defineGuidelines([
  f('helper-text', 'Helper text', 'must', 'Put format and rules in helper text under the field, not in the placeholder.',
    { do: 'Use helper text for information people need while they fill in the field.', dont: 'Put critical information in the placeholder; it disappears as soon as people type.' },
    'Placeholder text vanishes on input and is low contrast, so the rule is gone when people need it.', 2),
  f('group-sections', 'Group related fields', 'should', 'Group related fields into titled sections.',
    { do: 'Split a long form into sections such as Project and Details.', dont: 'List unrelated fields in one undivided block.' },
    'Sections let people understand the shape of the form and find their place.', 4),
  f('one-column', 'Use one column', 'must', 'Lay forms out in a single column.',
    { do: 'Stack fields in one column in the order people answer them.', dont: 'Place fields side by side in several columns.' },
    'One column gives one reading path. Multiple columns cause skipped fields and zig-zag scanning.', 6),
  f('smart-defaults', 'Provide smart defaults', 'should', 'Pre-fill values you can predict for the person.',
    { do: 'Default to the language and time zone the person most likely uses.', dont: 'Pre-fill an arbitrary value people have to notice and correct.' },
    'Good defaults save effort; wrong defaults create errors that look like the person made them.', 8),
  f('input-masks', 'Use the right input', 'should', 'Use the input type that matches the data, such as a password field for passwords.',
    { do: 'Mask passwords and offer a show button.', dont: 'Use a plain text field for sensitive values.' },
    'The right input type protects data and brings up the right keyboard on phones.', 10),
  f('required-legend', 'Mark required fields', 'must', 'Explain the required marker once, at the top of the form.',
    { do: 'Say "Required fields are marked with an asterisk" above the fields.', dont: 'Use asterisks without explaining what they mean.' },
    'An unexplained symbol is a guess; one sentence removes the doubt.', 12),
  f('visible-labels', 'Always use visible labels', 'must', 'Give every field a visible label above it.',
    { do: 'Show a label above each field.', dont: 'Use placeholder text instead of a label.' },
    'Labels stay visible while people type and are read by assistive tech; placeholders do neither.', 14),
  f('describe-field', 'Write clear labels', 'should', 'Label fields with a noun that names the information.',
    { do: 'Name the information, such as "Description".', dont: 'Write the label as an instruction, such as "Add a description".' },
    'Nouns scan faster and read naturally to screen reader users moving between fields.', 16),
  f('binary-actions', 'Keep actions clear', 'should', 'Give a form one submit action and one cancel action.',
    { do: 'Offer a clear choice: the action and cancel.', dont: 'Add extra actions to the footer that compete with submit.' },
    'More than two choices at the end of a form makes people stop and think.', 18),
  f('submit-feedback', 'Show progress on submit', 'must', 'Show that the form is submitting.',
    { do: 'Show a loading state on the submit button while the form saves.', dont: 'Leave the button unchanged, so people wonder whether it worked.' },
    'Without feedback, people submit twice or leave before the save finishes.', 20),
  f('matching-action', 'Match the action', 'should', 'Use the same verb in the form title and the submit button.',
    { do: 'Title the form "Log in" and label the button "Log in".', dont: 'Use a different verb such as "Submit" for the button.' },
    'Matching words confirm that the button finishes the task the title promised.', 22),
]);
