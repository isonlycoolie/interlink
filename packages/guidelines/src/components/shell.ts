// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines } from '../define';
import { rule } from './button';

export const pageHeader = defineGuidelines([
  rule('page-header', 'page-header', 'one-per-page', 'Best practices', 'must', 'Use one page header per page.',
    { do: 'Put one page header at the top, and use plain headings for the sections under it.', dont: 'Stack page headers to split a page into sections.' },
    'The page header says what the whole page is; a second one makes people wonder which page they are on, and gives screen readers two top-level headings.', [2, 3]),
  rule('page-header', 'page-header', 'full-pages-only', 'Best practices', 'must', 'Use page headers only at the top of full pages.',
    { do: 'Start every full page with a page header.', dont: 'Put a page header in a dialog, drawer or popup; they have their own headers.' },
    'Small containers already have a header that fits their size; a page header there is out of scale and claims a page that does not exist.', [4, 5]),
]);

export const panel = defineGuidelines([
  rule('panel', 'panel', 'name-after-task', 'Name the header after the task', 'should', 'Title the panel with the task, and put the object in the subtitle.',
    { do: 'Title it with the action, such as "Add fields", and name the object underneath.', dont: 'Swap them, so the object reads as the title and the action hides below.' },
    'People open a panel to do something; leading with the task tells them at a glance that they are in the right place.', [4, 5]),
  rule('panel', 'panel', 'four-icons', 'Keep the header to four icons', 'should', 'Show at most four icons in the panel header, close included.',
    { do: 'Keep only the actions people use most, such as previous, next, more and close.', dont: 'Line up six or more icons; move the rest into a more menu or the panel body.' },
    'Icons without labels are hard to tell apart; past four, people scan instead of recognising, and the title loses its room.', [6, 7]),
  rule('panel', 'panel', 'dialogs-over-page', 'Show dialogs over the whole page', 'must', 'Open modal dialogs over the whole page, not inside the panel.',
    { do: 'Dim the page and the panel, and centre the dialog on the page.', dont: 'Dim only the panel and open the dialog inside it.' },
    'A dialog blocks everything until it is answered; dimming only the panel suggests the rest of the page still works when it does not.', [10, 11]),
]);
