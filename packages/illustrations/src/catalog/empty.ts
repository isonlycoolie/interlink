// SPDX-License-Identifier: Apache-2.0
import { maker } from './types';

const e = maker('Empty states');

export const empty = [
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
  e('empty-trash', 'The trash is empty', ['bin', 'deleted', 'clean']),
  e('no-tasks', 'No tasks to do', ['todo', 'checklist', 'work']),
  e('no-goals', 'No goals set yet', ['target', 'objective', 'okr']),
  e('no-reports', 'No reports have been made', ['analytics', 'document', 'chart']),
  e('no-customers', 'No customers yet', ['clients', 'crm', 'people']),
  e('no-orders', 'No orders have come in', ['sales', 'purchase', 'box']),
  e('no-history', 'Nothing has happened yet', ['activity', 'log', 'timeline']),
  e('no-images', 'No images uploaded', ['photos', 'gallery', 'media']),
  e('no-videos', 'No videos recorded', ['recording', 'media', 'film']),
  e('no-contacts', 'No contacts saved', ['address book', 'people', 'phone']),
  e('no-filter-results', 'Nothing matches these filters', ['filter', 'funnel', 'search']),
  e('empty-dashboard', 'This dashboard has no widgets', ['dashboard', 'widgets', 'overview']),
];
