// SPDX-License-Identifier: Apache-2.0
import { maker } from './types';

const p = maker('People and teams');

export const people = [
  p('org-chart', 'Who reports to whom', ['organisation', 'hierarchy', 'structure']),
  p('roles', 'Different jobs on a team', ['roles', 'responsibilities', 'badges']),
  p('hiring', 'Find someone to join', ['hiring', 'recruit', 'candidate']),
  p('new-member', 'Someone just joined', ['welcome', 'member', 'joined']),
  p('badge', 'Earned recognition', ['badge', 'award', 'achievement']),
  p('team-goals', 'A team aiming together', ['team', 'target', 'goals']),
  p('remote-work', 'Working from anywhere', ['remote', 'laptop', 'home']),
  p('celebration', 'Time to celebrate', ['party', 'milestone', 'confetti']),
  p('feedback', 'Tell us what you think', ['feedback', 'opinion', 'review']),
  p('mentoring', 'Learning from someone', ['mentor', 'coach', 'learn']),
];
