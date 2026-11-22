// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines } from '../define';
import { rule } from './button';

type T = { do: string; dont: string };
const tb = (slug: string, section: string, severity: 'must' | 'should', text: string, texts: T, why: string, n: number) =>
  rule('tabs', 'tabs', slug, section, severity, text, texts, why, [n, n + 1]);

export const tabs = defineGuidelines([
  tb('short-list', 'Best practices', 'should', 'Use tabs for a short set of views people use often.',
    { do: 'Use a few tabs for content people come back to regularly.', dont: 'Use a long row of tabs for rarely used content, or where space is tight.' },
    'Tabs hide everything but one view. That only pays off when the set is small and each view is worth a click.', 2),
  tb('shared-above', 'Hierarchy', 'must', 'Put what applies to every tab above the tab line.',
    { do: 'Place the page heading and shared information above the tabs.', dont: 'Place shared information under the tabs, where it reads as part of one tab.' },
    'Everything below the tab line looks like it belongs to the selected tab.', 4),
  tb('same-context', 'Hierarchy', 'must', 'Use tabs to switch views of the same thing.',
    { do: 'Use tabs for views of one project, such as Summary, Board and List.', dont: 'Use tabs to go to other pages or to change state, such as filtering projects.' },
    'People expect tabs to keep them in place. Navigation belongs in links; filters belong in controls.', 6),
  tb('order-by-importance', 'Hierarchy', 'should', 'Order tabs by importance or by how often they are used.',
    { do: 'Put the most important view first.', dont: 'Bury the most important view at the end.' },
    'The first tab is selected by default and read first.', 8),
  tb('logical-groups', 'Grouping', 'should', 'Group content into clearly different views.',
    { do: 'Give each tab content that clearly belongs together.', dont: 'Split content into tabs that overlap or mean the same thing.' },
    'Vague groups make people open every tab to find what they need.', 10),
  tb('independent-content', 'Grouping', 'must', 'Use tabs only for content people do not need side by side.',
    { do: 'Use tabs for independent views people look at one at a time.', dont: 'Use tabs to split data people compare, such as the columns of one table.' },
    'Switching tabs to compare forces people to remember what they saw.', 12),
  tb('short-labels', 'Content guidelines', 'should', 'Write tab labels of one or two words.',
    { do: 'Write short, clear labels.', dont: 'Write long, vague labels that are hard to scan.' },
    'Tabs are scanned at a glance; long labels also push other tabs out of view.', 14),
]);
