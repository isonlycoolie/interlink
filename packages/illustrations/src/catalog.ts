// SPDX-License-Identifier: Apache-2.0
export type IllustrationGroup = 'Empty states' | 'Status' | 'Onboarding' | 'Finance' | 'AI and collaboration';

export interface IllustrationInfo {
  slug: string;
  group: IllustrationGroup;
  /** The one thing the picture says. Planned before it was drawn. */
  meaning: string;
  keywords: string[];
  /** Hero pieces are twice as wide as they are tall. */
  hero?: boolean;
}

const e = (slug: string, meaning: string, keywords: string[]): IllustrationInfo => ({ slug, group: 'Empty states', meaning, keywords });
const s = (slug: string, meaning: string, keywords: string[]): IllustrationInfo => ({ slug, group: 'Status', meaning, keywords });
const o = (slug: string, meaning: string, keywords: string[], hero = false): IllustrationInfo => ({ slug, group: 'Onboarding', meaning, keywords, hero });
const f = (slug: string, meaning: string, keywords: string[], hero = false): IllustrationInfo => ({ slug, group: 'Finance', meaning, keywords, hero });
const a = (slug: string, meaning: string, keywords: string[], hero = false): IllustrationInfo => ({ slug, group: 'AI and collaboration', meaning, keywords, hero });

/** Every illustration, grouped, with its meaning. Names are the PascalCase of the slug. */
export const catalog: IllustrationInfo[] = [
  e('empty-search', 'A search found nothing on the page', ['search', 'no results', 'find']),
  e('empty-inbox', 'Nothing has arrived yet', ['inbox', 'messages', 'zero']),
  e('no-notifications', 'All quiet: no notifications', ['bell', 'alerts', 'sleep']),
  e('empty-folder', 'A folder with nothing inside', ['files', 'documents']),
  e('no-data', 'There is no data to chart yet', ['chart', 'analytics', 'report']),
  e('all-done', 'Every task is finished', ['checklist', 'complete', 'tasks']),
  e('empty-cart', 'The cart is empty', ['shop', 'basket', 'order']),
  e('no-messages', 'No conversation has started', ['chat', 'comments', 'bubbles']),
  e('no-uploads', 'Nothing has been uploaded', ['upload', 'cloud', 'files']),
  e('no-team', 'Nobody else is here yet', ['people', 'members', 'invite']),
  e('no-projects', 'No projects have been created', ['boards', 'work']),
  e('no-invoices', 'No invoices to show', ['billing', 'receipt']),
  e('no-transactions', 'No payments have been made', ['payments', 'card', 'ledger']),
  e('empty-calendar', 'Nothing is scheduled', ['dates', 'events', 'schedule']),
  e('no-favorites', 'Nothing has been starred', ['star', 'saved', 'bookmarks']),
  e('no-access', 'This place is locked to you', ['permission', 'forbidden', 'lock']),
  s('success', 'It worked', ['done', 'check', 'complete']),
  s('error-state', 'The connection broke', ['error', 'failed', 'unplugged']),
  s('warning-state', 'Something needs attention', ['caution', 'alert']),
  s('maintenance', 'Work is being done on this', ['settings', 'repair', 'tools']),
  s('offline', 'You are not connected', ['network', 'cloud', 'disconnected']),
  s('not-found', 'This page could not be found', ['404', 'lost', 'compass']),
  s('server-error', 'A server stopped working', ['500', 'outage', 'infrastructure']),
  s('timeout', 'This took too long', ['waiting', 'expired', 'hourglass']),
  s('payment-failed', 'The payment did not go through', ['declined', 'card', 'billing']),
  s('update-available', 'There is a new version to install', ['download', 'upgrade']),
  o('welcome', 'Hello, glad you are here', ['wave', 'greeting', 'hand']),
  o('get-started', 'The road from first step to finish', ['onboarding', 'journey', 'path'], true),
  o('invite-team', 'Bring people in', ['invite', 'add person', 'share']),
  o('connect-apps', 'Connect the tools you use', ['integrations', 'puzzle', 'apps']),
  o('set-up-profile', 'Tell people who you are', ['profile', 'account', 'person']),
  o('create-project', 'Start something new', ['new', 'add', 'create']),
  o('learn-basics', 'Learn how it works', ['guide', 'book', 'docs']),
  o('launch', 'Ready to go live', ['rocket', 'release', 'ship']),
  f('payments', 'Take payments by card', ['card', 'coins', 'checkout']),
  f('invoices', 'Invoices sent and paid', ['billing', 'document', 'paid']),
  f('growth', 'Numbers going up', ['revenue', 'chart', 'trend']),
  f('growth-hero', 'Steady growth over time', ['revenue', 'chart', 'trend'], true),
  f('wallet', 'Money you hold', ['balance', 'funds']),
  f('security', 'Protected and private', ['shield', 'lock', 'compliance']),
  f('security-hero', 'Data protected end to end', ['shield', 'lock', 'compliance'], true),
  f('savings', 'Money put aside', ['jar', 'deposit']),
  f('subscriptions', 'Billing that renews', ['recurring', 'plan', 'calendar']),
  f('transfer', 'Money moving between accounts', ['send', 'payout', 'exchange']),
  f('reports', 'Reports and breakdowns', ['pie', 'document', 'statement']),
  f('mobile-money', 'Pay from a phone', ['mobile', 'wallet', 'mpesa', 'transfer']),
  a('assistant-chat', 'Ask the assistant', ['ai', 'chat', 'agent']),
  a('assistant-chat-hero', 'A conversation with the assistant', ['ai', 'chat', 'agent'], true),
  a('agents', 'Agents working together', ['ai', 'hexagon', 'automation']),
  a('automation', 'Work that runs by itself', ['rules', 'gear', 'lightning']),
  a('knowledge-search', 'Find answers across pages', ['search', 'knowledge', 'docs']),
  a('ideas', 'A bright idea', ['lightbulb', 'insight']),
  a('comments', 'Talk it through', ['chat', 'discussion', 'feedback']),
  a('video-meeting', 'Meet face to face, online', ['video', 'call', 'meeting']),
  a('writing', 'Write and edit together', ['pen', 'page', 'draft']),
];

export const pascal = (slug: string) => slug.replace(/(^|-)([a-z0-9])/g, (_, __, c: string) => c.toUpperCase());
