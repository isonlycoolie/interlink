// SPDX-License-Identifier: Apache-2.0
'use client';
import ChatIcon from '@interlink/icons/core/ai-chat';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import { AgentAvatar } from '@interlink/react/agent-avatar';
import { AIDisclaimer } from '@interlink/react/ai-disclaimer';
import { ChatMessage, ChatThread } from '@interlink/react/chat';
import { ThinkingIndicator } from '@interlink/react/thinking-indicator';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { people } from '../../src/people';
import { AppChrome } from '../shared/chrome';
import { GenericAnswer, SprintAnswer } from './answers';
import { Greeting } from './greeting';
import { Prompt } from './prompt';
import { AssistantNav, CHATS } from './side-nav';

const product = { name: 'Lumen Assist', icon: ChatIcon, color: 'ink' as const };
type Message = { id: number; from: 'user' | 'agent'; body: ReactNode };
const answer = (text: string) => (/sprint/i.test(text) ? <SprintAnswer /> : <GenericAnswer prompt={text} />);

/** The assistant: a greeting for a new chat, then a thread with plans and suggestions people approve. */
export default function AssistantScreen() {
  const [chat, setChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const send = (text: string) => {
    setChat((c) => c ?? text);
    setMessages((m) => [...m, { id: m.length, from: 'user', body: <p>{text}</p> }]);
    setBusy(true);
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { id: m.length, from: 'agent', body: answer(text) }]);
      setBusy(false);
    }, 1400);
  };
  const open = (title: string) => {
    clearTimeout(timer.current);
    setBusy(false);
    setChat(title);
    setMessages([{ id: 0, from: 'user', body: <p>{title}</p> }, { id: 1, from: 'agent', body: answer(title) }]);
  };
  const reset = () => {
    clearTimeout(timer.current);
    setBusy(false);
    setChat(null);
    setMessages([]);
  };
  const avatar = <AgentAvatar name="Planner" icon={RoadmapIcon} color="purple" size="small" label="" />;
  return (
    <AppChrome product={product} sideNav={<AssistantNav current={chat === null ? null : CHATS.includes(chat) ? chat : ''} onNew={reset} onOpen={open} />} mainWidth="fixed" hideAsk>
      {messages.length === 0 ? (
        <Greeting name={people.amara.name.split(' ')[0] ?? 'there'} onSend={send} />
      ) : (
        <div className="scr-chat">
          <h1 className="il-visually-hidden">{chat}</h1>
          <ChatThread>
            {messages.map((m) => (
              <ChatMessage key={m.id} from={m.from} author={m.from === 'agent' ? 'Planner' : undefined} avatar={m.from === 'agent' ? avatar : undefined} time={m.from === 'agent' ? 'now' : undefined} footer={m.from === 'agent' ? <AIDisclaimer onFeedback={() => {}} onComment={() => {}} /> : undefined}>
                {m.body}
              </ChatMessage>
            ))}
            {busy ? <ThinkingIndicator label="Planner is reading the sprint board…" /> : null}
          </ChatThread>
          <div className="scr-chat-footer">
            <Prompt onSend={send} isGenerating={busy} />
          </div>
        </div>
      )}
    </AppChrome>
  );
}
