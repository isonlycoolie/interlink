// SPDX-License-Identifier: Apache-2.0
import type { ComponentType } from 'react';
import AnalyticsScreen from './analytics/screen';
import LandingDevScreen from './landing-dev/screen';
import LandingSaasScreen from './landing-saas/screen';
import SettingsScreen from './settings/screen';
import WorkTrackingScreen from './work-tracking/screen';

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
  { slug: 'work-tracking', title: 'Work tracking', description: 'A project board with side navigation, filters, board and list views, item details in a drawer and save flags.', files: ['screen.tsx', 'board.tsx', 'item-drawer.tsx', 'side-nav.tsx', 'data.ts'], Component: WorkTrackingScreen },
  { slug: 'analytics', title: 'Analytics admin', description: 'Filters, metric tiles, charts on chart tokens and a sortable, paged table of projects.', files: ['screen.tsx', 'charts.tsx', 'data.ts'], Component: AnalyticsScreen },
  { slug: 'settings', title: 'Settings', description: 'A validated form in sections, notification preferences and a destructive action behind a confirm dialog.', files: ['screen.tsx', 'delete-workspace.tsx'], Component: SettingsScreen },
  { slug: 'landing-saas', title: 'Product landing', description: 'A landing page for a work-management product: hero with a live preview, features, testimonial and pricing.', files: ['screen.tsx', 'sections.tsx'], Component: LandingSaasScreen },
  { slug: 'landing-dev', title: 'Developer platform landing', description: 'An announcement banner, a code-first hero with tabs per language, features and a getting-started tracker.', files: ['screen.tsx', 'code-samples.tsx'], Component: LandingDevScreen },
];
