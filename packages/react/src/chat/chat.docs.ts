// SPDX-License-Identifier: Apache-2.0
import { docsFor } from '../docs/types';
import type { ChatPanelProps } from './chat-panel';

export const chatDocs = docsFor<ChatPanelProps>({
  name: "Chat",
  package: '@interlink/react/chat',
  exports: ["ChatPanel", "ChatHeader", "ChatThread", "ChatMessage", "ChatFooter"],
  description: "The parts of a conversation with an agent: panel, header, thread, messages and footer.",
  status: 'beta',
  category: "Assist",
  keywords: ["chat", "conversation", "assistant", "agent", "messages"],
  props: {
    children: {"type": "ReactNode", "description": "ChatHeader, ChatThread, then ChatFooter."},
    label: {"type": "string", "description": "Accessible name, such as \"Chat with Planner\"."},
    variant: {"type": "'docked' | 'floating'", "description": "Docked fills a side column; floating is a card above the page.", "default": "'floating'"},
    testId: {"type": "string", "description": "Rendered as data-testid."},
  },
});
