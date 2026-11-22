// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines } from '../define';
import { rule } from './button';

export const select = defineGuidelines([
  rule('select', 'select', 'label-not-placeholder', 'Use labels instead of placeholders', 'must', 'Give every select a visible label, with helper text for anything extra.',
    { do: 'Use a field label and helper text so everyone knows what to choose.', dont: 'Use placeholder text instead of a label; it is hard to read and disappears once a value is chosen.' },
    'Placeholders have low contrast and vanish on selection, leaving the field without a name.', [3, 4]),
]);
