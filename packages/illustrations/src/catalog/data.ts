// SPDX-License-Identifier: Apache-2.0
import { maker } from './types';

const d = maker('Data and developers');

export const data = [
  d('database', 'Where data lives', ['database', 'storage', 'sql']),
  d('api', 'Systems talking to each other', ['api', 'endpoint', 'connect']),
  d('cloud-storage', 'Files kept in the cloud', ['cloud', 'storage', 'files']),
  d('analytics-dashboard', 'Numbers at a glance', ['analytics', 'dashboard', 'metrics']),
  d('export', 'Take data out', ['export', 'download', 'csv']),
  d('import', 'Bring data in', ['import', 'upload', 'csv']),
  d('code', 'Write and ship code', ['code', 'developer', 'brackets']),
  d('deploy', 'Release to production', ['deploy', 'release', 'ship']),
  d('bug', 'Something is broken in the code', ['bug', 'issue', 'defect']),
  d('webhook', 'Tell another system when it happens', ['webhook', 'event', 'callback']),
];
