// SPDX-License-Identifier: Apache-2.0
import { maker } from './types';

const m = maker('Communication and support');

export const communication = [
  m('email', 'Send an email', ['email', 'mail', 'envelope']),
  m('sms', 'Send a text message', ['sms', 'text', 'phone']),
  m('help-center', 'Find help and answers', ['help', 'support', 'docs']),
  m('support-chat', 'Chat with support', ['support', 'chat', 'agent']),
  m('phone-call', 'Call us', ['phone', 'call', 'voice']),
  m('announcement', 'News for everyone', ['announce', 'megaphone', 'news']),
  m('newsletter', 'Updates in your inbox', ['newsletter', 'subscribe', 'mail']),
  m('survey', 'Answer a few questions', ['survey', 'form', 'poll']),
  m('faq', 'Common questions', ['faq', 'questions', 'help']),
  m('notifications-on', 'Stay in the loop', ['notifications', 'bell', 'alerts']),
];
