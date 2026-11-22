// SPDX-License-Identifier: Apache-2.0
import { people, type Person } from '../../src/people';

export type Status = 'To do' | 'In progress' | 'In review' | 'Done';
export type Priority = 'highest' | 'high' | 'medium' | 'low';

export interface Item {
  key: string;
  title: string;
  type: 'story' | 'task' | 'bug';
  status: Status;
  priority: Priority;
  label: { text: string; color: 'blue' | 'purple' | 'lime' | 'orange' | 'teal' };
  assignee: Person;
  /** An agent is working on this item right now. */
  agent?: string;
}

const ui = { text: 'Checkout', color: 'purple' } as const;
const api = { text: 'Payouts API', color: 'blue' } as const;
const risk = { text: 'Risk', color: 'orange' } as const;
const ops = { text: 'Merchants', color: 'lime' } as const;
const data = { text: 'Reporting', color: 'teal' } as const;
const { kwame, zawadi, tunde, imani, jabari, sipho, wanjiru, baraka } = people;

export const STATUSES: Status[] = ['To do', 'In progress', 'In review', 'Done'];

export const ITEMS: Item[] = [
  { key: 'PAY-121', title: 'Retry failed M-Pesa payouts with backoff', type: 'story', status: 'To do', priority: 'high', label: api, assignee: jabari },
  { key: 'PAY-124', title: 'Show fees before people confirm a payout', type: 'story', status: 'To do', priority: 'medium', label: ui, assignee: zawadi },
  { key: 'PAY-127', title: 'Daily settlement report for merchants', type: 'task', status: 'To do', priority: 'low', label: data, assignee: baraka },
  { key: 'PAY-130', title: 'Limit payouts per hour for new merchants', type: 'task', status: 'To do', priority: 'high', label: risk, assignee: sipho, agent: 'Gathering context' },
  { key: 'PAY-112', title: 'Payouts to Airtel Money wallets', type: 'story', status: 'In progress', priority: 'highest', label: api, assignee: kwame },
  { key: 'PAY-115', title: 'Phone number field accepts +254 and 07 formats', type: 'bug', status: 'In progress', priority: 'high', label: ui, assignee: tunde },
  { key: 'PAY-118', title: 'Merchant beta invitations in Swahili and English', type: 'task', status: 'In progress', priority: 'medium', label: ops, assignee: wanjiru },
  { key: 'PAY-119', title: 'Mask wallet numbers in exports', type: 'bug', status: 'In progress', priority: 'medium', label: risk, assignee: imani },
  { key: 'PAY-106', title: 'Receipt by SMS after each payout', type: 'story', status: 'In review', priority: 'medium', label: api, assignee: jabari },
  { key: 'PAY-109', title: 'Empty state for merchants with no payouts', type: 'task', status: 'In review', priority: 'low', label: ui, assignee: zawadi },
  { key: 'PAY-110', title: 'Webhook signature check fails on retries', type: 'bug', status: 'In review', priority: 'highest', label: api, assignee: kwame },
  { key: 'PAY-101', title: 'Payout status page for merchants', type: 'story', status: 'Done', priority: 'high', label: ui, assignee: tunde },
  { key: 'PAY-102', title: 'KES and TZS currency formats', type: 'task', status: 'Done', priority: 'medium', label: data, assignee: baraka },
  { key: 'PAY-104', title: 'Fraud rules for repeated wallet numbers', type: 'story', status: 'Done', priority: 'high', label: risk, assignee: sipho },
];
