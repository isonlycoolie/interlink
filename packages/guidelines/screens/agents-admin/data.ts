// SPDX-License-Identifier: Apache-2.0
import { people, type Person } from '../../src/people';

export type AgentColor = 'blue' | 'purple' | 'saffron' | 'lime' | 'brand' | 'ink';
export interface Identity {
  name: string;
  owner: Person;
  color: AgentColor;
  glyph: 'roadmap' | 'automation' | 'shield' | 'search' | 'chart' | 'email';
  status: 'Active' | 'Paused' | 'Blocked';
  mode: 'Acts alone' | 'Asks first';
  actor: 'Agent' | 'Service account';
  apps: number;
  lastActive: string;
}

const { kwame, sipho, neema, amara, baraka, wanjiru, jabari, imani } = people;
const id = (name: string, owner: Person, color: AgentColor, glyph: Identity['glyph'], status: Identity['status'], mode: Identity['mode'], actor: Identity['actor'], apps: number, lastActive: string): Identity => ({
  name, owner, color, glyph, status, mode, actor, apps, lastActive,
});

export const IDENTITIES: Identity[] = [
  id('Planner', amara, 'purple', 'roadmap', 'Active', 'Asks first', 'Agent', 4, '2 min ago'),
  id('Runner', kwame, 'blue', 'automation', 'Active', 'Acts alone', 'Agent', 3, '5 min ago'),
  id('Guard', sipho, 'lime', 'shield', 'Active', 'Acts alone', 'Agent', 6, '1 min ago'),
  id('Finder', baraka, 'saffron', 'search', 'Active', 'Asks first', 'Agent', 5, '12 min ago'),
  id('Ledger sync', neema, 'ink', 'chart', 'Active', 'Acts alone', 'Service account', 2, '30 min ago'),
  id('Inbox triage', wanjiru, 'brand', 'email', 'Paused', 'Asks first', 'Agent', 1, 'Yesterday'),
  id('Release notes', jabari, 'purple', 'roadmap', 'Active', 'Asks first', 'Agent', 2, '3 hours ago'),
  id('Payout monitor', kwame, 'blue', 'chart', 'Active', 'Acts alone', 'Service account', 3, '4 min ago'),
  id('Access review', sipho, 'lime', 'shield', 'Blocked', 'Asks first', 'Agent', 4, '2 days ago'),
  id('Survey reader', imani, 'saffron', 'search', 'Active', 'Asks first', 'Agent', 1, 'Today'),
  id('Billing export', neema, 'ink', 'chart', 'Active', 'Acts alone', 'Service account', 1, '1 hour ago'),
  id('Support drafts', wanjiru, 'brand', 'email', 'Active', 'Asks first', 'Agent', 2, '8 min ago'),
];

export interface Activity {
  date: string;
  actor: string;
  delegatedBy?: Person;
  action: string;
  location: string;
}

export const ACTIVITY: Activity[] = [
  { date: '23 Nov, 09:42', actor: 'Runner', delegatedBy: kwame, action: 'Moved 4 work items to sprint 15', location: 'Nairobi, KE' },
  { date: '23 Nov, 09:31', actor: 'Guard', action: 'Blocked a page share with an API key in it', location: 'Dar es Salaam, TZ' },
  { date: '23 Nov, 09:12', actor: 'Planner', delegatedBy: amara, action: 'Created the Q4 Tanzania launch plan', location: 'Nairobi, KE' },
  { date: '23 Nov, 08:55', actor: 'Ledger sync', action: 'Exported 1,204 settlements', location: 'Lagos, NG' },
  { date: '23 Nov, 08:20', actor: 'Finder', delegatedBy: baraka, action: 'Read 24 pages in Launch Hub', location: 'Kampala, UG' },
];
