// SPDX-License-Identifier: Apache-2.0
import { people, type Person } from '../../src/people';

export type GoalStatus = 'on-track' | 'at-risk' | 'off-track' | 'pending' | 'completed';

export interface Goal {
  id: string;
  name: string;
  status: GoalStatus;
  score: string;
  target: string;
  owner: Person;
  following: boolean;
  updated: string;
  subGoals: number;
}

export const STATUS: Record<GoalStatus, { label: string; appearance: 'success' | 'warning' | 'danger' | 'neutral' | 'information' }> = {
  'on-track': { label: 'On track', appearance: 'success' },
  'at-risk': { label: 'At risk', appearance: 'warning' },
  'off-track': { label: 'Off track', appearance: 'danger' },
  pending: { label: 'Pending', appearance: 'neutral' },
  completed: { label: 'Completed', appearance: 'information' },
};

export const GOALS: Goal[] = [
  { id: 'g1', name: 'Launch mobile-money payouts in Kenya', status: 'on-track', score: '0.7', target: 'Sep 30', owner: people.amara, following: true, updated: 'Today', subGoals: 4 },
  { id: 'g2', name: 'Cut merchant onboarding to one day', status: 'at-risk', score: '0.4', target: 'Oct 15', owner: people.kwame, following: true, updated: 'Yesterday', subGoals: 3 },
  { id: 'g3', name: 'Reach 4,000 active teams in East Africa', status: 'on-track', score: '0.8', target: 'Dec 31', owner: people.folake, following: false, updated: '2 days ago', subGoals: 5 },
  { id: 'g4', name: 'Move card processing to the Nairobi region', status: 'off-track', score: '0.2', target: 'Aug 31', owner: people.jabari, following: true, updated: '3 days ago', subGoals: 2 },
  { id: 'g5', name: 'Answer 90% of support chats within an hour', status: 'on-track', score: '0.6', target: 'Nov 30', owner: people.wanjiru, following: false, updated: 'Last week', subGoals: 0 },
  { id: 'g6', name: 'Ship the agent audit log to every admin', status: 'pending', score: '0.0', target: 'Jan 15', owner: people.sipho, following: true, updated: 'Last week', subGoals: 1 },
  { id: 'g7', name: 'Publish the Q3 pricing for TZS and KES', status: 'completed', score: '1.0', target: 'Jul 31', owner: people.neema, following: false, updated: 'Jul 30', subGoals: 0 },
];
