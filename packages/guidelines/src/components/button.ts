// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines, type Guideline } from '../define';

/** Shorthand for component rules: basis items are the reference page's numbered images. */
export function rule(
  topic: Guideline['topic'],
  page: string,
  slug: string,
  section: string,
  severity: Guideline['severity'],
  rule: string,
  texts: { do?: string; dont?: string },
  why: string,
  items: number[],
): Guideline {
  const kind = texts.do && texts.dont ? 'pair' : texts.do ? 'do' : 'dont';
  return {
    id: `${topic}.${slug}`,
    topic,
    section,
    kind,
    severity,
    rule,
    ...texts,
    why,
    basis: items.map((n) => `ref:/components/${page}/usage#${String(n).padStart(2, '0')}`),
  };
}

const b = (slug: string, section: string, severity: Guideline['severity'], text: string, texts: { do?: string; dont?: string }, why: string, items: number[]) =>
  rule('button', 'button', slug, section, severity, text, texts, why, items);

export const button = defineGuidelines([
  b('one-primary', 'Use one primary call to action', 'must', 'Use one primary button per page area.',
    { do: 'Make the most likely next step the only primary button.', dont: 'Put several primary buttons together; they compete and nothing stands out.' },
    'Primary styling works because it is rare. Two primary buttons make people stop and compare.', [2, 3]),
  b('avoid-disabling', 'Avoid disabling buttons', 'should', 'Keep buttons enabled and explain what is missing instead of disabling them.',
    { do: 'Keep the submit button active and show what needs fixing when it is pressed.', dont: 'Disable the submit button; people cannot tell why or what to do next.' },
    'Disabled buttons give no feedback, are hard to read and are skipped by keyboard focus.', [4, 5]),
  b('align-right-focused', 'Alignment and positioning', 'should', 'Right-align buttons in dialogs and focused tasks.',
    { do: 'Right-align actions in dialogs and small focused areas, with the primary action last.' },
    'In a focused task the eye ends at the bottom right; the next step should be waiting there.', [6]),
  b('align-left-full-page', 'Alignment and positioning', 'should', 'Left-align buttons on full-page forms and long content.',
    { do: 'Left-align actions on full pages so they follow the content people just read.' },
    'On wide pages, right-aligned actions are far from the content and easy to miss.', [7]),
  b('sentence-case', 'Use sentence case capitalization', 'must', 'Write button labels in sentence case.',
    { do: 'Capitalise only the first word and proper nouns.', dont: 'Use title case or all caps; they are harder to read and feel loud.' },
    'Sentence case reads like speech and stays consistent across the product.', [8, 9]),
  b('short-labels', 'Keep button labels short', 'should', 'Keep labels to a short verb phrase.',
    { do: 'Use a few words that name the action.', dont: 'Write long labels that repeat what the screen already says.' },
    'Short labels scan quickly and fit every screen size and language.', [10, 11]),
  b('specific-labels', 'Use specific labels wherever possible', 'should', 'Name the action specifically instead of using generic words.',
    { do: 'Use verbs that say exactly what will happen, such as "Delete project".', dont: 'Use vague labels such as "OK" or "Yes" that make people reread the dialog.' },
    'A specific label lets people act without reading everything around it.', [12, 13]),
  b('consistent-labels', 'Make labels consistent with other UI in view', 'should', 'Use the same words for the same action across the screen.',
    { do: 'Repeat the words from the title or menu item in the button.', dont: 'Call one action by different names in the title and the button.' },
    'Different words suggest different actions and make people hesitate.', [14, 15]),
]);
