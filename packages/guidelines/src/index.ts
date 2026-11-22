// SPDX-License-Identifier: Apache-2.0
import type { Guideline, Topic } from './define';
import { accents, color } from './foundations/color';
import { elevation } from './foundations/elevation';
import { spacing } from './foundations/spacing';
import { typography } from './foundations/typography';
import { button } from './components/button';
import { icon, lozenge } from './components/lozenge-icon';
import { badge, emptyState, link, progressBar, tag, tooltip } from './components/display';
import { form } from './components/form';
import { tabs } from './components/navigation';
import { menu, modalDialog } from './components/overlays';
import { select } from './components/select';
import { dateLabel, objectGuidelines, spotlight, tile } from './components/wave2b';
import { pageHeader, panel } from './components/shell';

export type { Guideline, Severity, Topic } from './define';

/** Every guideline, in page order. */
export const allGuidelines: readonly Guideline[] = [...color, ...accents, ...spacing, ...elevation, ...typography, ...button, ...lozenge, ...icon, ...form, ...tooltip, ...tag, ...badge, ...link, ...emptyState, ...progressBar, ...select, ...menu, ...modalDialog, ...tabs, ...dateLabel, ...spotlight, ...tile, ...objectGuidelines, ...pageHeader, ...panel];

export function getGuideline(id: string): Guideline | undefined {
  return allGuidelines.find((g) => g.id === id);
}

export function byTopic(topic: Topic, section?: string): Guideline[] {
  return allGuidelines.filter((g) => g.topic === topic && (section === undefined || g.section === section));
}
