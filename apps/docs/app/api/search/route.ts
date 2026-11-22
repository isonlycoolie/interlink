// SPDX-License-Identifier: Apache-2.0
import { createFromSource } from 'fumadocs-core/search/server';
import { source } from '@/lib/source';

export const revalidate = false;

/** Static search index, exported at build time and searched in the browser. */
export const { staticGET: GET } = createFromSource(source);
