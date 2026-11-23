// SPDX-License-Identifier: Apache-2.0
import { ai } from './ai';
import { commerce } from './commerce';
import { communication } from './communication';
import { data } from './data';
import { empty } from './empty';
import { finance } from './finance';
import { onboarding } from './onboarding';
import { people } from './people';
import { security } from './security';
import { status } from './status';
import type { IllustrationGroup, IllustrationInfo } from './types';

export type { IllustrationGroup, IllustrationInfo } from './types';

/** Every illustration, grouped, with its meaning. Names are the PascalCase of the slug. */
export const catalog: IllustrationInfo[] = [...empty, ...status, ...onboarding, ...finance, ...ai, ...commerce, ...people, ...data, ...communication, ...security];

/** The groups in reading order, for galleries and filters. */
export const groups: IllustrationGroup[] = [...new Set(catalog.map((c) => c.group))];

export const pascal = (slug: string) => slug.replace(/(^|-)([a-z0-9])/g, (_, __, c: string) => c.toUpperCase());
