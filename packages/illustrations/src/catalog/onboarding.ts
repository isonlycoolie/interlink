// SPDX-License-Identifier: Apache-2.0
import { maker } from './types';

const o = maker('Onboarding');

export const onboarding = [
  o('welcome', 'Hello, glad you are here', ['wave', 'greeting', 'hand']),
  o('get-started', 'The road from first step to finish', ['onboarding', 'journey', 'path'], true),
  o('invite-team', 'Bring people in', ['invite', 'add person', 'share']),
  o('connect-apps', 'Connect the tools you use', ['integrations', 'puzzle', 'apps']),
  o('set-up-profile', 'Tell people who you are', ['profile', 'account', 'person']),
  o('create-project', 'Start something new', ['new', 'add', 'create']),
  o('learn-basics', 'Learn how it works', ['guide', 'book', 'docs']),
  o('launch', 'Ready to go live', ['rocket', 'release', 'ship']),
  o('choose-plan', 'Pick the plan that fits', ['pricing', 'tier', 'subscription']),
  o('import-data', 'Bring your data in', ['import', 'migrate', 'upload']),
  o('verify-email', 'Confirm your email address', ['email', 'confirm', 'envelope']),
  o('set-up-workspace', 'Set up your workspace', ['workspace', 'settings', 'space']),
  o('pick-template', 'Start from a template', ['template', 'layout', 'gallery']),
  o('product-tour', 'Take a quick tour', ['tour', 'guide', 'walkthrough']),
  o('first-task', 'Do your first task', ['start', 'task', 'todo']),
  o('all-set', 'You are ready', ['ready', 'done', 'finish']),
];
