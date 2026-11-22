// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines, type Guideline } from '../define';
import { rule } from './button';

type T = { do: string; dont: string };
const make = (topic: Guideline['topic'], page: string) => (slug: string, section: string, severity: Guideline['severity'], text: string, texts: T, why: string, n: number) =>
  rule(topic, page, slug, section, severity, text, texts, why, [n, n + 1]);
const md = make('modal-dialog', 'modal-dialog');
const mn = make('menu', 'menu');

export const modalDialog = defineGuidelines([
  md('button-alignment', 'Button alignment', 'should', 'Align modal actions to the right, with the primary action last.',
    { do: 'Place the buttons at the right of the footer, the primary button to the right of the secondary one.', dont: 'Place the buttons on the left or in the middle, or the primary button before the secondary one.' },
    'People finish a task at the bottom right. Any other order slows them down and invites the wrong click.', 2),
  md('focused-task', 'Simple and focused experiences', 'should', 'Keep a modal to one short task or message.',
    { do: 'Use a short title and a body that covers a single task.', dont: 'Put tabs, complex controls or large tables in a modal.' },
    'A modal blocks the page. Long or complex work is easier on a page of its own, without scrolling inside a small window.', 4),
  md('no-nesting', 'Nesting', 'must', 'Show one modal at a time, above a blanket.',
    { do: 'Open a single modal over the blanket that covers the page.', dont: 'Open a modal from inside another modal.' },
    'Stacked modals make it hard to know which task you are in and where focus will go when one closes.', 6),
]);

export const menu = defineGuidelines([
  mn('button-items', 'Best practices', 'should', 'Use button items for actions.',
    { do: 'Use button items when choosing performs an action, such as Create.', dont: 'Use button items to take people to another place.' },
    'Assistive technology announces buttons and links differently, so the element tells people what will happen.', 4),
  mn('link-items', 'Best practices', 'should', 'Use link items to take people somewhere.',
    { do: 'Use link items to take people to a page or resource.', dont: 'Use link items for actions people need to perform.' },
    'Links can be opened in a new tab and copied; actions cannot. The wrong element breaks both.', 6),
  mn('new-place-icon', 'Best practices', 'should', 'Mark items that take people to a new place.',
    { do: 'Add an icon after items that open a new page or window.', dont: 'Leave people to guess which items act and which navigate.' },
    'An icon sets expectations before the click, so leaving the current context is never a surprise.', 8),
]);
