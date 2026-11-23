// SPDX-License-Identifier: Apache-2.0
import type { ComponentType } from 'react';
import GoalsScreen from './goals/screen';
import HomeScreen from './home/screen';

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
];
