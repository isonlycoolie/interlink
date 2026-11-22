// SPDX-License-Identifier: Apache-2.0
'use client';
import { Inline, Text } from '@interlink/react/primitives';
import type { CSSProperties } from 'react';

/** Grouped bars drawn with chart color tokens; the table summary under it carries the numbers for screen readers. */
export function BarChart({ labels, series, max, unit }: { labels: string[]; series: { name: string; color: string; values: number[] }[]; max: number; unit: string }) {
  return (
    <figure className="scr-chart">
      <div className="scr-bars" role="img" aria-label={`${series.map((s) => s.name).join(' and ')} per week, up to ${max}${unit}`}>
        {labels.map((label, i) => (
          <div key={label} className="scr-bar-group">
            <div className="scr-bar-stack">
              {series.map((s) => (
                <span key={s.name} className="scr-bar" style={{ '--scr-h': `${(s.values[i]! / max) * 100}%`, '--scr-c': s.color } as CSSProperties} />
              ))}
            </div>
            <Text size="small" color="color.text.subtlest">
              {label}
            </Text>
          </div>
        ))}
      </div>
      <figcaption>
        <Inline space="space.200">
          {series.map((s) => (
            <Inline key={s.name} space="space.075" alignBlock="center">
              <span className="scr-swatch" style={{ background: s.color }} aria-hidden="true" />
              <Text size="small">{s.name}</Text>
            </Inline>
          ))}
        </Inline>
      </figcaption>
    </figure>
  );
}

/** A line over time, as an SVG polyline in a chart token color. */
export function TrendChart({ labels, values, max, label }: { labels: string[]; values: number[]; max: number; label: string }) {
  const points = values.map((v, i) => `${(i / (values.length - 1)) * 100},${100 - (v / max) * 100}`).join(' ');
  return (
    <figure className="scr-chart">
      <svg className="scr-trend" viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label={label}>
        <polyline points={`0,100 ${points} 100,100`} className="scr-trend-area" />
        <polyline points={points} className="scr-trend-line" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="scr-axis">
        {labels.map((l) => (
          <Text key={l} size="small" color="color.text.subtlest">
            {l}
          </Text>
        ))}
      </div>
    </figure>
  );
}
