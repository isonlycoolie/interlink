// SPDX-License-Identifier: Apache-2.0
import type { ComponentType } from 'react';
import AgentsAdminScreen from './agents-admin/screen';
import AssistantScreen from './assistant/screen';
import LandingFieldlineScreen from './landing-fieldline/screen';
import LandingLumenScreen from './landing-lumen/screen';
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
  { slug: 'team-space', title: 'Team space', description: 'A live page in a team space: the doc tree, a photo banner, mentions, goals, a timeline, the team, and who is editing now.', files: ['screen.tsx', 'plan.tsx', 'team.tsx', 'side-nav.tsx'], Component: TeamSpaceScreen },
  { slug: 'project-board', title: 'Project board', description: 'A sprint board in the app frame: views as tabs, a toolbar, four balanced columns, an agent at work, and details in a side panel.', files: ['screen.tsx', 'board.tsx', 'item-panel.tsx', 'side-nav.tsx', 'views.tsx', 'data.ts'], Component: ProjectBoardScreen },
  { slug: 'assistant', title: 'Assistant', description: 'A greeting with suggested prompts, then a thread where an agent runs a plan and asks before it changes anything.', files: ['screen.tsx', 'greeting.tsx', 'prompt.tsx', 'answers.tsx', 'side-nav.tsx'], Component: AssistantScreen },
  { slug: 'agents-admin', title: 'Agents admin', description: 'Non-human identities for admins: numbers that matter, a ring of allowed and blocked actions, agents with owners and modes, and an activity log.', files: ['screen.tsx', 'security.tsx', 'identities.tsx', 'activity.tsx', 'data.ts'], Component: AgentsAdminScreen },
  { slug: 'payments', title: 'Payments dashboard', description: 'Balances in TZS, KES and USD, volume by channel, mobile-money payouts with a paged table, and an illustrated empty view.', files: ['screen.tsx', 'charts.tsx', 'payouts.tsx', 'data.ts'], Component: PaymentsScreen },
  { slug: 'settings', title: 'Settings', description: 'Workspace settings inside the app frame: section navigation, a validated form, and a destructive action behind a confirm dialog.', files: ['screen.tsx', 'workspace-form.tsx', 'delete-workspace.tsx'], Component: SettingsScreen },
  { slug: 'landing-lumen', title: 'Work platform landing', description: 'A product site on pure colour blocks: a hero with the product on an angled block, product tabs, features on a grid canvas, proof and a mega footer.', files: ['screen.tsx', 'hero.tsx', 'window.tsx', 'logos.tsx', 'products.tsx', 'features.tsx', 'proof.tsx', 'closing.tsx'], Component: LandingLumenScreen },
  { slug: 'landing-fieldline', title: 'Developer cloud landing', description: 'A developer cloud site: a terminal hero on ink, product cards, a dot map of the network with new African sites, SDK tabs, pricing and status.', files: ['screen.tsx', 'hero.tsx', 'products.tsx', 'network.tsx', 'build.tsx', 'world.ts'], Component: LandingFieldlineScreen },
];
