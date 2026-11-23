// SPDX-License-Identifier: Apache-2.0
import { maker } from './types';

const s = maker('Status');

export const status = [
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
  s('message-sent', 'Your message is on its way', ['sent', 'paper plane', 'email']),
  s('approved', 'Approved and good to go', ['accepted', 'stamp', 'yes']),
  s('rejected', 'This was not approved', ['declined', 'denied', 'no']),
  s('in-review', 'Waiting for someone to review', ['pending', 'review', 'eye']),
  s('syncing', 'Bringing everything up to date', ['sync', 'refresh', 'update']),
  s('scheduled', 'Set to happen later', ['schedule', 'clock', 'calendar']),
  s('archived', 'Moved to the archive', ['archive', 'box', 'stored']),
  s('session-expired', 'You were signed out for safety', ['logout', 'expired', 'timeout']),
  s('rate-limited', 'Too many requests, slow down', ['limit', 'throttle', 'speed']),
  s('verification-needed', 'We need to confirm it is you', ['verify', 'check', 'identity']),
];
