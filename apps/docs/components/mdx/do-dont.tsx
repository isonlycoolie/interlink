// SPDX-License-Identifier: Apache-2.0
import StatusErrorIcon from '@interlink/icons/core/status-error';
import StatusSuccessIcon from '@interlink/icons/core/status-success';
import StatusWarningIcon from '@interlink/icons/core/status-warning';
import type { ReactNode } from 'react';

export type DoDontKind = 'do' | 'dont' | 'caution';
const LABEL: Record<DoDontKind, string> = { do: 'Do', dont: 'Don’t', caution: 'Caution' };
const ICON = { do: StatusSuccessIcon, dont: StatusErrorIcon, caution: StatusWarningIcon };
const COLOR = { do: 'color.icon.success', dont: 'color.icon.danger', caution: 'color.icon.warning' } as const;

/** Two Do/Don't cards side by side; stacks on narrow screens. */
export function DoDontGrid({ children }: { children: ReactNode }) {
  return <div className="doc-dodont-grid">{children}</div>;
}

/** A live example on a neutral tile, a coloured rule and the guidance in one sentence. */
export function DoDont({ kind, caption, children, code }: { kind: DoDontKind; caption: ReactNode; children: ReactNode; code?: string }) {
  const Icon = ICON[kind];
  return (
    <figure className="doc-dodont" data-kind={kind}>
      <div className="doc-dodont-example">{children}</div>
      <figcaption className="doc-dodont-caption">
        <span className="doc-dodont-label">
          <Icon label="" color={COLOR[kind]} />
          {LABEL[kind]}
        </span>
        <span>{caption}</span>
      </figcaption>
      {code ? (
        <details className="doc-dodont-code">
          <summary className="il-focusable">Show code</summary>
          <pre>
            <code>{code}</code>
          </pre>
        </details>
      ) : null}
    </figure>
  );
}

/** A framed live example with an optional caption under it. */
export function Example({ children, caption, padded = true }: { children: ReactNode; caption?: ReactNode; padded?: boolean }) {
  return (
    <figure className="doc-example">
      <div className="doc-example-stage" data-padded={padded || undefined}>
        {children}
      </div>
      {caption ? <figcaption className="doc-example-caption">{caption}</figcaption> : null}
    </figure>
  );
}
