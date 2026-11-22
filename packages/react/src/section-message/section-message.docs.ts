// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { SectionMessageProps } from './section-message';

export const sectionMessageDocs = docsFor<SectionMessageProps>({
  name: 'Section message',
  package: '@interlink/react/section-message',
  exports: ['SectionMessage', 'SectionMessageAction'],
  description: 'A section message tells people about something that affects one section of the page.',
  status: 'ga',
  category: 'Messaging',
  keywords: ['message', 'alert', 'notice', 'callout'],
  props: {
    appearance: { type: "'information' | 'warning' | 'error' | 'success' | 'discovery'", default: "'information'", description: 'Sets the color and icon for the kind of message.' },
    title: { type: 'string', description: 'A short summary shown as a heading.' },
    headingLevel: { type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'", default: "'h2'", description: 'Heading element for the title, to fit the page outline.' },
    children: { type: 'ReactNode', description: 'The message: what happened and what to do next.' },
    actions: { type: 'ReactNode', description: 'Up to two SectionMessageAction elements.' },
    icon: { type: 'ComponentType<IconProps>', description: 'Replaces the default icon for the appearance.' },
    iconLabel: { type: 'string', description: 'Names the icon when the title does not say what kind of message it is.' },
    isDismissible: { type: 'boolean', default: 'false', description: 'Adds a close button.' },
    onDismiss: { type: '() => void', description: 'Called when the message is dismissed.' },
    testId: { type: 'string', description: 'Rendered as data-testid.' },
  },
});
