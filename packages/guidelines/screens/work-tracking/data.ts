// SPDX-License-Identifier: Apache-2.0
import type { ObjectType } from '@interlink/react/object';

export type Status = 'To do' | 'In progress' | 'In review' | 'Done';
export interface WorkItem {
  key: string;
  title: string;
  type: ObjectType;
  status: Status;
  assignee: string;
  labels: string[];
  due?: { label: string; appearance: 'neutral' | 'warning' | 'danger' };
}

export const STATUSES: Status[] = ['To do', 'In progress', 'In review', 'Done'];
export const PEOPLE = ['Nia Park', 'Kai Moto', 'Lena Ruiz', 'Omar Haddad'];

export const ITEMS: WorkItem[] = [
  { key: 'WEB-21', title: 'Audit color contrast on the pricing page', type: 'task', status: 'To do', assignee: 'Lena Ruiz', labels: ['accessibility'], due: { label: '2 Jun', appearance: 'neutral' } },
  { key: 'WEB-24', title: 'Hero image flickers on slow connections', type: 'bug', status: 'To do', assignee: 'Omar Haddad', labels: ['performance'], due: { label: 'Tomorrow', appearance: 'warning' } },
  { key: 'WEB-18', title: 'New navigation for the help center', type: 'story', status: 'In progress', assignee: 'Nia Park', labels: ['navigation'], due: { label: '30 May', appearance: 'neutral' } },
  { key: 'WEB-19', title: 'Search results show archived pages', type: 'bug', status: 'In progress', assignee: 'Kai Moto', labels: ['search'], due: { label: 'Yesterday', appearance: 'danger' } },
  { key: 'WEB-15', title: 'Write release notes for the spring update', type: 'page', status: 'In review', assignee: 'Lena Ruiz', labels: ['docs'] },
  { key: 'WEB-12', title: 'Website refresh', type: 'epic', status: 'In review', assignee: 'Nia Park', labels: ['planning'], due: { label: '14 Jun', appearance: 'neutral' } },
  { key: 'WEB-09', title: 'Move forms to the new field components', type: 'task', status: 'Done', assignee: 'Omar Haddad', labels: ['forms'] },
  { key: 'WEB-07', title: 'Footer links open in the same tab', type: 'improvement', status: 'Done', assignee: 'Kai Moto', labels: ['navigation'] },
];

export const STATUS_APPEARANCE: Record<Status, 'neutral' | 'information' | 'warning' | 'success'> = {
  'To do': 'neutral',
  'In progress': 'information',
  'In review': 'warning',
  Done: 'success',
};
