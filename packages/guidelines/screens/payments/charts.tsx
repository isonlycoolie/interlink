// SPDX-License-Identifier: Apache-2.0
import { BALANCES, CHANNELS, WEEKS, money } from './data';
import { Lozenge } from '@interlink/react/lozenge';

/** One card per currency: balance, change this month and what is still settling. */
export function Balances() {
  return (
    <div className="scr-kpis">
      {BALANCES.map((b) => (
        <section key={b.currency} className="scr-card-box scr-balance" aria-label={`${b.currency} balance`}>
          <div className="scr-spread">
            <span className="scr-balance-code">{b.currency}</span>
            <Lozenge appearance={b.change >= 0 ? 'success' : 'danger'}>{`${b.change >= 0 ? '+' : ''}${b.change}%`}</Lozenge>
          </div>
          <div className="scr-kpi-value">{money(b.currency, b.amount)}</div>
          <div className="scr-muted">
            {b.country} · {money(b.currency, b.pending)} settling
          </div>
        </section>
      ))}
    </div>
  );
}

const MAX = 140;

/** Weekly volume as stacked bars: mobile money below, cards on top. */
export function Volume() {
  return (
    <section className="scr-card-box" aria-labelledby="vol-title">
      <div className="scr-spread">
        <h2 id="vol-title" className="scr-card-title">Volume by channel</h2>
        <ul className="scr-legend scr-legend-row">
          <li><span className="scr-legend-swatch" style={{ background: 'var(--il-chart-categorical-1)' }} />Mobile money</li>
          <li><span className="scr-legend-swatch" style={{ background: 'var(--il-chart-categorical-2)' }} />Cards</li>
        </ul>
      </div>
      <div className="scr-bars" role="img" aria-label={`Weekly volume in thousands of US dollars. ${WEEKS.map((w) => `${w.week}: ${w.mobile} mobile, ${w.card} card`).join('; ')}`}>
        {WEEKS.map((w) => (
          <div key={w.week} className="scr-bar-col">
            <div className="scr-bar-stack" style={{ height: `${((w.mobile + w.card) / MAX) * 100}%` }}>
              <span style={{ flex: w.card, background: 'var(--il-chart-categorical-2)' }} />
              <span style={{ flex: w.mobile, background: 'var(--il-chart-categorical-1)' }} />
            </div>
            <span className="scr-bar-label">{w.week}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Share of payouts per channel, as labelled meters. */
export function Channels() {
  return (
    <section className="scr-card-box" aria-labelledby="ch-title">
      <h2 id="ch-title" className="scr-card-title">Payout channels</h2>
      <ul className="scr-meters">
        {CHANNELS.map((c, i) => (
          <li key={c.label}>
            <span className="scr-spread">
              <span>{c.label}</span>
              <strong>{c.share}%</strong>
            </span>
            <span className="scr-meter">
              <span style={{ width: `${c.share}%`, background: `var(--il-chart-categorical-${i + 1})` }} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
