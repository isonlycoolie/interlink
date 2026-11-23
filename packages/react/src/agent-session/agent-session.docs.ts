// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { AgentSessionProps } from './agent-session';

export const agentSessionDocs = docsFor<AgentSessionProps>({
  name: 'Agent session',
  package: '@interlink/react/agent-session',
  exports: ['AgentSession'],
  description: 'One agent’s run on a piece of work: who runs it, what state it is in, and whether it needs a person.',
  status: 'beta',
  category: 'Assist',
  keywords: ['agent', 'session', 'run', 'status', 'needs input', 'working', 'board'],
  props: {
    avatar: { type: 'ReactNode', description: 'An AgentAvatar, usually with the person it works for.' },
    status: { type: "'working' | 'needs-input' | 'finished' | 'idle'", description: 'The state of the run. Needs input is the only state that asks for a person.' },
    title: { type: 'ReactNode', description: 'What the session is about, in the row layout.' },
    meta: { type: 'ReactNode', description: 'A short line under the title, such as the linked change and when it last moved.' },
    statusLabel: { type: 'string', description: 'Overrides the status words, such as "Gathering context".' },
    layout: { type: "'inline' | 'row'", description: 'Inline sits at the foot of a work item card; row stands alone in a list of sessions.', default: "'inline'" },
    href: { type: 'string', description: 'Makes the session a link to its thread.' },
    testId: { type: 'string', description: 'Rendered as data-testid.' },
  },
});
