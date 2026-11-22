// SPDX-License-Identifier: Apache-2.0
'use client';
import AssistantChatHero from '@interlink/illustrations/art/assistant-chat-hero';
import BookIcon from '@interlink/icons/core/book-with-bookmark';
import ChartIcon from '@interlink/icons/core/chart-trend-up';
import RoadmapIcon from '@interlink/icons/core/roadmap';
import { PromptSuggestion, PromptSuggestions } from '@interlink/react/prompt-suggestions';
import { Prompt } from './prompt';

const SUGGESTIONS = [
  { title: 'Plan work', command: '/plan', description: 'Turn a goal into tasks with owners and dates.', icon: RoadmapIcon, color: 'purple' as const, prompt: 'Plan the Tanzania launch for Q4' },
  { title: 'Summarise', command: '/summarize', description: 'The key points of a page, thread or meeting.', icon: BookIcon, color: 'blue' as const, prompt: 'Summarise the Kenya beta results' },
  { title: 'Find trends', command: '/analyse', description: 'What changed in payouts this month, and why.', icon: ChartIcon, color: 'lime' as const, prompt: 'Why did failed payouts rise this week?' },
];

/** The empty state of a new chat: who the assistant is talking to, a prompt, and three ways to start. */
export function Greeting({ name, onSend }: { name: string; onSend: (text: string) => void }) {
  return (
    <div className="scr-greeting">
      <AssistantChatHero size="large" />
      <h1 className="scr-greeting-title">How can I help, {name}?</h1>
      <p className="scr-muted">Ask about your work, or pick an agent from the left.</p>
      <div className="scr-greeting-prompt">
        <Prompt onSend={onSend} isGenerating={false} />
      </div>
      <PromptSuggestions label="Suggested prompts">
        {SUGGESTIONS.map((s) => (
          <PromptSuggestion key={s.title} title={s.title} command={s.command} description={s.description} icon={s.icon} color={s.color} onClick={() => onSend(s.prompt)} />
        ))}
      </PromptSuggestions>
    </div>
  );
}
