// SPDX-License-Identifier: Apache-2.0
import { Lozenge } from '@interlink/react/lozenge';

const SLICES = [
  { label: 'Allowed', value: 1212, color: 'var(--il-chart-success-bold)' },
  { label: 'Asked first', value: 63, color: 'var(--il-chart-brand)' },
  { label: 'Blocked', value: 9, color: 'var(--il-chart-danger-bold)' },
];

function Ring() {
  const total = SLICES.reduce((s, x) => s + x.value, 0);
  const r = 40;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg className="scr-ring" viewBox="0 0 100 100" role="img" aria-label={SLICES.map((s) => `${s.label} ${s.value}`).join(', ')}>
      <circle cx="50" cy="50" r={r} fill="none" stroke="var(--il-background-neutral)" strokeWidth="12" />
      {SLICES.map((s) => {
        const len = Math.max((s.value / total) * c, 2);
        const el = <circle key={s.label} cx="50" cy="50" r={r} fill="none" stroke={s.color} strokeWidth="12" strokeDasharray={`${len - 1} ${c - len + 1}`} strokeDashoffset={-offset} transform="rotate(-90 50 50)" />;
        offset += len;
        return el;
      })}
      <text x="50" y="48" textAnchor="middle" className="scr-ring-value">94%</text>
      <text x="50" y="62" textAnchor="middle" className="scr-ring-label">allowed</text>
    </svg>
  );
}

/** Three numbers that matter to an admin, and how agent actions were decided this week. */
export function SecurityOverview() {
  return (
    <div className="scr-admin-top">
      <div className="scr-kpis">
        <div className="scr-card-box">
          <div className="scr-kpi-label">Active agents</div>
          <div className="scr-kpi-value">9</div>
          <Lozenge appearance="success">+2 this month</Lozenge>
        </div>
        <div className="scr-card-box">
          <div className="scr-kpi-label">Actions this week</div>
          <div className="scr-kpi-value">1,284</div>
          <Lozenge appearance="information">+18%</Lozenge>
        </div>
        <div className="scr-card-box">
          <div className="scr-kpi-label">Blocked by policy</div>
          <div className="scr-kpi-value">9</div>
          <Lozenge appearance="danger">Review 1</Lozenge>
        </div>
      </div>
      <section className="scr-card-box scr-ring-card" aria-labelledby="ring-title">
        <h2 id="ring-title" className="scr-card-title">Agent actions this week</h2>
        <div className="scr-ring-body">
          <Ring />
          <ul className="scr-legend">
            {SLICES.map((s) => (
              <li key={s.label}>
                <span className="scr-legend-swatch" style={{ background: s.color }} />
                {s.label}
                <strong>{s.value.toLocaleString('en-US')}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
