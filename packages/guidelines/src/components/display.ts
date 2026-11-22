// SPDX-License-Identifier: Apache-2.0
import { defineGuidelines, type Guideline } from '../define';
import { rule } from './button';

type T = { do: string; dont: string };
const make = (topic: Guideline['topic'], page: string) => (slug: string, section: string, severity: Guideline['severity'], text: string, texts: T, why: string, n: number) =>
  rule(topic, page, slug, section, severity, text, texts, why, [n, n + 1]);
const tt = make('tooltip', 'tooltip');
const tg = make('tag', 'tag');
const bd = make('badge', 'badge');
const lk = make('link', 'link');
const es = make('empty-state', 'empty-state');
const pb = make('progress-bar', 'progress-bar');

export const tooltip = defineGuidelines([
  tt('icon-buttons', 'Label icon buttons', 'must', 'Use tooltips to name icon-only buttons.',
    { do: 'Show the action name when people hover or focus an icon button.', dont: 'Repeat a visible button label in a tooltip.' }, 'Icon-only buttons need words; labelled buttons already have them.', 2),
  tt('non-critical', 'Keep information non-critical', 'must', 'Use tooltips only for useful extras, never for errors or required information.',
    { do: 'Add helpful extras, such as a keyboard shortcut.', dont: 'Put an error or instruction in a tooltip; show it on the page.' }, 'Tooltips are hidden until hover, unreachable on touch and easy to miss.', 4),
  tt('truncation', 'Reveal truncated text', 'should', 'When text must be truncated, show the full text in a tooltip.',
    { do: 'Show the full name when it is cut short.', dont: 'Truncate with no way to read the rest.' }, 'Truncated text without a reveal hides information.', 6),
  tt('interactive-only', 'Attach to interactive elements', 'must', 'Attach tooltips only to elements people can hover and focus.',
    { do: 'Add the tooltip to a button, link or menu item.', dont: 'Attach a tooltip to static content such as a badge.' }, 'Keyboard users cannot reach a tooltip on something that cannot take focus.', 8),
  tt('not-on-disabled', 'Avoid disabled triggers', 'must', 'Never use a tooltip to explain why a control is disabled.',
    { do: 'Keep the action available and explain the problem on the page.', dont: 'Explain a disabled button in a tooltip; disabled buttons cannot be focused.' }, 'Disabled controls are skipped by keyboard focus, so the tooltip never appears for many people.', 10),
  tt('critical-on-screen', 'Show critical information on screen', 'must', 'Show requirements people need to succeed directly on the page.',
    { do: 'Put password rules in helper text under the field.', dont: 'Hide password rules in a tooltip on an icon.' }, 'People should not have to discover rules before they can follow them.', 12),
  tt('short-plain', 'Write short, plain tooltips', 'should', 'Keep tooltip text short and plain, with no links or buttons.',
    { do: 'Use a few words, such as "View insights".', dont: 'Put links, images or actions inside a tooltip.' }, 'Tooltips disappear when the pointer leaves, so nothing inside can be used.', 14),
]);

export const tag = defineGuidelines([
  tg('objects-not-people', 'Use tags for objects', 'should', 'Use tags for keywords on objects, not for people.',
    { do: 'Tag items with keywords such as topics or components.', dont: 'Use tags to list people; use avatars instead.' }, 'People have their own components with photos, presence and profiles.', 2),
  tg('not-status', 'Categorize, not status', 'must', 'Use tags to categorize, and lozenges for status.',
    { do: 'Use tags for categories that help people find and group items.', dont: 'Use tags for workflow status or priority.' }, 'Status changes over time and needs semantic color; tags are stable labels.', 4),
  tg('consistent-name', 'Use consistent terms', 'should', 'Call them tags and use the hashtag icon everywhere.',
    { do: 'Use the word "Tags" and the hashtag icon.', dont: 'Mix terms such as "Labels" or other icons for the same concept.' }, 'One name and one symbol help people recognise tags across the product.', 6),
  tg('not-inline', 'Keep tags out of text', 'should', 'Show tags in their own area, not inside user-written text.',
    { do: 'Group tags in a dedicated Tags area.', dont: 'Insert tags inline in a description or comment.' }, 'Inline tags break reading and look like links or mentions.', 8),
  tg('meaningful-swatch', 'Use color swatches with meaning', 'should', 'Add a color swatch only when the color means something.',
    { do: 'Use a swatch when the color itself is the information.', dont: 'Add swatches to make tags stand out.' }, 'Color without meaning adds noise and suggests a meaning people then look for.', 10),
]);

export const badge = defineGuidelines([
  bd('semantic-color', 'Use the right color', 'must', 'Pick the badge color that matches what the number means.',
    { do: 'Use danger for a decrease and success for an increase.', dont: 'Use a color that contradicts the meaning of the number.' }, 'Color is read before the number; it has to agree with it.', 3),
  bd('bold-sparingly', 'Use bold badges sparingly', 'should', 'Reserve bold badges for counts that need attention.',
    { do: 'Use a bold badge for something that needs action, such as notifications.', dont: 'Use bold badges for routine counts in tables and lists.' }, 'Bold badges compete for attention; on routine data they become noise.', 5),
  bd('with-context', 'Give badges context', 'must', 'Place badges next to the label they count.',
    { do: 'Put the badge beside its label, such as a tab name.', dont: 'Show badges on their own, where people cannot tell what they count.' }, 'A number without a label is meaningless.', 7),
]);

export const link = defineGuidelines([
  lk('default-in-text', 'Links in text', 'must', 'Use the default, underlined appearance for links inside sentences.',
    { do: 'Keep links in running text underlined and colored.', dont: 'Use the subtle appearance inside sentences; the link disappears.' }, 'In text, the underline is the only reliable cue that something is a link.', 2),
  lk('subtle-in-context', 'Subtle links', 'should', 'Use the subtle appearance only where the context makes links obvious.',
    { do: 'Use subtle links in navigation lists with icons.', dont: 'Use default links where a list already reads as navigation.' }, 'Strong styling in navigation lists is noisy; context already does the work.', 4),
  lk('descriptive', 'Write descriptive links', 'must', 'Make link text describe where it goes.',
    { do: 'Link the words that name the destination.', dont: 'Link vague words such as "Learn more" or "Click here".' }, 'Screen reader users often browse a list of links out of context.', 6),
]);

export const emptyState = defineGuidelines([
  es('one-action', 'Include one call to action', 'must', 'Give an empty state one clear action that fills it.',
    { do: 'Offer the single action that creates the missing content.', dont: 'Add several competing calls to action to the page.' }, 'An empty state is the start of a task; one action makes the next step obvious.', 2),
  es('scale-illustration', 'Size illustrations to the space', 'should', 'Scale illustrations down in small areas, or leave them out.',
    { do: 'Use a spot illustration sized for the space.', dont: 'Squeeze a large illustration into a narrow panel.' }, 'An illustration should support the message, not push it out of view.', 4),
]);

export const progressBar = defineGuidelines([
  pb('loading-only', 'Show progress, not data', 'must', 'Use progress bars for tasks in progress, not to visualize data.',
    { do: 'Show the progress of uploads and other running tasks.', dont: 'Use progress bars as a chart of values; use a bar chart instead.' }, 'People read a progress bar as something that will finish, not as a comparison.', 2),
]);
