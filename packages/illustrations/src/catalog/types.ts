// SPDX-License-Identifier: Apache-2.0
export type IllustrationGroup =
  | 'Empty states'
  | 'Status'
  | 'Onboarding'
  | 'Finance'
  | 'AI and collaboration'
  | 'Commerce'
  | 'People and teams'
  | 'Data and developers'
  | 'Communication and support'
  | 'Security and identity';

export interface IllustrationInfo {
  slug: string;
  group: IllustrationGroup;
  /** The one thing the picture says. Planned before it was drawn. */
  meaning: string;
  keywords: string[];
  /** Hero pieces are twice as wide as they are tall. */
  hero?: boolean;
}

/** Makes an entry maker for one group. */
export const maker =
  (group: IllustrationGroup) =>
  (slug: string, meaning: string, keywords: string[], hero = false): IllustrationInfo => ({ slug, group, meaning, keywords, hero });
