// SPDX-License-Identifier: Apache-2.0
import type { Guideline, Topic } from './define';
import { accents, color } from './foundations/color';
import { elevation } from './foundations/elevation';
import { spacing } from './foundations/spacing';
import { typography } from './foundations/typography';

export type { Guideline, Severity, Topic } from './define';

/** Every guideline, in page order. */
export const allGuidelines: readonly Guideline[] = [...color, ...accents, ...spacing, ...elevation, ...typography];

export function getGuideline(id: string): Guideline | undefined {
  return allGuidelines.find((g) => g.id === id);
}

export function byTopic(topic: Topic, section?: string): Guideline[] {
  return allGuidelines.filter((g) => g.topic === topic && (section === undefined || g.section === section));
}
