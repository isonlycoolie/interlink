// SPDX-License-Identifier: Apache-2.0
import type { ComponentType } from 'react';
import AgentsAdminScreen from './agents-admin/screen';
import AssistantScreen from './assistant/screen';
import LandingDevScreen from './landing-dev/screen';
import LandingSaasScreen from './landing-saas/screen';
import PaymentsScreen from './payments/screen';
import ProjectBoardScreen from './project-board/screen';
import SettingsScreen from './settings/screen';
import TeamSpaceScreen from './team-space/screen';

export interface ScreenInfo {
  slug: string;
  title: string;
  description: string;
  /** Source files, relative to screens/<slug>, in reading order. */
  files: string[];
  Component: ComponentType;
}

/** Full screens built only from Interlink. They prove the system end to end and serve as exemplars for agents. */
export const screens: ScreenInfo[] = [
  { slug: 'team-space', title: 'Team space', description: 'A live page in a team space: the doc tree, a photo banner, mentions, goals, a timeline, the team, and people and an agent editing together.', files: ['screen.tsx', 'plan.tsx', 'team.tsx', 'side-nav.tsx'], Component: TeamSpaceScreen },
  { slug: 'project-board', title: 'Project board', description: 'A sprint board in the app frame: views as tabs, a toolbar, four balanced columns, an agent at work, and details in a side panel.', files: ['screen.tsx', 'board.tsx', 'item-panel.tsx', 'side-nav.tsx', 'views.tsx', 'data.ts'], Component: ProjectBoardScreen },
  { slug: 'assistant', title: 'Assistant', description: 'A greeting with suggested prompts, then a thread where an agent runs a plan and asks before it changes anything.', files: ['screen.tsx', 'greeting.tsx', 'prompt.tsx', 'answers.tsx', 'side-nav.tsx'], Component: AssistantScreen },
  { slug: 'agents-admin', title: 'Agents admin', description: 'Non-human identities for admins: numbers that matter, a ring of allowed and blocked actions, agents with owners and modes, and an activity log.', files: ['screen.tsx', 'security.tsx', 'identities.tsx', 'activity.tsx', 'data.ts'], Component: AgentsAdminScreen },
  { slug: 'payments', title: 'Payments dashboard', description: 'Balances in TZS, KES and USD, volume by channel, mobile-money payouts with a paged table, and an illustrated empty view.', files: ['screen.tsx', 'charts.tsx', 'payouts.tsx', 'data.ts'], Component: PaymentsScreen },
  { slug: 'settings', title: 'Settings', description: 'Workspace settings inside the app frame: section navigation, a validated form, and a destructive action behind a confirm dialog.', files: ['screen.tsx', 'workspace-form.tsx', 'delete-workspace.tsx'], Component: SettingsScreen },
  { slug: 'landing-saas', title: 'Product landing', description: 'A landing page for a work-management product: hero with a live preview, features, testimonial and pricing.', files: ['screen.tsx', 'sections.tsx'], Component: LandingSaasScreen },
  { slug: 'landing-dev', title: 'Developer platform landing', description: 'An announcement banner, a code-first hero with tabs per language, features and a getting-started tracker.', files: ['screen.tsx', 'code-samples.tsx'], Component: LandingDevScreen },
];
