// SPDX-License-Identifier: Apache-2.0
import type { Guideline, Topic } from './define';
import { spacing } from './foundations/spacing';

export type { Guideline, Severity, Topic } from './define';

/** Every guideline, in page order. */
export const allGuidelines: readonly Guideline[] = [...spacing];

export function getGuideline(id: string): Guideline | undefined {
  return allGuidelines.find((g) => g.id === id);
}

export function byTopic(topic: Topic, section?: string): Guideline[] {
  return allGuidelines.filter((g) => g.topic === topic && (section === undefined || g.section === section));
}
