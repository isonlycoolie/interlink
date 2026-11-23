// SPDX-License-Identifier: Apache-2.0
import type { ComponentType } from 'react';
import GoalsScreen from './goals/screen';
import HomeScreen from './home/screen';
import ProfileScreen from './profile/screen';
import ProjectScreen from './project/screen';
import UpdatesScreen from './updates/screen';

export interface ScreenInfo {
  slug: string;
  title: string;
  description: string;
  /** Dashboards are product apps; landing pages are marketing sites. */
  kind: 'dashboard' | 'landing';
  /** Source files, relative to screens/<slug>, in reading order. */
  files: string[];
  Component: ComponentType;
}

/** Full screens built only from Interlink. They prove the system end to end and serve as exemplars for agents. */
export const screens: ScreenInfo[] = [
  { slug: 'home', title: 'Home', description: 'The home of the platform: a greeting band, your apps, frequently visited places and your work by view.', kind: 'dashboard', files: ['screen.tsx', 'banner.tsx', 'side-nav.tsx'], Component: HomeScreen },
  { slug: 'goals', title: 'Goal directory', description: 'Every goal with its status, score, target and owner, behind views, search and filters, with coach marks for first use.', kind: 'dashboard', files: ['screen.tsx', 'table.tsx', 'data.ts', 'side-nav.tsx'], Component: GoalsScreen },
  { slug: 'project', title: 'Project page', description: 'A project’s About page: status menu, the why behind the work, comments, and a ruled rail of owners, goals and links.', kind: 'dashboard', files: ['screen.tsx', 'rail.tsx', 'status-menu.tsx', 'side-nav.tsx'], Component: ProjectScreen },
  { slug: 'updates', title: 'Status updates', description: 'The weekly catch-up: six status tiles with their change, each project’s latest update, and your projects beside them.', kind: 'dashboard', files: ['screen.tsx', 'feed.tsx'], Component: UpdatesScreen },
  { slug: 'profile', title: 'Profile', description: 'A person’s profile: a scribble banner, how to work with them, recent work, their reporting line and teams.', kind: 'dashboard', files: ['screen.tsx', 'sections.tsx'], Component: ProfileScreen },
];
