// SPDX-License-Identifier: Apache-2.0
import BookIcon from '@interlink/icons/core/book-with-bookmark';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ActionPlan } from '../src/action-plan';
import { ChatFooter, ChatHeader, ChatMessage, ChatPanel, ChatThread } from '../src/chat';
import { PromptInput } from '../src/prompt-input';
import { PromptSuggestion, PromptSuggestions } from '../src/prompt-suggestions';
import { SuggestionCard } from '../src/suggestion-card';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

describe('chat', () => {
  it('ChatPanel is a named region with a log and header actions', async () => {
    const onClose = vi.fn();
    const { container } = render(
      <ChatPanel label="Chat with Planner">
        <ChatHeader onNewChat={() => {}} onClose={onClose}>Planner</ChatHeader>
        <ChatThread>
          <ChatMessage from="user">Plan the sprint</ChatMessage>
          <ChatMessage from="agent" author="Planner" time="now">Here is a plan.</ChatMessage>
        </ChatThread>
        <ChatFooter>
          <PromptInput label="Message Planner" />
        </ChatFooter>
      </ChatPanel>,
    );
    expect(screen.getByRole('region', { name: 'Chat with Planner' })).toBeTruthy();
    expect(screen.getByRole('log')).toBeTruthy();
    expect(screen.getByRole('article', { name: 'Planner, now' })).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Close chat' }));
    expect(onClose).toHaveBeenCalled();
    await noViolations(container);
  });
  it('ChatThread shows the empty state without messages', () => {
    render(<ChatThread emptyState={<p>How can I help?</p>}>{[]}</ChatThread>);
    expect(screen.getByText('How can I help?')).toBeTruthy();
  });
  it('PromptInput sends on Enter, keeps Shift+Enter, and clears', () => {
    const onSubmit = vi.fn();
    render(<PromptInput label="Message" onSubmit={onSubmit} />);
    const box = screen.getByRole('textbox', { name: 'Message' }) as HTMLTextAreaElement;
    expect((screen.getByRole('button', { name: 'Send' }) as HTMLButtonElement).disabled).toBe(true);
    fireEvent.change(box, { target: { value: '  Summarise this page ' } });
    fireEvent.keyDown(box, { key: 'Enter', shiftKey: true });
    expect(onSubmit).not.toHaveBeenCalled();
    fireEvent.keyDown(box, { key: 'Enter' });
    expect(onSubmit).toHaveBeenCalledWith('Summarise this page');
    expect(box.value).toBe('');
  });
});

describe('agent output', () => {
  it('PromptSuggestions is a named list of buttons', async () => {
    const onClick = vi.fn();
    const { container } = render(
      <PromptSuggestions label="Suggested prompts">
        <PromptSuggestion title="Summarise" command="/summarize" description="Key points of a page." icon={BookIcon} color="blue" onClick={onClick} />
      </PromptSuggestions>,
    );
    expect(screen.getByRole('list', { name: 'Suggested prompts' })).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /Summarise/ }));
    expect(onClick).toHaveBeenCalled();
    await noViolations(container);
  });
  it('SuggestionCard accepts and then reports', async () => {
    const onAccept = vi.fn();
    const { container, rerender } = render(<SuggestionCard title="Move PAY-112 to In review" reason="Its pull request merged." onAccept={onAccept} onDismiss={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: 'Accept' }));
    expect(onAccept).toHaveBeenCalled();
    rerender(<SuggestionCard title="Move PAY-112 to In review" acceptedText="Moved to In review" />);
    expect(screen.getByRole('status').textContent).toBe('Moved to In review');
    await noViolations(container);
  });
  it('ActionPlan marks the current step', async () => {
    const steps = [
      { id: 'a', title: 'Read the board', status: 'done' as const },
      { id: 'b', title: 'Draft the plan', status: 'current' as const },
      { id: 'c', title: 'Share it', status: 'upcoming' as const },
    ];
    const { container } = render(<ActionPlan title="Sprint plan" steps={steps} />);
    expect(screen.getAllByRole('listitem')[1]?.getAttribute('aria-current')).toBe('step');
    expect(screen.getByText(', In progress')).toBeTruthy();
    await noViolations(container);
  });
});
