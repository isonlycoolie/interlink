// SPDX-License-Identifier: Apache-2.0
export interface Metric {
  label: string;
  value: string;
  change: string;
  isUp: boolean;
  /** Whether going up is good for this metric. */
  upIsGood: boolean;
  note: string;
}

export const METRICS: Metric[] = [
  { label: 'Active people', value: '12,480', change: '+8.2%', isUp: true, upIsGood: true, note: 'vs. last 30 days' },
  { label: 'Work items done', value: '3,214', change: '+12%', isUp: true, upIsGood: true, note: 'vs. last 30 days' },
  { label: 'Median response', value: '1.8h', change: '-0.4h', isUp: false, upIsGood: false, note: 'time to first reply' },
  { label: 'Open incidents', value: '7', change: '+2', isUp: true, upIsGood: false, note: 'across all services' },
];

export const WEEKS = ['W14', 'W15', 'W16', 'W17', 'W18', 'W19', 'W20', 'W21'];
/** Active people per week, in thousands, for two teams. */
export const ACTIVE = { product: [6.1, 6.4, 6.2, 7.0, 7.4, 7.1, 7.9, 8.3], support: [3.2, 3.5, 3.4, 3.9, 4.1, 4.4, 4.2, 4.6] };
/** Median response time per week, in hours. */
export const RESPONSE = [2.6, 2.4, 2.5, 2.2, 2.0, 2.1, 1.9, 1.8];

export const PROJECTS = [
  { name: 'Website refresh', lead: 'Nia Park', done: 214, open: 38, health: 'On track' },
  { name: 'Billing', lead: 'Kai Moto', done: 167, open: 52, health: 'At risk' },
  { name: 'Mobile app', lead: 'Lena Ruiz', done: 301, open: 21, health: 'On track' },
  { name: 'Data platform', lead: 'Omar Haddad', done: 98, open: 64, health: 'Off track' },
  { name: 'Design system', lead: 'Sam Ito', done: 245, open: 17, health: 'On track' },
  { name: 'Onboarding', lead: 'Ada Byron', done: 133, open: 29, health: 'At risk' },
  { name: 'Search', lead: 'Eli Cole', done: 76, open: 33, health: 'On track' },
] as const;
