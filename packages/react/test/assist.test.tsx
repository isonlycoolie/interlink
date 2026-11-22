// SPDX-License-Identifier: Apache-2.0
import RoadmapIcon from '@interlink/icons/core/roadmap';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AgentAvatar } from '../src/agent-avatar';
import { AgentCard } from '../src/agent-card';
import { AIDisclaimer } from '../src/ai-disclaimer';
import { AssistButton } from '../src/assist-button';
import { GenerativeBorder } from '../src/generative-border';
import { PresenceCursor } from '../src/presence-cursor';
import { ThinkingIndicator } from '../src/thinking-indicator';

afterEach(cleanup);
const noViolations = async (el: HTMLElement) => {
  const r = await axe.run(el, { rules: { 'color-contrast': { enabled: false } } });
  expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.html}`)).toEqual([]);
};

describe('assist marks', () => {
  it('AgentAvatar and PresenceCursor say an agent is there', async () => {
    const { container } = render(
      <div>
        <AgentAvatar name="Planner" icon={RoadmapIcon} color="purple" />
        <PresenceCursor name="Planner" color="agent" agentIcon={RoadmapIcon} />
        <PresenceCursor name="Amara" color="saffron" />
      </div>,
    );
    expect(screen.getByRole('img', { name: 'Planner (agent)' })).toBeTruthy();
    expect(screen.getByRole('img', { name: 'Planner (agent) is here' })).toBeTruthy();
    expect(screen.getByRole('img', { name: 'Amara is here' })).toBeTruthy();
    await noViolations(container);
  });
  it('AgentAvatar hides itself when the name is beside it', () => {
    const { container } = render(<AgentAvatar name="Planner" label="" />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeTruthy();
  });
  it('AssistButton is a button with a menu chevron', async () => {
    const onClick = vi.fn();
    const { container } = render(
      <AssistButton hasMenu aria-haspopup="menu" aria-expanded={false} onClick={onClick}>
        Ask Interlink
      </AssistButton>,
    );
    fireEvent.click(screen.getByRole('button', { name: /Ask Interlink/ }));
    expect(onClick).toHaveBeenCalled();
    await noViolations(container);
  });
  it('GenerativeBorder marks generating and ThinkingIndicator is a status', async () => {
    const { container } = render(
      <GenerativeBorder isGenerating testId="gb">
        <ThinkingIndicator label="Searching pages…" />
      </GenerativeBorder>,
    );
    expect(screen.getByTestId('gb').dataset.generating).toBeDefined();
    expect(screen.getByRole('status').textContent).toContain('Searching pages…');
    await noViolations(container);
  });
});

describe('assist feedback and directory', () => {
  it('AIDisclaimer toggles a rating', async () => {
    const onFeedback = vi.fn();
    const { container } = render(<AIDisclaimer onFeedback={onFeedback} onComment={() => {}} />);
    const up = screen.getByRole('button', { name: 'Helpful' });
    fireEvent.click(up);
    expect(onFeedback).toHaveBeenLastCalledWith('up');
    expect(up.getAttribute('aria-pressed')).toBe('true');
    fireEvent.click(up);
    expect(onFeedback).toHaveBeenLastCalledWith(null);
    expect(screen.getByText('Uses AI. Verify results.')).toBeTruthy();
    await noViolations(container);
  });
  it('AgentCard names its chat button', async () => {
    const onChat = vi.fn();
    const { container } = render(
      <AgentCard name="Planner" description="Breaks goals into a plan." createdBy="By Interlink" icon={RoadmapIcon} color="purple" onChat={onChat} href="/agents/planner" />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Chat with Planner' }));
    expect(onChat).toHaveBeenCalled();
    expect(screen.getByRole('link', { name: 'Planner' })).toBeTruthy();
    await noViolations(container);
  });
});
