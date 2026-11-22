// SPDX-License-Identifier: Apache-2.0
import ChevronRightIcon from '@interlink/icons/core/chevron-right';
import { highlight } from 'fumadocs-core/highlight';
import type { ReactNode } from 'react';
import { CopyButton } from './copy-button';

const LABEL: Record<string, string> = { tsx: 'TSX', ts: 'TypeScript', bash: 'Terminal', css: 'CSS', json: 'JSON' };

/** The shared frame of every code block: language, copy button, then the highlighted code. */
export function CodeFrame({ lang, children }: { lang?: string; children: ReactNode }) {
  return (
    <div className="doc-code">
      <div className="doc-code-head">
        <span className="doc-code-lang">{lang ? (LABEL[lang] ?? lang) : 'Code'}</span>
        <CopyButton />
      </div>
      {children}
    </div>
  );
}

/** Highlighted code at build time, in the light and dark syntax themes the MDX fences use. */
export async function CodeBlock({ code, lang = 'tsx' }: { code: string; lang?: string }) {
  const highlighted = await highlight(code.trimEnd(), { lang, themes: { light: 'github-light', dark: 'github-dark' }, defaultColor: false });
  return <CodeFrame lang={lang}>{highlighted}</CodeFrame>;
}

/**
 * The one "Show code" disclosure used by examples, Do/Don't cards and screens. It opens and closes smoothly
 * where the browser can animate to auto height, and instantly elsewhere.
 */
export function CodeDisclosure({ code, lang, label = 'Show code', className }: { code: string; lang?: string; label?: string; className?: string }) {
  return (
    <details className={['doc-disclosure', className].filter(Boolean).join(' ')}>
      <summary className="doc-disclosure-summary il-focusable">
        <span className="doc-disclosure-chevron" aria-hidden="true">
          <ChevronRightIcon label="" size="small" />
        </span>
        {label}
      </summary>
      <CodeBlock code={code} lang={lang} />
    </details>
  );
}
