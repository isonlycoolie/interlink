// SPDX-License-Identifier: Apache-2.0
import { llms, loader } from 'fumadocs-core/source';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { defineDocs } from 'fumadocs-mdx/macro';
import { z } from 'zod';

const docs = defineDocs({
  dir: 'content',
  docs: {
    schema: pageSchema.extend({
      status: z.enum(['beta', 'caution', 'early-access', 'deprecated']).optional(),
      notice: z.string().optional(),
    }),
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

export const source = loader({ baseUrl: '/', source: docs.toFumadocsSource() });

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})\n\n${await page.data.getText('processed')}`,
});
