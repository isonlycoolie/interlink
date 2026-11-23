// SPDX-License-Identifier: Apache-2.0
import type { ComponentType } from 'react';

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
export const screens: ScreenInfo[] = [];
