// SPDX-License-Identifier: Apache-2.0
import { tokenNames } from '@interlink/tokens';
import type { ReactNode } from 'react';

const cssVar = (name: string) => `var(${(tokenNames as Record<string, string>)[name] ?? '--il-text'})`;

export interface Segment {
  value: number;
  /** A chart colour token, such as color.chart.categorical.1. */
  token: string;
}

/** A donut chart drawn with chart tokens; children sit in the middle. */
export function Donut({ segments, children, size = 'large' }: { segments: Segment[]; children?: ReactNode; size?: 'medium' | 'large' }) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = 42;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <span className="ilk-donut" data-size={size}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {segments.map((s, i) => {
          const len = (s.value / total) * c;
          const el = <circle key={i} cx="50" cy="50" r={r} fill="none" strokeWidth="8" stroke={cssVar(s.token)} strokeDasharray={`${len - 1} ${c - len + 1}`} strokeDashoffset={-offset} transform="rotate(-90 50 50)" />;
          offset += len;
          return el;
        })}
      </svg>
      <span className="ilk-donut-center">{children}</span>
    </span>
  );
}

/** A minimal bar chart with gridlines and axis values, drawn with one chart token. */
export function Bars({ values, token = 'color.chart.brand', max = 500 }: { values: number[]; token?: string; max?: number }) {
  return (
    <span className="ilk-bars" aria-hidden="true">
      <span className="ilk-bars-axis">
        <span>{max}</span>
        <span>{Math.round(max * 0.6)}</span>
        <span>0</span>
      </span>
      <span className="ilk-bars-plot">
        {values.map((v, i) => (
          <span key={i} className="ilk-bar" style={{ height: `${(v / max) * 100}%`, background: cssVar(token) }} />
        ))}
      </span>
    </span>
  );
}

/** Legend rows: swatch, label and a count badge. */
export function Legend({ items, children }: { items: { label: string; token: string; count: number }[]; children: (item: { label: string; count: number }) => ReactNode }) {
  return (
    <span className="ilk-legend">
      {items.map((it) => (
        <span key={it.label} className="ilk-legend-row">
          <span className="ilk-legend-swatch" style={{ background: cssVar(it.token) }} aria-hidden="true" />
          {children(it)}
        </span>
      ))}
    </span>
  );
}

/** A tooltip bubble for illustrations, placed under its trigger. A maxWidth forces truncation. */
export function TooltipShape({ children, maxWidth }: { children: ReactNode; maxWidth?: string }) {
  return (
    <span className="ilk-tooltip" style={maxWidth ? { maxWidth } : undefined}>
      {children}
    </span>
  );
}
