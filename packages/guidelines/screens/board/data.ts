// SPDX-License-Identifier: Apache-2.0
import type { AgentSessionStatus } from '@interlink/react/agent-session';
import { people, type Person } from '../../src/people';

export type AgentKey = 'builder' | 'reviewer' | 'guard';
export const AGENTS: Record<AgentKey, { name: string; color: 'ink' | 'saffron' | 'lime' }> = {
  builder: { name: 'Builder', color: 'ink' },
  reviewer: { name: 'Reviewer', color: 'saffron' },
  guard: { name: 'Guard', color: 'lime' },
};

export interface Session { agent: AgentKey; for: Person; status: AgentSessionStatus; title: string; change: string; when: string }
export interface Item { key: string; title: string; labels: string[]; priority: 'high' | 'medium'; hasChange?: boolean; owner: Person; session?: Session }

export const UNLINKED: Session[] = [
  { agent: 'builder', for: people.jabari, status: 'idle', title: 'Settlement schema migration', change: '#1880', when: 'Just now' },
  { agent: 'reviewer', for: people.imani, status: 'idle', title: 'Reconciliation alert thresholds', change: '#1882', when: 'Just now' },
  { agent: 'reviewer', for: people.tunde, status: 'finished', title: 'Kill switch rollout notes', change: '#1866', when: 'Just now' },
  { agent: 'builder', for: people.kwame, status: 'needs-input', title: 'Timeout budget for M-Pesa calls', change: '#1859', when: '4 min ago' },
];

export const LANES: { title: string; items: Item[] }[] = [
  { title: 'To do', items: [
    { key: 'PAY-118', title: 'Add Airtel Money as a payout option', labels: ['payouts-mobile'], priority: 'medium', owner: people.tunde },
    { key: 'PAY-121', title: 'Retry failed payouts with backoff', labels: ['webhooks'], priority: 'medium', owner: people.jabari },
  ] },
  { title: 'In progress', items: [
    { key: 'PAY-105', title: 'Verify card payments with 3-D Secure 2', labels: ['checkout-web', '3ds'], priority: 'high', hasChange: true, owner: people.imani, session: { agent: 'builder', for: people.imani, status: 'working', title: '', change: '', when: '' } },
    { key: 'PAY-109', title: 'Refund API for the support dashboard', labels: ['api'], priority: 'medium', owner: people.kwame },
  ] },
  { title: 'In review', items: [
    { key: 'PAY-112', title: 'Audit log for card token access', labels: ['compliance'], priority: 'high', hasChange: true, owner: people.sipho, session: { agent: 'guard', for: people.sipho, status: 'needs-input', title: '', change: '', when: '' } },
    { key: 'PAY-115', title: 'Live payout success rate on the dashboard', labels: ['dashboard'], priority: 'medium', owner: people.baraka },
  ] },
  { title: 'Done', items: [
    { key: 'PAY-101', title: 'Add PCI scope checks to the release pipeline', labels: ['checks'], priority: 'medium', owner: people.juma, session: { agent: 'reviewer', for: people.juma, status: 'finished', title: '', change: '', when: '' } },
    { key: 'PAY-098', title: 'Update fee table for TZS and KES', labels: ['pricing'], priority: 'medium', owner: people.neema },
  ] },
];
