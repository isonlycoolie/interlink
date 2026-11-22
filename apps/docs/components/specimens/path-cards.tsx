// SPDX-License-Identifier: Apache-2.0
import AssistantChat from '@interlink/illustrations/art/assistant-chat';
import CreateProject from '@interlink/illustrations/art/create-project';
import LearnBasics from '@interlink/illustrations/art/learn-basics';
import Writing from '@interlink/illustrations/art/writing';
import Link from 'next/link';

const PATHS = [
  { Art: CreateProject, title: 'Design', text: 'Color, type, spacing and the rules behind every component.', href: '/foundations', tone: 'purple' },
  { Art: LearnBasics, title: 'Develop', text: 'Install the packages and build with 60 accessible React components.', href: '/components', tone: 'blue' },
  { Art: AssistantChat, title: 'With AI', text: 'Agent components, and guidance an AI can read and run.', href: '/components/chat', tone: 'saffron' },
  { Art: Writing, title: 'Content', text: 'Illustrations, sample people and the words we use.', href: '/foundations/illustrations', tone: 'lime' },
];

/** Four ways into the system, each on an illustrated tile. */
export function PathCards() {
  return (
    <ul className="site-paths">
      {PATHS.map(({ Art, title, text, href, tone }) => (
        <li key={title}>
          <Link href={href} className="site-path il-focusable">
            <span className="site-path-art" data-tone={tone}>
              <Art size="medium" />
            </span>
            <span className="site-path-title">{title}</span>
            <span className="site-path-text">{text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
