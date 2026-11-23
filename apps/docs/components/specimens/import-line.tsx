// SPDX-License-Identifier: Apache-2.0
'use client';
import { CopyButton } from '@/components/mdx/copy-button';

/** One default-import line, coloured like the site's code blocks, with the copy button in its corner. */
export function ImportLine({ name, from }: { name: string; from: string }) {
  return (
    <div className="doc-code spec-import">
      <div className="doc-code-copy">
        <CopyButton />
      </div>
      <pre>
        <code>
          <span className="spec-import-kw">import</span> <span className="spec-import-name">{name}</span>{' '}
          <span className="spec-import-kw">from</span> <span className="spec-import-str">{`'${from}'`}</span>;
        </code>
      </pre>
    </div>
  );
}
