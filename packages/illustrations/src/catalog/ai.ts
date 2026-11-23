// SPDX-License-Identifier: Apache-2.0
import { maker } from './types';

const a = maker('AI and collaboration');

export const ai = [
  a('assistant-chat', 'Ask the assistant', ['ai', 'chat', 'agent']),
  a('assistant-chat-hero', 'A conversation with the assistant', ['ai', 'chat', 'agent'], true),
  a('agents', 'Agents working together', ['ai', 'hexagon', 'automation']),
  a('automation', 'Work that runs by itself', ['rules', 'gear', 'lightning']),
  a('knowledge-search', 'Find answers across pages', ['search', 'knowledge', 'docs']),
  a('ideas', 'A bright idea', ['lightbulb', 'insight']),
  a('comments', 'Talk it through', ['chat', 'discussion', 'feedback']),
  a('video-meeting', 'Meet face to face, online', ['video', 'call', 'meeting']),
  a('writing', 'Write and edit together', ['pen', 'page', 'draft']),
  a('agent-thinking', 'An agent working it out', ['ai', 'thinking', 'agent']),
  a('prompt', 'Ask with a prompt', ['prompt', 'input', 'ai']),
  a('summary', 'Long into short', ['summary', 'tldr', 'condense']),
  a('translate', 'In another language', ['translate', 'language', 'words']),
  a('voice-assistant', 'Talk to the assistant', ['voice', 'microphone', 'speech']),
  a('workflow', 'Steps that follow each other', ['workflow', 'flow', 'steps']),
  a('approvals', 'Someone signs off', ['approve', 'sign off', 'review']),
  a('handoff', 'An agent hands work to a person', ['handoff', 'human', 'agent']),
];
