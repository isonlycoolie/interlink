// SPDX-License-Identifier: Apache-2.0

export type Severity = 'must' | 'should' | 'consider';
export type Topic =
  | 'color' | 'accents' | 'spacing' | 'elevation' | 'border' | 'radius' | 'typography' | 'content' | 'iconography' | 'motion'
  | 'button' | 'lozenge' | 'icon' | 'form' | 'tooltip' | 'tag' | 'badge' | 'link' | 'empty-state' | 'progress-bar';

/**
 * One usage rule. `pair` rules have a good and a bad live example; `do` or `dont` rules have one.
 * Example files live in examples/<area>/<topic>/<slug>.do.tsx and .dont.tsx, where slug is the id after the dot.
 */
export interface Guideline {
  /** Stable id quoted by docs, lint messages and agent skills: `<topic>.<slug>`. */
  id: string;
  topic: Topic;
  /** Section on the docs page this rule belongs to. */
  section: string;
  kind: 'pair' | 'do' | 'dont';
  severity: Severity;
  /** The rule in one sentence, written as an instruction. */
  rule: string;
  /** Caption under the good example. */
  do?: string;
  /** Caption under the bad example. */
  dont?: string;
  /** Why the rule exists, for people and agents who need to judge edge cases. */
  why: string;
  /** Reference items this rule rebuilds, used for coverage and the compare view. */
  basis: string[];
}

export function defineGuidelines<const T extends readonly Guideline[]>(list: T): T {
  return list;
}
