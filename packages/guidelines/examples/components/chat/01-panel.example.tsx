// SPDX-License-Identifier: Apache-2.0
import AssistantChat from '@interlink/illustrations/art/assistant-chat';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { AIDisclaimer } from '@interlink/react/ai-disclaimer';
import { ChatFooter, ChatHeader, ChatMessage, ChatPanel, ChatThread } from '@interlink/react/chat';
import { Stack, Text } from '@interlink/react/primitives';
import { PromptInput } from '@interlink/react/prompt-input';
import { PromptSuggestion, PromptSuggestions } from '@interlink/react/prompt-suggestions';
import { ThinkingIndicator } from '@interlink/react/thinking-indicator';
import { useState } from 'react';

type Message = { id: number; from: 'user' | 'agent'; text: string };

/** Title: Chat panel */
export default function Example() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const send = (text: string) => {
    setMessages((m) => [...m, { id: m.length, from: 'user', text }]);
    setBusy(true);
    setTimeout(() => {
      setMessages((m) => [...m, { id: m.length, from: 'agent', text: 'Here is a first plan: three milestones, owners from the payments team, and a review on Friday.' }]);
      setBusy(false);
    }, 1200);
  };
  const avatar = <AgentAvatar name="Planner" icon={RoadmapIcon} color="purple" size="small" label="" />;
  const greeting = (
    <Stack space="space.200" alignInline="center">
      <AssistantChat size="small" />
      <Text as="p" size="large" weight="semibold">
        How can I help, Amara?
      </Text>
      <PromptSuggestions label="Try asking" layout="list">
        <PromptSuggestion title="Plan the Q3 launch" icon={RoadmapIcon} onClick={() => send('Plan the Q3 launch')} />
      </PromptSuggestions>
    </Stack>
  );
  return (
    <div style={{ height: 480 }}>
      <ChatPanel label="Chat with Planner">
        <ChatHeader onNewChat={() => setMessages([])} onClose={() => {}}>
          {avatar}
          Planner
        </ChatHeader>
        <ChatThread emptyState={greeting}>
          {messages.map((m) => (
            <ChatMessage key={m.id} from={m.from} author={m.from === 'agent' ? 'Planner' : undefined} avatar={m.from === 'agent' ? avatar : undefined}>
              <p>{m.text}</p>
            </ChatMessage>
          ))}
          {busy ? <ThinkingIndicator /> : null}
        </ChatThread>
        <ChatFooter>
          <PromptInput label="Message Planner" onSubmit={send} isGenerating={busy} onAdd={() => {}} />
          <AIDisclaimer onFeedback={() => {}} />
        </ChatFooter>
      </ChatPanel>
    </div>
  );
}
